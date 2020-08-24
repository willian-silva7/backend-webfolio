const nodemailer = require('nodemailer');

class EtherealMailProvider {
  async sendMail(forgottenUserData) {
    nodemailer.createTestAccount((err, account) => {
      const smtpConfig = {
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      };

      const transporter = nodemailer.createTransport(smtpConfig);

      const mailOptions = {
        from: { name: 'Equipe WebFólio', address: 'equipe@webfolio.com.br' },
        to: { address: forgottenUserData.to.email },
        subject: 'Email de Recuperação de Senha',
        text: forgottenUserData.body,
        html: forgottenUserData.body,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
    });
  }
}

module.exports = EtherealMailProvider;
