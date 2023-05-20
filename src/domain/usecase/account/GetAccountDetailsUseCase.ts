import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AccountRepository } from "@/data/repository/interfaces/AccountRepository";
import { GetAccountDetails } from "@/domain/useCase/account/interfaces/GetAccountDetails";

@injectable()
export class GetAccountDetailsUseCase implements GetAccountDetails {
  private accountRepository: AccountRepository;

  public constructor(
    @inject(TYPES.AccountRepository) accountRepository: AccountRepository
  ) {
    this.accountRepository = accountRepository;
  }

  public async invoke() {
    return this.accountRepository.getAccountDetails();
  }
}
