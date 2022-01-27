const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

mongoose.pluralize(null);

const Schema = mongoose.Schema;

const stockListSchema = new Schema({
  ticker: { type: String, required: true, unique: true },
  companyName: String,
  website: String,
  "CEO/Founder": String,
  sector: String,
  businessSummary: String,
  fundamentals: {
    PE: String,
    marketCap: String,
    dividendYield: String,
    fiftyTwoWeekHigh: String,
    fiftyTwoWeekLow: String,
    ebitda: String,
    totalDebt: String,
    debtToEquity: String,
    returnOnEquity: String,
    grossProfits: String,
  },
  price: [
    {
      date: Date,
      open: mongoose.Types.Decimal128,
      dayLow: mongoose.Types.Decimal128,
      dayHigh: mongoose.Types.Decimal128,
      close: mongoose.Types.Decimal128,
    },
  ],
});

stockListSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("StockList", stockListSchema);
