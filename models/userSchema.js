const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  dob: { type: Date, required: true },
  identification: { type: String, required: true },
  mobile: { type: Number, required: true },
  address: { type: String, required: true },
  bankName: { type: String, required: true },
  accountNumber: { type: Number, required: true },
  tradingBalance: { type: mongoose.Types.Decimal128, required: true },
  bankBalance: { type: mongoose.Types.Decimal128, required: true },
  portfolio: { type: mongoose.Types.ObjectId, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
