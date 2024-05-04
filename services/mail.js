const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "thuydoan011202@gmail.com",
    pass: "wazt kcie qmhg pfgo",
  },
});

const sendMail = async (content, callback) => {
  try {
    const info = await transporter.sendMail(content)
    callback(info);
  } catch (error) {
    console.log(error);
  } 
};

module.exports = {
  sendMail
}