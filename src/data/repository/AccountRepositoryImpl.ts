import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AccountDataSource } from "@/data/datasource/interfaces/AccountDataSource";
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

  async updateAccountDetails() {
    return this.accountDataSource.updateAccountDetails();
  }

  async deleteAccount() {
    return this.accountDataSource.deleteAccount();
  }
}
