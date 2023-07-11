import { UserModel } from "@/domain/model/User";

export interface GetAccountDetails {
  invoke: () => Promise<UserModel | null>;
}
