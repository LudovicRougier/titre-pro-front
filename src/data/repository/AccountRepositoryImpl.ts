import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type {
  AccountDataSource,
  CreateUserInfo,
} from "@/data/datasource/interfaces/AccountDataSource";
import { AccountRepository } from "@/data/repository/interfaces/AccountRepository";
import { UserModel } from "@/domain/model/User";
import { removeUndefinedKeys } from "@/utils/removeUndefinedKeys";

@injectable()
export class AcccountRepositoryImpl implements AccountRepository {
  private accountDataSource: AccountDataSource;

  public constructor(
    @inject(TYPES.AccountDataSource) accountDataSource: AccountDataSource
  ) {
    this.accountDataSource = accountDataSource;
  }

  async getAccountDetails() {
    const res = await this.accountDataSource.getAccountDetails();
    if (res === null) return null;

    return UserModel.fromJSON(res);
  }

  async updateAccountDetails(user: UserModel) {
    const userInfo = removeUndefinedKeys(UserModel.toJSON(user));
    return this.accountDataSource.updateAccountDetails(userInfo);
  }

  async deleteAccount(currentPassword: string) {
    const res = await this.accountDataSource.deleteAccount(currentPassword);
    if (!res) return null;
    return res;
  }

  async createAccount(data: CreateUserInfo) {
    const res = await this.accountDataSource.createAccount(data);
    if (!res) return null;
  }
}
