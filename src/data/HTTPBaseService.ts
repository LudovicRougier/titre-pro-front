import "reflect-metadata";
import { injectable } from "inversify";
import axios, { AxiosInstance } from "axios";

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
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/token`);
        const data = await res.json();
        if (data.token) config.headers.Authorization = `Bearer ${data.token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
