import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { id } = _req.query;
  const url = `https://api.mfapi.in/mf/${id}`;
  const response = await fetch(url);
  const { data, errors } = await response.json();
  if (data) {
    res.status(200).json(data[0]);
  } else if (errors) {
    res.status(500).json({ message: 'Error occured' });
  }
};

export default handler;
