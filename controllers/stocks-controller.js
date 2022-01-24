const getStockById = (req, res, next) => {
  console.log(req.params.stockId);
  res.json({
    message: "Here are the details of the stock requested",
    id: req.params.stockId,
  });
};

const sellStockById = (req, res, next) => {
  console.log(req.params.stockId);
  res.json({
    message: "The stock requested is sold",
    id: req.params.stockId,
  });
};

const buyStockById = (req, res, next) => {
  console.log(req.params.stockId);
  res.json({
    message: "The stock requested is bought",
    id: req.params.stockId,
  });
};

exports.getStockById = getStockById;
exports.sellStockById = sellStockById;
exports.buyStockById = buyStockById;
