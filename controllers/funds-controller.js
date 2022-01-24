const getFundById = (req, res, next) => {
  console.log(req.params.fundId);
  res.json({
    message: "Here are the details of the fund requested",
    id: req.params.fundId,
  });
};

const sellFundById = (req, res, next) => {
  console.log(req.params.fundId);
  res.json({
    message: "The fund requested is sold",
    id: req.params.fundId,
  });
};

const buyFundById = (req, res, next) => {
  console.log(req.params.fundId);
  res.json({
    message: "The fund requested is bought",
    id: req.params.fundId,
  });
};

exports.getFundById = getFundById;
exports.sellFundById = sellFundById;
exports.buyFundById = buyFundById;
