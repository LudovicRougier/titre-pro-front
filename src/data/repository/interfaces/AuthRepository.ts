import {
  LoginResponse,
  LogoutResponse,
} from "@/data/datasource/interfaces/AuthDataSource";

export interface AuthRepository {
  login: (credentials: {
    email: string;
    password: string;
  }) => Promise<LoginResponse | null>;

  logout: () => Promise<LogoutResponse>;
}
