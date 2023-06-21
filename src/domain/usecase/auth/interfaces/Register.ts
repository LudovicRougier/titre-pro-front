import { RegisterResponse } from "@/data/datasource/interfaces/AuthDataSource";

export interface Register {
  invoke: (data: {
    name: string;
    email: string;
    age: string;
    country: string;
    password: string;
    confirmPassword: string;
    termsOfService: boolean;
  }) => Promise<RegisterResponse | null>;
}
