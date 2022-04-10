import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  let error = false;
  const data = req.body;
  const required = [
    'firstName',
    'lastName',
    'phoneNumber',
    'email',
    'currency',
    'price',
  ];

  required.forEach((field) => {
    if (!(field in data) || data[field] === '') {
      res.status(422).json({ message: 'All fields are required' });
      error = true;
    }
  });

  if (!error && Number.isNaN(parseInt(data['price']))) {
    res.status(422).json({ message: 'Price must be a number' });
    error = true;
  }
  if (!error) {
    res.status(200).json({ message: 'Form submitted successfully' });
  }
};

export default handler;
