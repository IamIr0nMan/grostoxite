const HttpError = require("../models/http-error");
const Portfolio = require("../models/portfolioSchema");
const User = require("../models/userSchema");

const signup = async (req, res, next) => {
  const {
    fname,
    lname,
    email,
    password,
    dob,
    identification,
    mobile,
    address,
    bankName,
    accountNumber,
    tradingBalance,
    bankBalance,
  } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.error("Checking existing user with email on signup failed\n");
    console.log(error);
    err = new HttpError("Signing up failed, please try again later", 500);
    return next(err);
  }

  if (existingUser) {
    err = new HttpError("User already exists, please login instead", 422);
    return next(err);
  }

  const createdUser = new User({
    fname,
    lname,
    email,
    password,
    dob: new Date(dob),
    identification,
    mobile,
    address,
    bankName,
    accountNumber,
    tradingBalance,
    bankBalance,
  });

  try {
    await createdUser.save().then(async (createdUser) => {
      const userPortfolio = new Portfolio({
        investor: createdUser._id,
      });
      try {
        await userPortfolio.save();
      } catch (errObj) {
        console.error("Creating and saving user portfolio to database failed");
        console.log(errObj);
      }
    });
  } catch (error) {
    console.error("Saving new user to database failed");
    console.log(error);
    err = new HttpError("Signing up failed, please try again later", 500);
    return next(err);
  }

  res
    .status(201)
    .json({ message: "User signup successful", user: createdUser });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.error("Checking existing user on login failed");
    console.log(error);
    const err = new HttpError("Login failed, please try again", 500);
    return next(err);
  }

  if (!existingUser) {
    const error = new HttpError("User does not exist, please sign up", 401);
    return next(error);
  } else if (existingUser.password !== password) {
    const error = new HttpError("Invalid Credentials, please try again", 401);
    return next(error);
  }

  res.status(200).json({ message: "User logged in...", id: existingUser._id });
};

const updatePassword = (req, res, next) => {
  console.log("Password changed...");
  res.json({ message: "Password changed. Use new password to login" });
};

const forgotPassword = (req, res, next) => {
  console.log("Password changed...");
  res.json({ message: "Password changed. Use new password to login" });
};

const getAccountDetails = (req, res, next) => {
  console.log("The account details request is fullfilled...");
  res.json({
    message: "Here is the account details of the user",
    name: "User",
  });
};

const getPortfolioDetails = (req, res, next) => {
  console.log("The requested portfolio of the user...");
  res.json({ message: "The list of assets the user have..." });
};

exports.signup = signup;
exports.login = login;
exports.updatePassword = updatePassword;
exports.forgotPassword = forgotPassword;
exports.getAccountDetails = getAccountDetails;
exports.getPortfolioDetails = getPortfolioDetails;
