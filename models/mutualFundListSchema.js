const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

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

mutualFundsSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("MutualFundList", mutualFundsSchema);
