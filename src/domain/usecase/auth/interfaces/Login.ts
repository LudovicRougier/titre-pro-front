import { LoginResponse } from "@/data/datasource/interfaces/AuthDataSource";

export interface Login {
  invoke: (
    credentials: Record<"email" | "password", string> | undefined
  ) => Promise<LoginResponse | null>;
}
