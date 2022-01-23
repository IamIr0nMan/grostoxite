const express = require("express");

const router = express.Router();

router.post("/buy/:fundId", (req, res, next) => {
  console.log(req.params.fundId);
  res.json({
    message: "The fund requested is bought",
    id: req.params.fundId,
  });
});

router.post("/sell/:fundId", (req, res, next) => {
  console.log(req.params.fundId);
  res.json({
    message: "The fund requested is sold",
    id: req.params.fundId,
  });
});

router.get("/:fundId", (req, res, next) => {
  console.log(req.params.fundId);
  res.json({
    message: "Here are the details of the fund requested",
    id: req.params.fundId,
  });
});

module.exports = router;
