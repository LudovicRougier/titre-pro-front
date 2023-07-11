import { CreateUserInfo } from "@/data/datasource/interfaces/AccountDataSource";
import { UserModel } from "@/domain/model/User";

export interface AccountRepository {
  getAccountDetails: () => Promise<UserModel | null>;
  updateAccountDetails: (user: UserModel) => Promise<void>;
  deleteAccount: (
    currentPassword: string
  ) => Promise<{ status: string; success: boolean; errors?: string[] } | null>;
  createAccount: (userData: CreateUserInfo) => Promise<void | null>;
}
