const express = require("express");

const router = express.Router();

router.post("/buy/:stockId", (req, res, next) => {
  console.log(req.params.stockId);
  res.json({
    message: "The stock requested is bought",
    id: req.params.stockId,
  });
});

router.post("/sell/:stockId", (req, res, next) => {
  console.log(req.params.stockId);
  res.json({
    message: "The stock requested is sold",
    id: req.params.stockId,
  });
});

router.get("/:stockId", (req, res, next) => {
  console.log(req.params.stockId);
  res.json({
    message: "Here are the details of the stock requested",
    id: req.params.stockId,
  });
});

module.exports = router;
