import "reflect-metadata";
import { injectable } from "inversify";
import axiosClient, { AxiosInstance } from "@/lib/axios/client";

@injectable()
export abstract class HTTPBaseService {
  protected api: AxiosInstance;

  constructor() {
    this.api = axiosClient;
  }
}
