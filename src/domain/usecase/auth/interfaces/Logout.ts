import { LogoutResponse } from "@/data/datasource/interfaces/AuthDataSource";

export interface Logout {
  invoke: () => Promise<LogoutResponse>;
}
