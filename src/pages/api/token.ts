import { NextApiResponse, NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getToken({ req, secret: process.env.SECRET });
  res.send({ token: response?.token });
};
