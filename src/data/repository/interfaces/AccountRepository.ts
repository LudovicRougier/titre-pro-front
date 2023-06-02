import { UserInfo } from "@/data/datasource/interfaces/AccountDataSource";

export interface AccountRepository {
  getAccountDetails: () => Promise<UserInfo>;
  updateAccountDetails: (userInfo: UserInfo) => Promise<void>;
  deleteAccount: () => Promise<void>;
}
