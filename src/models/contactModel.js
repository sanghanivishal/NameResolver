const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const contactSchema = new mongoose.Schema({
   phoneNumber: {
      type: String,
      unique: false,
   },
   countryCode: {
      type: String,
      unique: false,
   },
   name: String,
   json: JSON,
   create_time: Date,
   update_time: Date,
});

const ContactModel = mongoose.model('contact', contactSchema);
module.exports = ContactModel;
