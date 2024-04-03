export default async (req, res) => {
  if (req.method === 'POST') {
    const {
      NAME,
      EMAIL,
      PHONE,
      COLLECTIVE_TYPE,
      GARMENT_TYPE,
      COLOR,
      QUANTITY,
      VISION
    } = req.body; // Example fields from your form

    // Handle your form submission logic here
    // For example: 
    // Send an email(SendGrid, AWS SES, or NodeMailer with an SMTP server)
    // Save to a database… etc.

    return res.status(200).json({ status: 'Form submitted successfully!' });
  }

  // Handle any other HTTP methods
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
};