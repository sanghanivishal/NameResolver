const constants = require("./../utils/contants");
const utils = require("./../utils/utils");
const {check, validationResult} = require('express-validator/check');

const validate = (req, res, next) => {
   const errors = validationResult(req)
   if (errors.isEmpty()) {
      return next()
   }
   const extractedErrors = []
   errors.array().map(err => extractedErrors.push({[err.param]: err.msg}))

   return res.status(400).json({
      status: false,
      message: extractedErrors,
   })
}

const searchValidationRules = () => {
   return [
      check('number').exists().trim().isLength({min: 8}),
      check('code').exists().trim().isLength({min: 1}),
   ]
}
module.exports = {
   validate,
   searchValidationRules
}
