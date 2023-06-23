import "reflect-metadata";
import { injectable } from "inversify";
import { AuthDataSource } from "@/data/datasource/interfaces/AuthDataSource";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import {
  LOGIN,
  LOGOUT,
  REFRESH_TOKEN,
  REGISTER,
} from "@/lib/apollo/request/auth";

/**
 * Implementation of the AuthDataSource interface.
 * Provides methods for authentication-related operations.
 *
 * @extends {GraphQLBaseService}
 * @implements {AuthDataSource}
 */
@injectable()
export class AuthDataSourceImpl
  extends GraphQLBaseService
  implements AuthDataSource
{
  /**
   * Logs in a user with the provided credentials.
   *
   * @async
   * @param {{ email: string; password: string }} credentials - User credentials.
   * @returns {Promise<any>} A promise that resolves to the login response.
   */
  async login(credentials: { email: string; password: string }) {
    const res = await this.api.mutate({
      mutation: LOGIN.query,
      variables: { email: credentials.email, password: credentials.password },
    });
    return JSON.parse(res.data[LOGIN.queryName]);
  }

  /**
   * Logs out the currently authenticated user.
   *
   * @async
   * @returns {Promise<any>} A promise that resolves to the logout response.
   */
  async logout() {
    const res = await this.api.mutate({
      mutation: LOGOUT.query,
    });
    return JSON.parse(res.data[LOGOUT.queryName]);
  }

  /**
   * Registers a new user with the provided credentials.
   *
   * @async
   * @param {{
   *   name: string;
   *   email: string;
   *   age: number;
   *   country: string;
   *   password: string;
   * }} data - User data for registration.
   * @returns {Promise<any>} A promise that resolves to the registration response.
   */
  async register(data: {
    name: string;
    email: string;
    age: number;
    country: string;
    password: string;
  }) {
    const res = await this.api.mutate({
      mutation: REGISTER.query,
      variables: data,
    });
    return JSON.parse(res.data[REGISTER.queryName]);
  }

  /**
   * Refreshes the access token of the currently authenticated user.
   *
   * @async
   * @returns {Promise<string>} A promise that resolves to the refreshToken response.
   */
  async refreshToken() {
    const res = await this.api.mutate({
      mutation: REFRESH_TOKEN.query,
    });
    return JSON.parse(res.data[REFRESH_TOKEN.queryName]).authorisation.token;
  }
}
