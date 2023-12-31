import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AuthRepository } from "@/data/repository/interfaces/AuthRepository";
import { Login } from "@/domain/usecase/auth/interfaces/Login";

@injectable()
export class LoginUseCase implements Login {
  private authRepository: AuthRepository;

  public constructor(
    @inject(TYPES.AuthRepository) authRepository: AuthRepository
  ) {
    this.authRepository = authRepository;
  }

  public async invoke(data: Record<"email" | "password", string> | undefined) {
    if (!data) throw new Error("Credentials not found");
    const userData = {
      email: data.email,
      password: data.password,
    };
    const res = await this.authRepository.login(userData);

    if (res) {
      return res;
    }
    return null;
  }
}
