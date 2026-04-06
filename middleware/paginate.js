module.exports.paginate = (req, res, next) => {
  const { page = 1, result = 5 } = req.query;

  req.paginate = {
    limit: Number(result),
    offset: (Number(page) - 1) * Number(result),
  };

  next();
};
