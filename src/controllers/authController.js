const {
   promisify
} = require('util');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const constants = require("../utils/contants");
const AppError = require('../utils/appError');
const utils = require("../utils/utils");
const {request} = require('../utils/request');

const createToken = id => {
   return jwt.sign({id}, process.env.JWT_SECRET);
};

exports.protect = async (req, res, next) => {
   try {
      // 1) check if the token is there
      let token;
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
         token = req.headers.authorization.split(' ')[1];
      }
      if (!token) {
         return next(new AppError(200, false, 'You are not logged in! Please login in to continue'), req, res, next);
      }


      // 2) Verify token
      const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
      console.log(decode)
      // 3) check if the user is exist (not deleted)
      const user = await User.findById(decode.id);
      if (!user) {
         return next(new AppError(200, false, 'This user is no longer exist'), req, res, next);
      }

      req.user = user;
      next();

   } catch (err) {
      next(err);
   }
};

exports.login = async (req, res, next) => {
   try {
      const {
         email,
         password
      } = req.query;

      if (!email || !password) {
         return next(new AppError(200, false, 'Please provide email or password'), req, res, next);
      }

      const user = await User.findOne({
         email
      }).select('+password');

      if (!user || !await user.correctPassword(password, user.password)) {
         return next(new AppError(200, false, 'Email or Password is wrong'), req, res, next);
      }

      const token = createToken(user.id);

      // Remove the password from the output
      user.password = undefined;

      res.status(200).json({
         status: true,
         message: "Login Success!!!",
         token,
         user
      });

   } catch (err) {
      return next(new AppError(200, false, 'Please provide email or password'));
   }
};

exports.signup = async (req, res, next) => {
   try {

      const user = await User.create({
         email: req.body.email,
         password: req.body.password,
         create_time: new Date(),
         update_time: new Date(),
      });

      const token = createToken(user.id);

      user.password = undefined;

      res.status(200).json({
         status: true,
         message: "Account Created!!!",
         token,
         user
      });

   } catch (err) {
      console.log("err =>", err);
      err.statusCode = 200;
      next(err);
   }
};

exports.test = async (req, res, next) => {
   res.status(200).json({
      status: true,
      message: "Server is up and running",
   });
};
