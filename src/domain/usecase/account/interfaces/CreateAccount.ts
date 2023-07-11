import { CreateUserInfo } from "@/data/datasource/interfaces/AccountDataSource";

export interface CreateAccount {
  invoke: (userData: CreateUserInfo) => Promise<void | null>;
}
