import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AuthRepository } from "@/data/repository/interfaces/AuthRepository";
import { Register } from "@/domain/useCase/auth/interfaces/Register";

@injectable()
export class RegisterUseCase implements Register {
  private authRepository: AuthRepository;

  public constructor(
    @inject(TYPES.AuthRepository) authRepository: AuthRepository
  ) {
    this.authRepository = authRepository;
  }

  public async invoke(data: {
    name: string;
    email: string;
    age: string;
    country: string;
    password: string;
    confirmPassword: string;
    termsOfService: boolean;
  }) {
    const credentials = {
      name: data.name,
      email: data.email,
      age: parseInt(data.age, 10),
      country: data.country,
      password: data.password,
    };

    return this.authRepository.register(credentials);
  }
}
