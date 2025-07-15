const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const baseController = require('./../controllers/baseController');
const utils = require('./../utils/utils');
const {searchValidationRules} = require("../controllers/validatorController");
const {validate} = require("../controllers/validatorController");

router.get('/login', authController.login);
router.post('/signup', authController.signup);
router.get('/test', authController.test);

router.use(authController.protect);

router.get('/search', searchValidationRules(), validate, utils.validateCountryCode, baseController.search);
router.get('/getCountryCode', baseController.getCountryCode);


module.exports = router;
