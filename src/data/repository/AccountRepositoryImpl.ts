import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type {
  AccountDataSource,
  UserInfo,
} from "@/data/datasource/interfaces/AccountDataSource";
import { AccountRepository } from "@/data/repository/interfaces/AccountRepository";

@injectable()
export class AcccountRepositoryImpl implements AccountRepository {
  private accountDataSource: AccountDataSource;

  public constructor(
    @inject(TYPES.AccountDataSource) accountDataSource: AccountDataSource
  ) {
    this.accountDataSource = accountDataSource;
  }

  async getAccountDetails() {
    return this.accountDataSource.getAccountDetails();
  }

  async updateAccountDetails(userInfo: UserInfo) {
    return this.accountDataSource.updateAccountDetails(userInfo);
  }

  async deleteAccount() {
    return this.accountDataSource.deleteAccount();
  }
}
