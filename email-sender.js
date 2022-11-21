var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'imenjlassi02@gmail.com',
    pass: 'uomkhzkbjwjdpjsr'
  }
});

var mailOptions = {
  from: 'imenjlassi02@gmail.com',
  to: 'imenjlassi02@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});