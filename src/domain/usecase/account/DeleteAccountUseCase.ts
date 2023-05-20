import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AccountRepository } from "@/data/repository/interfaces/AccountRepository";
import { DeleteAccount } from "@/domain/useCase/account/interfaces/DeleteAccount";

@injectable()
export class DeleteAccountUseCase implements DeleteAccount {
  private accountRepository: AccountRepository;

  public constructor(
    @inject(TYPES.AccountRepository) accountRepository: AccountRepository
  ) {
    this.accountRepository = accountRepository;
  }

  public async invoke() {
    return this.accountRepository.deleteAccount();
  }
}
