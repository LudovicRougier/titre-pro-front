import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "@/container/types";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import {
  AccountDataSource,
  UserInfo,
} from "@/data/datasource/interfaces/AccountDataSource";
import { APIService } from "@/data/datasource/interfaces/APIService";

@injectable()
export class AccountDataSourceImpl implements AccountDataSource {
  private api;

  public constructor(
    @inject(TYPES.APIService) apiService: GraphQLBaseService | APIService
  ) {
    this.api = apiService.api;
  }

  async getAccountDetails() {
    return {
      id: "1",
      age: "28",
      name: "John Doe",
      email: "john@doe.fr",
      country: "FR",
      description: "I'm a developer",
      favoriteGenres: ["Action", "Comedy"],
    };
  }

  async updateAccountDetails(userInfo: UserInfo) {
    // eslint-disable-next-line no-console
    console.log("[AccountDataSourceImpl] updateAccountDetails", userInfo);
  }

  async deleteAccount() {}
}
