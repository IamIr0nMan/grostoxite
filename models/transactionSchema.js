const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  investor: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  asset: { type: mongoose.Types.ObjectId, required: true, refPath: "onModel" },
  date: { type: Date, required: true },
  units: { type: mongoose.Types.Decimal128, required: true },
  status: { type: String, enum: ["Buy", "Sell"], required: true },
  amount: { type: mongoose.Types.Decimal128, required: true },
  onModel: {
    type: String,
    required: true,
    enum: ["StockList", "MutualFundList"],
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
