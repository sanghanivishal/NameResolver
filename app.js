const express = require('express');
const bodyParser = require('body-parser');
const AppError = require('./src/utils/appError');
const userRoutes = require('./src/routes/userRoutes');
const globalErrHandler = require('./src/controllers/errorController');
const expressValidator = require('express-validator')
const { countValidResponseMiddleware } = require('./src/utils/utils');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator())

// TODO: Place your authentication middleware here (should set req.user)

// Count valid responses for all authenticated requests
app.use(countValidResponseMiddleware);

// Routes
app.use('/api/v1', userRoutes);

app.use('*', (req, res, next) => {
   const err = new AppError(404, false, 'undefined route');
   next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;
