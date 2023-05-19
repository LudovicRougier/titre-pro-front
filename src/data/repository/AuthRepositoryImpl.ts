import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AuthDataSource } from "@/data/datasource/AuthDataSource";
import { AuthRepository } from "@/data/repository/AuthRepository";

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
