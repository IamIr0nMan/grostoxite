const express = require("express");

const stockDetailsController = require("../controllers/stockDetails-controller");
const stockTransactionsController = require("../controllers/stockTransactions-controller");

const router = express.Router();

router.post("/buy", stockTransactionsController.buyStock);

router.post("/sell", stockTransactionsController.sellStock);

router.get("/:stockId", stockDetailsController.getStockById);

router.get("/", stockDetailsController.getAllStocks);

module.exports = router;
