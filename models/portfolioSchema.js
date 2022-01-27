const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stockSchema = new Schema({
  stock: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "StockList",
  },
  quantity: { type: Number, required: true },
  buyPrice: { type: mongoose.Types.Decimal128, required: true },
});

const mututalFundsSchema = new Schema({
  fund: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "MutualFundList",
  },
  units: { type: mongoose.Types.Decimal128, required: true },
  amountInvested: { type: mongoose.Types.Decimal128, required: true },
});

const portfolioSchema = new Schema({
  investor: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  stocks: [{ type: stockSchema, required: false }],
  mutualFunds: [{ type: mututalFundsSchema, required: false }],
});

exports.Portfolio = mongoose.model("Portfolio", portfolioSchema);
exports.Stock = mongoose.model("Stock", stockSchema);
exports.MutualFund = mongoose.model("MutualFund", mututalFundsSchema);
