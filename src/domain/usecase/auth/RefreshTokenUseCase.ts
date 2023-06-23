import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AuthRepository } from "@/data/repository/interfaces/AuthRepository";
import { RefreshToken } from "@/domain/usecase/auth/interfaces/RefreshToken";

@injectable()
export class RefreshTokenUseCase implements RefreshToken {
  private authRepository: AuthRepository;

  public constructor(
    @inject(TYPES.AuthRepository) authRepository: AuthRepository
  ) {
    this.authRepository = authRepository;
  }

  public async invoke() {
    const res = await this.authRepository.refreshToken();
    if (res) {
      return res;
    }
    return null;
  }
}
