module.exports.paginate = (req, res, next) => {
  const { page = 1, result = 5 } = req.query;

  req.paginate = {
    limit: result,
    offset: (page - 1) * result,
  };

  next();
};
