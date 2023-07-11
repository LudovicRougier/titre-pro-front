import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AuthRepository } from "@/data/repository/interfaces/AuthRepository";
import { Logout } from "@/domain/usecase/auth/interfaces/Logout";

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
