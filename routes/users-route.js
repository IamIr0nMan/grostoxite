const express = require("express");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  console.log("User registration complete...");
  res.json({ message: "Hello User, welcome to our website..." });
});

router.post("/login", (req, res, next) => {
  console.log("User logged in...");
  res.json({ message: "User is logged in to the website..." });
});

router.get("/accountDetails", (req, res, next) => {
  console.log("The account details request is fullfilled...");
  res.json({
    message: "Here is the account details of the user",
    name: "User",
  });
});

router.get("/portfolio", (req, res, next) => {
  console.log("The requested portfolio of the user...");
  res.json({ message: "The list of assets the user have..." });
});

router.patch("/updatePassword", (req, res, next) => {
  console.log("Password changed...");
  res.json({ message: "Password changed. Use new password to login" });
});

router.patch("/forgotPassword", (req, res, next) => {
  console.log("Password changed...");
  res.json({ message: "Password changed. Use new password to login" });
});

module.exports = router;
