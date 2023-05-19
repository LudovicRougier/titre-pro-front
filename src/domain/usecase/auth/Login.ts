import { LoginResponse } from "@/data/datasource/Auth/AuthDataSource";

export interface Login {
  invoke: (
    credentials: Record<"username" | "password", string> | undefined
  ) => Promise<LoginResponse | null>;
}
