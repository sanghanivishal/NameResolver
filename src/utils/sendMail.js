/**
 * @author Vishal Sanghani
 * Date: 01/09/22
 */
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: 'rapidapierror@gmail.com',
      pass: 'fiwrxecbjtrnezqi'
   }
});

function sendMail(data) {
   let html = `<div>
      <p>API: ${data.function}</p>
      <p>Request Data: ${data.reqData}</p>
      <p>Error: ${data.error}</p>
      </div>`
   transporter.sendMail({
      from: 'Airbnb 2',
      to: 'vishsanghani@gmail.com',
      subject: 'Skyscanner 4',
      html: html
   }).then(() => {
   });
}

module.exports = {
   sendMail
}
