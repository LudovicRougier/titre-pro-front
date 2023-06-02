import { createContext, useContext, useMemo } from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";

import { TYPES, container } from "@/container/container.config";

import { AccountRepository } from "@/data/repository/interfaces/AccountRepository";
import { UpdateAccountDetailsUseCase } from "@/domain/useCase/account/UpdateAccountDetailsUseCase";
import { GetAccountDetailsUseCase } from "@/domain/useCase/account/GetAccountDetailsUseCase";
import { DeleteAccountUseCase } from "@/domain/useCase/account/DeleteAccountUseCase";

export const AccountDependencyContext = createContext<{
  repository: AccountRepository;
  updateAccountDetailsUseCase: UpdateAccountDetailsUseCase;
  getAccountDetailsUseCase: GetAccountDetailsUseCase;
  deleteAccountUseCase: DeleteAccountUseCase;
} | null>(null);

export const AccountDependencyProvider: React.FC<ChildrenInterface> = ({
  children,
}) => {
  const dependencies = useMemo(() => {
    return {
      repository: container.get<AccountRepository>(TYPES.AccountRepository),
      updateAccountDetailsUseCase: container.get<UpdateAccountDetailsUseCase>(
        TYPES.UpdateAccountDetailsUseCase
      ),
      getAccountDetailsUseCase: container.get<GetAccountDetailsUseCase>(
        TYPES.GetAccountDetailsUseCase
      ),
      deleteAccountUseCase: container.get<DeleteAccountUseCase>(
        TYPES.DeleteAccountUseCase
      ),
    };
  }, []);

  return (
    <AccountDependencyContext.Provider value={dependencies}>
      {children}
    </AccountDependencyContext.Provider>
  );
};

export const useAccountDependencies = () => {
  const context = useContext(AccountDependencyContext);
  if (!context) {
    throw new Error(
      "useAccountDependencies must be used within a AccountDependencyProvider"
    );
  }
  return context;
};
