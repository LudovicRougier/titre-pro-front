import {
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
  register: (data: {
    name: string;
    email: string;
    age: number;
    country: string;
    password: string;
  }) => Promise<APIRegisterResponse | null>;
}
