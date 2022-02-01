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
        stock: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: "StockList",
        },
        quantity: { type: Number, required: true },
        buyPrice: { type: mongoose.Types.Decimal128, required: true },
      },
      required: false,
    },
  ],
  mutualFunds: [
    {
      type: {
        fund: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: "MutualFundList",
        },
        units: { type: mongoose.Types.Decimal128, required: true },
        nav: { type: mongoose.Types.Decimal128, required: true },
      },
      required: false,
    },
  ],
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
