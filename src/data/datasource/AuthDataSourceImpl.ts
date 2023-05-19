import { injectable } from "inversify";
import "reflect-metadata";
import { AuthDataSource } from "@/data/datasource/AuthDataSource";
import { HTTPBaseService } from "@/data/HTTPBaseService";

@injectable()
export class AuthDataSourceImpl
  extends HTTPBaseService
  implements AuthDataSource
{
  async login(credentials: { username: string; password: string }) {
    const response = await this.api("/auth/login", {
      data: credentials,
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  }

  async logout() {
    const response = await this.api.get("/users");

    return response.data;
  }
}