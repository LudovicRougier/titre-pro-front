import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import { AuthRepository } from "@/data/repository/interfaces/AuthRepository";
import type { AuthDataSource } from "@/data/datasource/interfaces/AuthDataSource";

@injectable()
export class AuthRepositoryImpl implements AuthRepository {
  private authDataSource: AuthDataSource;

  public constructor(
    @inject(TYPES.AuthDataSource) authDataSource: AuthDataSource
  ) {
    this.authDataSource = authDataSource;
  }

  public async login(credentials: { username: string; password: string }) {
    const res = await this.authDataSource.login(credentials);

    return {
      id: res.id,
      username: res.username,
      email: res.email,
      token: res.token,
    };
  }

  public async logout() {
    return this.authDataSource.logout();
  }
}
