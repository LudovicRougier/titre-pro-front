import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import { Logout } from "@/domain/useCase/auth/Logout";
import type { AuthRepository } from "@/data/repository/AuthRepository";

@injectable()
export class LogoutUseCase implements Logout {
  private authRepository: AuthRepository;

  public constructor(
    @inject(TYPES.AuthRepository) authRepository: AuthRepository
  ) {
    this.authRepository = authRepository;
  }

  public async invoke() {
    return this.authRepository.logout();
  }
}
