const { Router } = require('express');
const { phoneController } = require('./../controllers');
const { validate, paginate, upload } = require('./../middleware');
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

phoneRouter
  .route('/:id/image')
  .post(upload.single('imagePhone'), phoneController.uploadPhoneImage);

phoneRouter
  .route('/:id/preorders')
  .get(phoneController.getPreordersByPhoneId)
  .post(validate.validateOnCreatePreorder, phoneController.createPreordersByPhone);

module.exports = phoneRouter;
