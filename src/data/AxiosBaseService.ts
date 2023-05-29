import "reflect-metadata";
import { injectable } from "inversify";
import axiosClient, { AxiosInstance } from "@/lib/axios/client";

@injectable()
export abstract class AxiosBaseService {
  protected api: AxiosInstance;

  constructor() {
    this.api = axiosClient;
  }
}
