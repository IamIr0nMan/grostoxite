const HttpError = require("../models/http-error");
const StockList = require("../models/stockListSchema");

const getStockById = async (req, res, next) => {
  const stockId = req.body.stockId;

  let stock;
  try {
    stock = await StockList.findById(stockId);
  } catch (error) {
    console.error("Error fetching stock from database");
    console.log(error);
    return next(new HttpError("Error fetching data of given stock id", 500));
  }

  if (!stock)
    return next(new HttpError("Stock with given id does not exist", 404));

  res.status(200).json({ stockData: stock });
};

const getAllStocks = async (req, res, next) => {
  let stockList;
  try {
    stockList = await StockList.find({});
  } catch (error) {
    console.error("Error fetching list of stocks from database");
    console.log(error);
    return next(new HttpError("Error fetching list of stocks", 500));
  }
  const stockData = [];
  stockList.forEach((stock) => {
    const data = {
      id: stock._id,
      name: stock.ticker,
      currPrice: stock.price[0].close,
      prevPrice: stock.price[1].close,
    };
    stockData.push(data);
  });

  res.status(200).json({ stockData });
};

// const addStock = async (req, res, next) => {
//   const {
//     ticker,
//     companyName,
//     website,
//     CEO,
//     sector,
//     businessSummary,
//     fundamentals,
//     price,
//   } = req.body;

//   const stock = new StockList({
//     ticker,
//     companyName,
//     website,
//     "CEO/Founder": CEO,
//     sector,
//     businessSummary,
//     fundamentals,
//     price,
//   });

//   try {
//     await stock.save();
//   } catch (error) {
//     console.error("Error inserting stock to database");
//     console.log(error);
//     return next(new HttpError("Cannot insert into db, please try again", 500));
//   }
// };

exports.getStockById = getStockById;
exports.getAllStocks = getAllStocks;
