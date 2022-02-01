const HttpError = require("../models/http-error");
const MutualFundList = require("../models/mutualFundListSchema");

const getFundById = async (req, res, next) => {
  const fundId = req.params.fundId;

  let fund;
  try {
    fund = await MutualFundList.findById(fundId);
  } catch (error) {
    console.error("Error fetching mutual fund from database");
    console.log(error);
    return next(
      new HttpError("Error fetching data of given mutual fund id", 500)
    );
  }

  if (!fund)
    return next(new HttpError("Mutual fund with given id does not exist", 404));

  res.status(200).json({ fundData: fund });
};

const getAllFunds = async (req, res, next) => {
  let fundList;
  try {
    fundList = await MutualFundList.find({});
  } catch (error) {
    console.error("Error fetching list of mutual funds from database");
    console.log(error);
    return next(new HttpError("Error fetching list of mutual funds", 500));
  }
  const fundData = [];
  fundList.forEach((fund) => {
    const data = {
      id: fund._id,
      name: fund.fundName,
      currNav: fund.nav[0].nav,
      prevNav: fund.nav[1].nav,
    };
    fundData.push(data);
  });

  res.status(200).json({ fundData });
};

exports.getFundById = getFundById;
exports.getAllFunds = getAllFunds;
