const express = require("express");

const stocksRoute = require("./stocks-route");
const fundsRoute = require("./funds-route");
const auth = require("../middlewares/auth");

const router = express.Router();

router.use(auth);

router.use("/stocks", stocksRoute);

router.use("/funds", fundsRoute);

module.exports = router;
