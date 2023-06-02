import { UserInfo } from "@/data/datasource/interfaces/AccountDataSource";

export interface UpdateAccountDetails {
  invoke: (userInfo: UserInfo) => Promise<void>;
}
