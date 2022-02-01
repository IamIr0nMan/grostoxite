const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  investor: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  stocks: [
    {
      type: {
        stockId: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: "StockList",
        },
        stockName: { type: String, required: true },
        quantity: { type: Number, required: true },
        buyPrice: { type: mongoose.Types.Decimal128, required: true },
      },
      required: false,
    },
  ],
  mutualFunds: [
    {
      type: {
        fundId: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: "MutualFundList",
        },
        fundName: { type: String, required: true },
        units: { type: mongoose.Types.Decimal128, required: true },
        nav: { type: mongoose.Types.Decimal128, required: true },
      },
      required: false,
    },
  ],
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
