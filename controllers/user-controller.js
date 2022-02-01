const bcrypt = require("bcryptjs");
const jsonWebToken = require("jsonwebtoken");

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
    console.error("Error checking existing user with email on signup");
    console.log(error);
    return next(new HttpError("Sign up failed, please try again later", 500));
  }

  if (existingUser)
    return next(
      new HttpError("User already exists, please login instead", 422)
    );

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (error) {
    console.error("Error hashing the password on sign up");
    console.log(error);
    return next(new HttpError("Sign up failed, please try again later", 500));
  }

  const createdUser = new User({
    fname,
    lname,
    email,
    password: hashedPassword,
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
        console.error("Error creating and saving user portfolio to database");
        console.log(errObj);
      }
    });
  } catch (error) {
    console.error("Error saving new user to database");
    console.log(error);
    return next(new HttpError("Sign up failed, please try again later", 500));
  }

  let token;
  try {
    token = await jsonWebToken.sign(
      { userId: createdUser._id, email: createdUser.email },
      process.env.TOKEN_SECRET,
      { expiresIn: "2h" }
    );
  } catch (error) {
    console.error("Error generating token on sign up");
    console.log(error);
    return next(new HttpError("Sign up failed, please try again later", 500));
  }

  res.status(201).json({ userId: createdUser._id, token });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.error("Error checking existing user on login");
    console.log(error);
    return next(new HttpError("Login failed, please try again", 500));
  }

  if (!existingUser)
    return next(new HttpError("User does not exist, please sign up", 404));

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (error) {
    console.error("Error comparing hashed password on login");
    console.log(error);
    return next(new HttpError("Login failed, please try again later", 500));
  }

  if (!isValidPassword)
    return next(new HttpError("Invalid Credentials, please try again", 401));

  let token;
  try {
    token = await jsonWebToken.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.TOKEN_SECRET,
      { expiresIn: "2h" }
    );
  } catch (error) {
    console.error("Error generating token on login");
    console.log(error);
    return next(new HttpError("Login failed, please try again later", 500));
  }

  res.status(200).json({ userId: existingUser._id, token });
};

const updatePassword = (req, res, next) => {
  console.log("Password changed");
  res.json({ message: "Password changed. Use new password to login" });
};

const forgotPassword = (req, res, next) => {
  console.log("Password changed");
  res.json({ message: "Password changed. Use new password to login" });
};

const getAccountDetails = async (req, res, next) => {
  const userId = req.params.userId;
  let existingUser;

  try {
    existingUser = await User.findById(userId);
  } catch (error) {
    console.error("Error checking existing user for details");
    console.log(error);
    return next(new HttpError("Cannot get details, please try again", 500));
  }

  if (!existingUser)
    return next(new HttpError("User does not exist, please sign up", 404));

  const dateFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const accountDetails = {
    name: existingUser.fname + existingUser.lname,
    email: existingUser.email,
    dob: existingUser.dob.toLocaleDateString("en-IN", dateFormatOptions),
    identification: existingUser.identification,
    mobile: existingUser.mobile,
    address: existingUser.address,
    bank: existingUser.bankName,
    bankAccountNumber: existingUser.accountNumber,
    tradingBalance: existingUser.tradingBalance,
    bankBalance: existingUser.bankBalance,
  };

  res.status(200).json({ id: existingUser._id, accountDetails });
};

const getPortfolioDetails = async (req, res, next) => {
  const userId = req.params.userId;
  let existingUser;

  try {
    existingUser = await User.findById(userId);
  } catch (error) {
    console.error("Error checking existing user for details");
    console.log(error);
    return next(new HttpError("Cannot get details, please try again", 500));
  }

  if (!existingUser)
    return next(new HttpError("User does not exist, please sign up", 404));

  let portfolio;
  try {
    portfolio = await Portfolio.findOne({ investor: existingUser._id });
  } catch (error) {
    console.error("Error finding the portfolio details of given Id");
    console.log(error);
    return next(new HttpError("Cannot get details, please try again", 500));
  }

  const portfolioDetails = {
    stocks: portfolio.stocks,
    funds: portfolio.mutualFunds,
  };

  res.status(200).json({ id: existingUser._id, portfolioDetails });
};

exports.signup = signup;
exports.login = login;
exports.updatePassword = updatePassword;
exports.forgotPassword = forgotPassword;
exports.getAccountDetails = getAccountDetails;
exports.getPortfolioDetails = getPortfolioDetails;
