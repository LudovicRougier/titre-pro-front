import "reflect-metadata";
import { injectable } from "inversify";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { AccountDataSource } from "@/data/datasource/interfaces/AccountDataSource";
import { APIUser } from "@/domain/model/User";
import {
  GET_ACCOUNT_DETAILS,
  UPDATE_ACCOUNT_DETAILS,
} from "@/lib/apollo/request/account";

@injectable()
export class AccountDataSourceImpl
  extends GraphQLBaseService
  implements AccountDataSource
{
  async getAccountDetails() {
    const res = await this.api.query({
      query: GET_ACCOUNT_DETAILS.query,
    });
    return res.data[GET_ACCOUNT_DETAILS.queryName];
  }

  async updateAccountDetails(userInfo: APIUser) {
    const res = await this.api.mutate({
      mutation: UPDATE_ACCOUNT_DETAILS.query,
      variables: { input: userInfo },
    });
    return JSON.parse(res.data[UPDATE_ACCOUNT_DETAILS.queryName]);
  }

  async deleteAccount() {}
}
