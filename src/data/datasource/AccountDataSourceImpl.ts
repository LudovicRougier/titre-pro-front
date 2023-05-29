import { inject, injectable } from "inversify";
import { TYPES } from "@/container/types";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { AccountDataSource } from "@/data/datasource/interfaces/AccountDataSource";
import { APIService } from "@/data/datasource/interfaces/APIService";

@injectable()
export class AccountDataSourceImpl implements AccountDataSource {
  private api;

  public constructor(
    @inject(TYPES.APIService) apiService: GraphQLBaseService | APIService
  ) {
    this.api = apiService.api;
  }

  async getAccountDetails() {}

  async updateAccountDetails() {}

  async deleteAccount() {}
}
