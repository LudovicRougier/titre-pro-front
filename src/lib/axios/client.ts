import { getToken } from "@/utils/getToken";
import axios, { AxiosInstance } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

axiosClient.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
export type { AxiosInstance };
