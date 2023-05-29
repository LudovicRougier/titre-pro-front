import "reflect-metadata";
import { injectable } from "inversify";
import { AxiosBaseService } from "@/data/AxiosBaseService";
import { AuthDataSource } from "@/data/datasource/interfaces/AuthDataSource";

@injectable()
export class AuthDataSourceImpl
  extends AxiosBaseService
  implements AuthDataSource
{
  async login(credentials: { username: string; password: string }) {
    const response = await this.api.post("/auth/login", credentials);
    return response.data;
  }

  async logout() {
    const response = await this.api.get("/users");
    return response.data;
  }
}
