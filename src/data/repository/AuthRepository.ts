import { LoginResponse } from "@/data/datasource/AuthDataSource";

export interface AuthRepository {
  login: (credentials: {
    username: string;
    password: string;
  }) => Promise<LoginResponse>;

  logout: () => Promise<void>;
}
