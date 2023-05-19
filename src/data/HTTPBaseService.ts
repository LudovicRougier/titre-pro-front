import axios, { AxiosInstance } from "axios";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export abstract class HTTPBaseService {
  protected api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });

    this.api.interceptors.request.use(
      async (config) => {
        const res = await fetch("http://localhost:3000/api/token");
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
