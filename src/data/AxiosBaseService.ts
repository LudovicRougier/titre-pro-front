import "reflect-metadata";
import { injectable } from "inversify";
import axiosClient, { AxiosInstance } from "@/lib/axios/client";

interface IAxiosBaseService {
  api: AxiosInstance;
}

@injectable()
export class AxiosBaseService implements IAxiosBaseService {
  public api;

  constructor() {
    this.api = axiosClient;
  }
}
