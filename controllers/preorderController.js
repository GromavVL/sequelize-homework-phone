const { Preorder, Phone } = require('./../models');

module.exports.getPreordersAll = async (req, res, next) => {
  const { status } = req.query;

  try {
    const preordersAll = await Preorder.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: Phone,
          attributes: ['brand', 'model'],
        },
      ],
      where: status ? { status } : {},
    });

    res.status(200).send(preordersAll);
  } catch (err) {
    next(err);
  }
};
