const { Router } = require('express');
const { preorderController } = require('./../controllers');

const routerPreorder = Router();

routerPreorder.route('/').get(preorderController.getPreordersAll);

module.exports = routerPreorder;
