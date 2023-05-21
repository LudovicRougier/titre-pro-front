import "reflect-metadata";
import { injectable } from "inversify";
import axios, { AxiosInstance } from "axios";
import { getToken } from "@/utils/getToken";

@injectable()
export abstract class HTTPBaseService {
  protected api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: { "Content-Type": "application/json" },
    });

    this.api.interceptors.request.use(
      async (config) => {
        const token = await getToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
