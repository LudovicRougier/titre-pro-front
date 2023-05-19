import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import { Login } from "@/domain/useCase/auth/Login";
import type { AuthRepository } from "@/data/repository/AuthRepository";

@injectable()
export class LoginUseCase implements Login {
  private authRepository: AuthRepository;

  public constructor(
    @inject(TYPES.AuthRepository) authRepository: AuthRepository
  ) {
    this.authRepository = authRepository;
  }

  public async invoke(
    data: Record<"username" | "password", string> | undefined
  ) {
    if (!data) throw new Error("Credentials not found");
    const credentials = {
      username: data.username,
      password: data.password,
    };
    const res = await this.authRepository.login(credentials);

    if (res) {
      return res;
    }
    return null;
  }
}
