import {
  APILoginResponse,
  APIRegisterResponse,
  LoginResponse,
  LogoutResponse,
} from "@/data/datasource/interfaces/AuthDataSource";

export interface AuthRepository {
  login: (credentials: {
    email: string;
    password: string;
  }) => Promise<LoginResponse | null>;

  logout: () => Promise<LogoutResponse>;
  refreshToken: () => Promise<APILoginResponse | null>;
  register: (credentials: {
    name: string;
    email: string;
    password: string;
  }) => Promise<APIRegisterResponse | null>;
}
