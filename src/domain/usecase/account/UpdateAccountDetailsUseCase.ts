import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { AccountRepository } from "@/data/repository/interfaces/AccountRepository";
import { UpdateAccountDetails } from "@/domain/usecase/account/interfaces/UpdateAccountDetails";
import { UserModel } from "@/domain/model/User";
import { LOCALE } from "@/shared/enums/locale";
import { BaseUseCase } from "../BaseUseCase";

@injectable()
export class UpdateAccountDetailsUseCase
  extends BaseUseCase
  implements UpdateAccountDetails
{
  private accountRepository: AccountRepository;

  public constructor(
    @inject(TYPES.AccountRepository) accountRepository: AccountRepository
  ) {
    super();
    this.accountRepository = accountRepository;
  }

  public async invoke(userInfo: UserModel) {
    const res = await this.accountRepository.updateAccountDetails(userInfo);
    if (res === null) {
      this.notifications.show({
        id: "update-profile-error",
        withCloseButton: true,
        autoClose: 2000,
        title: LOCALE.ERROR,
        message: LOCALE.SOMETHING_WENT_WRONG,
        color: "red",
      });
    } else {
      this.notifications.show({
        id: "update-profile-success",
        withCloseButton: true,
        autoClose: 2000,
        title: LOCALE.SUCCESS,
        message: LOCALE.PROFILE_UPDATED_SUCCESSFULY,
        color: "green",
      });
    }
  }
}
