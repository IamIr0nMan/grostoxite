const express = require("express");

const StocksControllers = require("../controllers/stocks-controller");

const router = express.Router();

router.post("/buy/:stockId", StocksControllers.buyStockById);

router.post("/sell/:stockId", StocksControllers.sellStockById);

router.get("/:stockId", StocksControllers.getStockById);

module.exports = router;
