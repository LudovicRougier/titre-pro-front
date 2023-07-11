import "reflect-metadata";
import { injectable } from "inversify";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import {
  AccountDataSource,
  CreateUserInfo,
} from "@/data/datasource/interfaces/AccountDataSource";
import { APIUser } from "@/domain/model/User";
import {
  CREATE_ACCOUNT,
  DELETE_ACCOUNT,
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

  async deleteAccount(currentPassword: string) {
    const res = await this.api.mutate({
      mutation: DELETE_ACCOUNT.query,
      variables: { input: currentPassword },
    });
    return JSON.parse(res.data[DELETE_ACCOUNT.queryName]);
  }

  async createAccount(data: CreateUserInfo) {
    const res = await this.api.mutate({
      mutation: CREATE_ACCOUNT.query,
      variables: {
        age: data.age,
        email: data.email,
        name: data.name,
        password: data.password,
        country: data.country,
      },
    });
    return JSON.parse(res.data[CREATE_ACCOUNT.queryName]);
  }
}
