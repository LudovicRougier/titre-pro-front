// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

type JWTDecoded = {
  exp: number;
  iat: number;
  sub: string;
  iss: string;
  jti: string;
  nbf: string;
  prv: string;
};

export const checkTokenExpiration = async (token: string): Promise<boolean> => {
  const decoded = jwt_decode(token) as JWTDecoded;
  const tokenExpirationTimestamp = decoded.exp;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  return currentTimestamp >= tokenExpirationTimestamp;
};

export const refreshToken = async (token: string): Promise<string> => {
  const res = await axiosClient.get("/refresh", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (res.status === 200) {
    return res.data.authorisation.token;
  }

  throw new Error("Error refreshing token");
};
