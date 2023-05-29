import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "@/container/types";
import { AxiosBaseService } from "@/data/AxiosBaseService";
import { AuthDataSource } from "@/data/datasource/interfaces/AuthDataSource";
import { APIService } from "@/data/datasource/interfaces/APIService";

@injectable()
export class AuthDataSourceImpl implements AuthDataSource {
  private api;

  constructor(
    @inject(TYPES.APIService) apiService: AxiosBaseService | APIService
  ) {
    this.api = apiService.api;
  }

  async login(credentials: { email: string; password: string }) {
    const response = await this.api.post("/login", credentials);
    return response.data;
  }

  async logout() {
    const response = await this.api.get("/logout");
    return response.data;
  }
}
