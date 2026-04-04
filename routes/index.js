const { Router } = require('express');
const phoneRouter = require('./routerPhone');

const router = Router();

router.use('/phone', phoneRouter);

module.exports = router;
