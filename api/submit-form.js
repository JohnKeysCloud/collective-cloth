export default async (req, res) => {
  if (req.method === 'POST') {
    try {
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

      // Log the received data to the console (for demonstration purposes)
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

      // Here you could add additional logic such as:
      // - Validating the data
      // - Saving the data to a database
      // - Sending an email confirmation

      // Respond with a success message
      res.status(200).json({ status: 'success', message: 'Data received and processed' });
    } catch (error) {
      // Handle any errors that occur during the process
      console.error('Error processing request:', error);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  } else {
    // If the request method is not POST, return a 405 Method Not Allowed error
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
};