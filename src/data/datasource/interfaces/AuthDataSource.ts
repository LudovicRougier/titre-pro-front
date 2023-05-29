export type LoginResponse = {
  id: number;
  username: string;
  email: string;
  token: string;
};

export interface AuthDataSource {
  login: (credentials: {
    username: string;
    password: string;
  }) => Promise<LoginResponse>;
  logout: () => Promise<void>;
}
