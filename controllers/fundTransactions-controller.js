const mongoose = require("mongoose");

const Transaction = require("../models/transactionSchema");
const Portfolio = require("../models/portfolioSchema");
const User = require("../models/userSchema");
const MutualFundList = require("../models/mutualFundListSchema");
const HttpError = require("../models/http-error");

const sellFund = async (req, res, next) => {
  const { investor, amount, fundId } = req.body;
  const today = new Date().toISOString().slice(0, 10);
  const price = parseFloat(amount);

  let fund;
  try {
    fund = await MutualFundList.findById(fundId);
  } catch (error) {
    console.error("Error finding Mutual fund to sell with given id");
    console.log(error);
    return next(
      new HttpError("Failed to sell Mutual fund, please try again", 500)
    );
  }

  if (!fund)
    return next(new HttpError("Mutual fund with given id does not exist", 404));

  let user;
  try {
    user = await User.findById(investor);
  } catch (error) {
    console.error("Error finding user with given Id");
    console.log(error);
    return next(
      new HttpError("Failed to sell Mutual fund, please try again", 500)
    );
  }

  if (!user)
    return next(new HttpError("User with given id does not exist", 404));

  const quantity = price / fund.nav[0].nav;

  const transaction = new Transaction({
    investor: user._id,
    assetId: fund._id,
    assetName: fund.fundName,
    date: new Date(today),
    units: quantity,
    status: "Sell",
    amount: price,
    onModel: "MutualFundList",
  });

  let portfolio;
  try {
    portfolio = await Portfolio.findOne({ investor: user._id });
  } catch (error) {
    console.error("Error finding the portfolio with the given Id");
    console.log(error);
    return next(
      new HttpError("Failed to sell Mutual fund, please try again", 500)
    );
  }

  const index = portfolio.mutualFunds.findIndex(
    (each) => each._id === fund._id
  );
  if (index === -1)
    return next(new HttpError("User didn't buy this Mutual fund", 404));

  if (portfolio.mutualFunds[index].units == quantity) {
    portfolio.mutualFunds.splice(index, 1);
  } else if (portfolio.mutualFunds[index].units > quantity) {
    portfolio.mutualFunds[index].units -= quantity;
  } else
    return next(
      new HttpError("User does not have that amount of mutual fund", 404)
    );

  user.tradingBalance += price;

  try {
    const sess = await mongoose.startSession();
    await sess.withTransaction(async () => {
      await transaction.save({ session: sess });
      await portfolio.save({ session: sess });
      await user.save({ session: sess });
    });
    await sess.endSession();
  } catch (error) {
    console.error("Transaction failed");
    console.log(error);
    return next(
      new HttpError("Failed to sell Mutual fund, please try again", 500)
    );
  }

  res.status(200).json({
    message: "Mutual fund sold, transaction complete",
    transactionNumber: transaction._id,
  });
};

const buyFund = async (req, res, next) => {
  const { investor, amount, fundId } = req.body;
  const today = new Date().toISOString().slice(0, 10);
  const price = parseFloat(amount);

  let fund;
  try {
    fund = await MutualFundList.findById(fundId);
  } catch (error) {
    console.error("Error finding Mutual fund with given Id");
    console.log(error);
    return next(
      new HttpError("Failed to buy Mutual fund, please try again", 500)
    );
  }

  if (!fund)
    return next(new HttpError("Mutual fund with given id does not exist", 404));

  let user;
  try {
    user = await User.findById(investor);
  } catch (error) {
    console.error("Error occured while finding the user with the given Id");
    console.log(error);
    return next(
      new HttpError("Failed to buy Mutual fund, please try again", 500)
    );
  }

  if (!user)
    return next(new HttpError("User with given id does not exist", 404));

  const quantity = price / fund.nav[0].nav;

  const transaction = new Transaction({
    investor: user._id,
    assetId: fund._id,
    assetName: fund.fundName,
    date: new Date(today),
    units: quantity,
    status: "Buy",
    amount: price,
    onModel: "MutualFundList",
  });

  let portfolio;
  try {
    portfolio = await Portfolio.findOne({ investor: user._id });
  } catch (error) {
    console.error("Error finding the portfolio with the given Id");
    console.log(error);
    return next(
      new HttpError("Failed to buy Mutual Fund, please try again", 500)
    );
  }

  const index = portfolio.mutualFunds.findIndex(
    (each) => each._id === fund._id
  );
  if (index === -1) {
    const newFund = {
      fund: fund._id,
      units: quantity,
      nav: fund.nav[0].nav,
    };
    portfolio.mutualFunds.push(newFund);
  } else {
    const availableUnits = portfolio.mutualFunds[index].units;
    const newFund = {
      fund: fund._id,
      units: availableUnits + quantity,
      nav:
        (price + portfolio.mutualFunds[index].nav * availableUnits) /
        (quantity + availableUnits),
    };
    portfolio.mutualFunds.splice(index, 1, newFund);
  }

  user.tradingBalance -= price;

  try {
    const sess = await mongoose.startSession();
    await sess.withTransaction(async () => {
      await transaction.save({ session: sess });
      await portfolio.save({ session: sess });
      await user.save({ session: sess });
    });
    await sess.endSession();
  } catch (error) {
    console.error("Transaction failed");
    console.log(error);
    return next(
      new HttpError("Failed to buy Mutual Fund, please try again", 500)
    );
  }

  res.status(200).json({
    message: "Mutual Fund bought, transaction complete",
    transactionNumber: transaction._id,
  });
};

exports.sellFund = sellFund;
exports.buyFund = buyFund;
