const jsonWebToken = require("jsonwebtoken");

const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") return next();
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) throw new Error("Token not found");
    const decodedToken = jsonWebToken.verify(token, process.env.TOKEN_SECRET);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    console.error("Error getting the token from the header");
    console.log(error);
    return next(new HttpError("Authorization failed", 401));
  }
};
