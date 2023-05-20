import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AccountRepository } from "@/data/repository/interfaces/AccountRepository";
import { UpdateAccountDetails } from "@/domain/useCase/account/interfaces/UpdateAccountDetails";

@injectable()
export class UpdateAccountDetailsUseCase implements UpdateAccountDetails {
  private accountRepository: AccountRepository;

  public constructor(
    @inject(TYPES.AccountRepository) accountRepository: AccountRepository
  ) {
    this.accountRepository = accountRepository;
  }

  public async invoke() {
    return this.accountRepository.updateAccountDetails();
  }
}
