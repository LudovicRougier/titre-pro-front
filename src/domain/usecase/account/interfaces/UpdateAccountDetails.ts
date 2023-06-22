import { UserModel } from "@/domain/model/User";

export interface UpdateAccountDetails {
  invoke: (userInfo: UserModel) => Promise<void>;
}
