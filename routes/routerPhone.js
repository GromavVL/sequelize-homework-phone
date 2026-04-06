const { Router } = require('express');
const { phoneController } = require('./../controllers');
const { validate, paginate } = require('./../middleware');
const phoneRouter = Router();

phoneRouter
  .route('/')
  .get(paginate.paginate, phoneController.getPhones)
  .post(validate.validateOnCreatePhone, phoneController.createPhone);

phoneRouter
  .route('/:id')
  .get(phoneController.getPhoneById)
  .patch(validate.validateOnUpdatePhone, phoneController.updatePhoneById)
  .delete(phoneController.deletePhoneById);

module.exports = phoneRouter;
