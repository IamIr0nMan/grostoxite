const express = require("express");

const fundsControllers = require("../controllers/funds-controller");

const router = express.Router();

router.post("/buy/:fundId", fundsControllers.buyFundById);

router.post("/sell/:fundId", fundsControllers.sellFundById);

router.get("/:fundId", fundsControllers.getFundById);

module.exports = router;
