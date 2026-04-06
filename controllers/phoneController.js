const { Phone } = require('./../models');

module.exports.getPhones = async (req, res, next) => {
  const { limit, offset } = req.paginate;
  try {
    const phonesAll = await Phone.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit,
      offset,
      order: ['id'],
    });

    if (!phonesAll.length) {
      return res.status(404).send('Phones is null');
    }
    res.status(200).send(phonesAll);
  } catch (err) {
    next(err);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundPhone = await Phone.findByPk(id, {
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (!foundPhone) {
      return res.status(404).send('Phone is null');
    }
    res.status(200).send(foundPhone);
  } catch (err) {
    next(err);
  }
};

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);
    res.status(201).send(createdPhone);
  } catch (err) {
    next(err);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  try {
    const [updatePhoneCount, [updatePhone]] = await Phone.update(body, {
      where: { id },
      raw: true,
      returning: true,
    });
    if (!updatePhoneCount) {
      return res.status(404).send('Phone is not update');
    }
    res.status(200).send({ data: updatePhone });
  } catch (err) {
    next(err);
  }
};
module.exports.deletePhoneById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletePhone = await Phone.destroy({
      where: { id },
    });

    if (!deletePhone) {
      return res.status(404).send('Phone not found');
    }

    res.status(200).end();
  } catch (err) {
    next(err);
  }
};
