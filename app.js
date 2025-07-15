const express = require('express');
const bodyParser = require('body-parser');
const AppError = require('./src/utils/appError');
const userRoutes = require('./src/routes/userRoutes');
const globalErrHandler = require('./src/controllers/errorController');
const expressValidator = require('express-validator')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator())

// Routes
app.use('/api/v1', userRoutes);

app.use('*', (req, res, next) => {
   const err = new AppError(404, false, 'undefined route');
   next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;
