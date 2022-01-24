const express = require("express");

const usersControllers = require("../controllers/user-controller");

const router = express.Router();

router.post("/signup", usersControllers.signup);

router.post("/login", usersControllers.login);

router.get("/accountDetails", usersControllers.getAccountDetails);

router.get("/portfolio", usersControllers.getPortfolioDetails);

router.patch("/updatePassword", usersControllers.updatePassword);

router.patch("/forgotPassword", usersControllers.forgotPassword);

module.exports = router;
