const mongoose = require("mongoose");

const Transaction = require("../models/transactionSchema");
const Portfolio = require("../models/portfolioSchema");
const User = require("../models/userSchema");
const StockList = require("../models/stockListSchema");
const HttpError = require("../models/http-error");

const sellStock = async (req, res, next) => {
  const { investor, units, sellPrice, stockId } = req.body;
  const today = new Date().toISOString().slice(0, 10);
  const quantity = parseInt(units);
  const price = parseFloat(sellPrice);

  let stock;
  try {
    stock = await StockList.findById(stockId);
  } catch (error) {
    console.error("Error finding stock to sell with given id");
    console.log(error);
    return next(new HttpError("Failed to sell stock, please try again", 500));
  }

  if (!stock)
    return next(new HttpError("Stock with given id does not exist", 404));

  let user;
  try {
    user = await User.findById(investor);
  } catch (error) {
    console.error("Error finding user with given Id");
    console.log(error);
    return next(new HttpError("Failed to sell stock, please try again", 500));
  }

  if (!user)
    return next(new HttpError("User with given id does not exist", 404));

  const transaction = new Transaction({
    investor: user._id,
    assetId: stock._id,
    assetName: stock.ticker,
    date: new Date(today),
    units: quantity,
    status: "Sell",
    amount: price * quantity,
    onModel: "StockList",
  });

  let portfolio;
  try {
    portfolio = await Portfolio.findOne({ investor: user._id });
  } catch (error) {
    console.error("Error finding the portfolio with the given Id");
    console.log(error);
    return next(new HttpError("Failed to sell stock, please try again", 500));
  }

  const index = portfolio.stocks.findIndex((each) => each._id === stock._id);
  if (index === -1)
    return next(new HttpError("User didn't buy this stock", 404));

  if (portfolio.stocks[index].quantity == quantity) {
    portfolio.stocks.splice(index, 1);
  } else if (portfolio.stocks[index].quantity > quantity) {
    portfolio.stocks[index].quantity -= quantity;
  } else
    return next(new HttpError("User does not have that amount of stocks", 404));

  user.tradingBalance += quantity * price;

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
    return next(new HttpError("Failed to sell stock, please try again", 500));
  }

  res.status(200).json({
    message: "Stock sold, transaction complete",
    transactionNumber: transaction._id,
  });
};

const buyStock = async (req, res, next) => {
  const { investor, units, buyPrice, stockId } = req.body;
  const today = new Date().toISOString().slice(0, 10);
  const quantity = parseInt(units);
  const price = parseFloat(buyPrice);

  let stock;
  try {
    stock = await StockList.findById(stockId);
  } catch (error) {
    console.error("Error finding stock with given Id");
    console.log(error);
    return next(new HttpError("Failed to buy stock, please try again", 500));
  }

  if (!stock)
    return next(new HttpError("Stock with given id does not exist", 404));

  let user;
  try {
    user = await User.findById(investor);
  } catch (error) {
    console.error("Error occured while finding the user with the given Id");
    console.log(error);
    return next(new HttpError("Failed to buy stock, please try again", 500));
  }

  if (!user)
    return next(new HttpError("User with given id does not exist", 404));

  const transaction = new Transaction({
    investor: user._id,
    assetId: stock._id,
    assetName: stock.ticker,
    date: new Date(today),
    units: quantity,
    status: "Buy",
    amount: price * quantity,
    onModel: "StockList",
  });

  let portfolio;
  try {
    portfolio = await Portfolio.findOne({ investor: user._id });
  } catch (error) {
    console.error("Error finding the portfolio with the given Id");
    console.log(error);
    return next(new HttpError("Failed to buy stock, please try again", 500));
  }

  const index = portfolio.stocks.findIndex((each) => each._id === stock._id);
  if (index === -1) {
    const newStock = {
      stock: stock._id,
      quantity,
      buyPrice: price,
    };
    portfolio.stocks.push(newStock);
  } else {
    const availableQuantity = portfolio.stocks[index].quantity;
    const newStock = {
      stock: stock._id,
      quantity: availableQuantity + quantity,
      buyPrice:
        (quantity * price +
          portfolio.stocks[index].buyPrice * availableQuantity) /
        (quantity + availableQuantity),
    };
    portfolio.stocks.splice(index, 1, newStock);
  }

  user.tradingBalance -= quantity * price;

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
    return next(new HttpError("Failed to buy stock, please try again", 500));
  }

  res.status(200).json({
    message: "Stock bought, transaction complete",
    transactionNumber: transaction._id,
  });
};

exports.sellStock = sellStock;
exports.buyStock = buyStock;
