import { RegisterResponse } from "@/data/datasource/interfaces/AuthDataSource";

export interface Register {
  invoke: (credentials: {
    name: string;
    email: string;
    password: string;
  }) => Promise<RegisterResponse | null>;
}
