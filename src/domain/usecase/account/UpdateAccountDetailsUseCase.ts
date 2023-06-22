import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AccountRepository } from "@/data/repository/interfaces/AccountRepository";
import { UpdateAccountDetails } from "@/domain/usecase/account/interfaces/UpdateAccountDetails";
import { UserModel } from "@/domain/model/User";

@injectable()
export class UpdateAccountDetailsUseCase implements UpdateAccountDetails {
  private accountRepository: AccountRepository;

  public constructor(
    @inject(TYPES.AccountRepository) accountRepository: AccountRepository
  ) {
    this.accountRepository = accountRepository;
  }

  public async invoke(userInfo: UserModel) {
    return this.accountRepository.updateAccountDetails(userInfo);
  }
}
