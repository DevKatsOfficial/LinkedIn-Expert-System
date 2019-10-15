const nodemailer = require("nodemailer");

module.exports.sendInvitationToExperts = (
  data,
  clientInvitationDetailsAddress
) => {
  console.log(clientInvitationDetailsAddress);
  const output = `Hi <strong>${data.name}!</strong><br> Please Take a look at Invitation for Project.<br>Link: <a href=${clientInvitationDetailsAddress}>${clientInvitationDetailsAddress}</a>`;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "imap.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "Email here", // generated ethereal user
      pass: "And password" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"SilverLightSearch" <SilverLightSearchOfficial@gmail.com>', // sender address
    to: [data.email], // list of receivers
    subject: `Project: ${data.projectNumber} Invitation`, // Subject line
    text: "SilverLightSearch Official", // plain text body
    html: output // html body,
    // attachments: data.attachments
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};
