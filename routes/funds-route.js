const express = require("express");

const fundDetailsController = require("../controllers/fundDetails-controller");
const fundTransactionsController = require("../controllers/fundTransactions-controller");

const router = express.Router();

router.post("/buy", fundTransactionsController.buyFund);

router.post("/sell", fundTransactionsController.sellFund);

router.get("/:fundId", fundDetailsController.getFundById);

router.get("/", fundDetailsController.getAllFunds);

module.exports = router;
