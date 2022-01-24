const signup = (req, res, next) => {
  console.log("User registration complete...");
  res.json({ message: "Hello User, welcome to our website..." });
};

const login = (req, res, next) => {
  console.log("User logged in...");
  res.json({ message: "User is logged in to the website..." });
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
