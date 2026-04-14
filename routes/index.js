const { Router } = require('express');
const phoneRouter = require('./routerPhone');
const routerPreorder = require('./routerPreorder');

const router = Router();

router.use('/phones', phoneRouter);
router.use('/preorders', routerPreorder);

module.exports = router;
