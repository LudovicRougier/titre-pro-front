import axios, { AxiosInstance } from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

let sessionPromise: Promise<Session | null> | null = null;

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

axiosClient.interceptors.request.use(
  async (config) => {
    if (!sessionPromise) {
      sessionPromise = getSession();
    }
    const session = await sessionPromise;
    const token = session?.user.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
export type { AxiosInstance };
