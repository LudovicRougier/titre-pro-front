import { UserModel } from "@/domain/model/User";

export interface AccountRepository {
  getAccountDetails: () => Promise<UserModel | null>;
  updateAccountDetails: (user: UserModel) => Promise<void>;
  deleteAccount: () => Promise<void>;
}
