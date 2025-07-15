const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
   email: {
      type: String,
      required: [false, 'Please fill your email'],
      unique: true,
      lowercase: true,
   },
   password: {
      type: String,
      minLength: 6,
      select: false
   },
   phone: {
      type: Number,
      unique: false,
   },
   create_time: Date,
   update_time: Date,
});

userSchema.pre('save', async function (next) {
   // check the password if it is modified
   if (!this.isModified('password')) {
      return next();
   }

   // Hashing the password
   this.password = await bcrypt.hash(this.password, 12);

   next();
});

userSchema.methods.correctPassword = async function (typedPassword, originalPassword) {
   return await bcrypt.compare(typedPassword, originalPassword);
};

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
