import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { id } = _req.query;
  const url = `https://api.mfapi.in/mf/${id}`;
  const response = await fetch(url);
  const { data, errors } = await response.json();
  if (data) {
    res.setHeader(
      'Cache-Control',
      's-maxage=3600, stale-while-revalidate=3601'
    );
    res.status(200).json({
      value: data[0],
      timestamp: Date.now(),
    });
  } else if (errors) {
    res.status(500).json({ message: 'Error occured' });
  }
};

export default handler;
