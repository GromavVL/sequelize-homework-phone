const { Router } = require('express');
const { phoneController } = require('./../controllers');

const phoneRouter = Router();

phoneRouter.route('/').get(phoneController.getPhones);

phoneRouter.route('/:id');

module.exports = phoneRouter;
