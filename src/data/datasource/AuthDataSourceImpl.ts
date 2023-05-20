import "reflect-metadata";
import { injectable } from "inversify";
import { HTTPBaseService } from "@/data/HTTPBaseService";
import { AuthDataSource } from "@/data/datasource/interfaces/AuthDataSource";

@injectable()
export class AuthDataSourceImpl
  extends HTTPBaseService
  implements AuthDataSource
{
  async login(credentials: { username: string; password: string }) {
    const response = await this.api.post("/auth/login", {
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
