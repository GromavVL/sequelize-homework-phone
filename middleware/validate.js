const {
  PHONE_UPDATE_VALIDATE_SCHEMAS,
  PHONE_CREATE_VALIDATE_SCHEMAS,
  PREORDER_CREATE_VALIDATE_SCHEMAS,
} = require('./../utils/validateShemas');

module.exports.validateOnCreatePhone = async (req, res, next) => {
  const { body } = req;
  try {
    const validateCreatePhone = await PHONE_CREATE_VALIDATE_SCHEMAS.validate(
      body
    );
    req.body = validateCreatePhone;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports.validateOnUpdatePhone = async (req, res, next) => {
  const { body } = req;

  try {
    const validatePhoneUpdate = await PHONE_UPDATE_VALIDATE_SCHEMAS.validate(
      body
    );
    req.body = validatePhoneUpdate;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports.validateOnCreatePreorder = async (req, res, next) => {
  const { body } = req;
  try {
    const validatePreorder = await PREORDER_CREATE_VALIDATE_SCHEMAS.validate(
      body
    );
    req.body = validatePreorder;
    next();
  } catch (err) {
    next(err);
  }
};
