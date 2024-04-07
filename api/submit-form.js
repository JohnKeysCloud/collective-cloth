import sgMail from '../node_modules/@sendgrid/mail';
import { createEmailMarkup } from '../templates/create-email-html';

// Assuming you've set your SendGrid API key in your environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === 'POST') {
    try {           
      const sendEmailWithHtmlFile = async (toEmail, fromEmail, subject, htmlFileContent) => {
        try {
          const message = {
            to: toEmail,
            from: fromEmail,
            subject: subject,
            html: htmlFileContent,
          };
          await sgMail.send(message);
          console.log('Email Sent');
        } catch (error) {
          console.error('Error sending email:', error);
          throw error; // Rethrow the error to be caught by the outer try-catch
        }
      };

      const emailMarkup = createEmailMarkup(req.body);
      
      await sendEmailWithHtmlFile('test@example.com', 'your-email@example.com', 'Sending with SendGrid is Fun', emailMarkup);

      res.status(200).json({ status: 'success', message: 'Data received and processed' });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
};