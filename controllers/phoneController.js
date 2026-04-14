const { Phone, Preorder } = require('./../models');

module.exports.getPhones = async (req, res, next) => {
  const { limit, offset } = req.paginate;
  try {
    const phonesAll = await Phone.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit,
      offset,
      order: [['id', 'ASC']],
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
module.exports.getPreordersByPhoneId = async (req, res, next) => {
  const { id } = req.params;

  try {
    const phone = await Phone.findByPk(id);

    if (!phone) {
      return res.status(404).send('Phone not found');
    }

    const preorders = await Preorder.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: { phoneId: id },
      order: [['id', 'ASC']],
    });

    res.status(200).send(preorders);
  } catch (err) {
    next(err);
  }
};

module.exports.createPreordersByPhone = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const phone = await Phone.findByPk(id);
    if (!phone) {
      return res.status(404).send('Phone not found');
    }

    const preorder = await Preorder.create({ ...body, phoneId: id });

    res.status(201).send(preorder);
  } catch (err) {
    next(err);
  }
};

module.exports.uploadPhoneImage = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!req.file) {
      return res.status(400).send('Файл не надіслано');
    }
    const phone = await Phone.findByPk(id);
    if (!phone) {
      return res.status(404).send('Phone not found');
    }

    await phone.update({ imagePhone: req.file.filename });

    res.status(200).send({ imagePhone: req.file.filename });
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
