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

  public async login(credentials: { email: string; password: string }) {
    const res = await this.authDataSource.login(credentials);

    // TODO: add UserModel to transform data
    const user = {
      id: res.user.id,
      name: res.user.name,
      age: res.user.age,
      country: res.user.country,
      gender: res.user.gender,
      description: res.user.description,
      email: res.user.email,
      token: res.authorization.token,
    };

    return {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      token: user.token,
    };
  }

  public async logout() {
    const res = await this.authDataSource.logout();
    if (!res.success) {
      throw new Error(res.message);
    }
    return res;
  }

  public async register(credentials: {
    name: string;
    email: string;
    password: string;
  }) {
    const res = await this.authDataSource.register(credentials);
    if (res) {
      return res;
    }
    return null;
  }

  public async refreshToken() {
    const res = await this.authDataSource.refreshToken();
    if (res) {
      return res;
    }
    return null;
  }
}
