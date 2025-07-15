// Express automatically knows that this entire function is an error handling middleware by specifying 4 parameters
module.exports = (err, req, res, next) => {
   err.statusCode = err.statusCode || 500;
   err.status = err.status || false;

   let message = err.message;
   if (message.includes("email_1 dup key")){
      message= "Email id already exists!"
   }
   console.log("Error=>", err)
   res.status(err.statusCode).json({
      status: err.status,
      // error: err,
      message: message,
      // stack: err.stack
   });

};
