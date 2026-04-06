const express = require('express');
const router = require('./routes');
const { errorHandler } = require('./middleware');

const app = express();
app.use(express.json());
app.use('/api', router);
app.use(errorHandler.validationErrorHandler);
app.use(errorHandler.globalErrorHandler);

module.exports = app;
