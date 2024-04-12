import sgMail from '@sendgrid/mail';
import { createEmailMarkup } from '../templates/create-email-html';

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
          throw error; 
        }
      };

      const emailMarkup = createEmailMarkup(req.body);
      
      await sendEmailWithHtmlFile('johncloud@cyclonestud.io', 'admin@collectivecloth.com', 'New Customer Request Zaddy 🤪', emailMarkup);

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