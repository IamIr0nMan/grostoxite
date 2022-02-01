const express = require("express");

const usersControllers = require("../controllers/user-controller");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/signup", usersControllers.signup);

router.post("/login", usersControllers.login);

router.patch("/forgotPassword", usersControllers.forgotPassword);

router.use(auth);

router.get("/accountDetails", usersControllers.getAccountDetails);

router.get("/portfolio", usersControllers.getPortfolioDetails);

router.patch("/updatePassword", usersControllers.updatePassword);

module.exports = router;
