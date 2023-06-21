export type LoginResponse = {
  id: string;
  name: string;
  email: string;
  token: string;
};

export type LogoutResponse = {
  message: string;
  success: boolean;
};

export type RegisterResponse = {
  message: string;
  success: boolean;
};

export interface APILoginResponse {
  user: {
    id: number;
    name: string;
    age: number;
    country: string;
    gender: string | null;
    description: string | null;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };
  authorization: {
    token: string;
    type: string;
  };
}

export interface APILogoutResponse {
  message: string;
  success: boolean;
}

export interface APIRegisterResponse {
  message: string;
  success: boolean;
}

export interface AuthDataSource {
  login: (credentials: {
    email: string;
    password: string;
  }) => Promise<APILoginResponse>;
  logout: () => Promise<APILogoutResponse>;
  register: (data: {
    name: string;
    email: string;
    age: number;
    country: string;
    password: string;
  }) => Promise<APIRegisterResponse>;
}
