const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  stocks: [
    {
      stock: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "StockList",
      },
      quantity: { type: Number, required: true },
      buyPrice: { type: mongoose.Types.Decimal128, required: true },
    },
  ],
  mutualFunds: [
    {
      fund: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "MutualFundList",
      },
      units: { type: mongoose.Types.Decimal128, required: true },
      amountInvested: { type: mongoose.Types.Decimal128, required: true },
    },
  ],
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
