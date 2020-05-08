const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1f6570ce136ca3",
    pass: "ab9775d288ff3c"
  }
});

module.exports = {
  transport,
}
