import { injectable } from "inversify";
import "reflect-metadata";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { AccountDataSource } from "@/data/datasource/interfaces/AccountDataSource";

@injectable()
export class AccountDataSourceImpl
  extends GraphQLBaseService
  implements AccountDataSource
{
  async getAccountDetails() {}

  async updateAccountDetails() {}

  async deleteAccount() {}
}
