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

  public async invoke(data: { name: string; email: string; password: string }) {
    const res = await this.authRepository.register(data);

    if (res) {
      return res;
    }
    return null;
  }
}
