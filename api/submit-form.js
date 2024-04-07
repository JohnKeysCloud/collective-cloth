const fs = require('fs');
const path = require('path');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })


export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const sendEmailWithHtmlFile = async (toEmail, fromEmail, subject, htmlFilePath) => {
        try {
          const message = {
            to: toEmail,
            from: fromEmail,
            subject: subject,
            html: htmlContent,
          };

          await sgMail.send(message);
          console.log('Email Sent');
        } catch (error) {
          console.error('Error sending email:', error);
        }
      }; 
      const htmlContent = path.join(__dirname, '..', 'templates', 'email.html');

      const {
        name,
        email,
        phone,
        collective_type,
        garment_type,
        color,
        quantity,
        vision
      } = req.body;

      // ? Log the received data to the console (for demonstration purposes)
      console.log('Received data:', {
        name,
        email,
        phone,
        collective_type,
        garment_type,
        color,
        quantity,
        vision
      });

      sendEmailWithHtmlFile('test@example.com', 'your-email@example.com', 'Sending with SendGrid is Fun', './path/to/your-file.html');

      // ? Respond with a success message
      res.status(200).json({ status: 'success', message: 'Data received and processed' });
    } catch (error) {
      // ? Handle any errors that occur during the process
      console.error('Error processing request:', error);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  } else {
    // ? If the request method is not POST, return a 405 Method Not Allowed error
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
};