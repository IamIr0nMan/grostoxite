const mongoose = require("mongoose");

mongoose.pluralize(null);

const Schema = mongoose.Schema;

const mutualFundsSchema = new Schema({
  fundName: String,
  amcName: String,
  sector: String,
  fundManager: String,
  aum: String,
  expenseRatio: String,
  inceptionDate: Date,
  nav: [{ date: Date, nav: mongoose.Types.Decimal128 }],
});

module.exports = mongoose.model("MutualFundList", mutualFundsSchema);
