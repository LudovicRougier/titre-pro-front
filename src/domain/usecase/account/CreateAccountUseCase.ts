import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AccountRepository } from "@/data/repository/interfaces/AccountRepository";
import { CreateAccount } from "@/domain/usecase/account/interfaces/CreateAccount";
import { CreateUserInfo } from "@/data/datasource/interfaces/AccountDataSource";

@injectable()
export class CreateAccountUseCase implements CreateAccount {
  private accountRepository: AccountRepository;

  public constructor(
    @inject(TYPES.AccountRepository) accountRepository: AccountRepository
  ) {
    this.accountRepository = accountRepository;
  }

  public async invoke(data: CreateUserInfo) {
    return this.accountRepository.createAccount(data);
  }
}
