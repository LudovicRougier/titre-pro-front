import { createContext, useContext, useMemo } from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";

import { TYPES, container } from "@/container/container.config";

import { AuthRepository } from "@/data/repository/interfaces/AuthRepository";
import { LoginUseCase } from "@/domain/usecase/auth/LoginUseCase";
import { LogoutUseCase } from "@/domain/usecase/auth/LogoutUseCase";
import { RegisterUseCase } from "@/domain/usecase/auth/RegisterUseCase";
import { RefreshTokenUseCase } from "@/domain/usecase/auth/RefreshTokenUseCase";

export const AuthDependencyContext = createContext<{
  repository: AuthRepository;
  loginUseCase: LoginUseCase;
  logoutUseCase: LogoutUseCase;
  registerUseCase: RegisterUseCase;
  refreshToken: RefreshTokenUseCase;
} | null>(null);

export const AuthDependencyProvider: React.FC<ChildrenInterface> = ({
  children,
}) => {
  const dependencies = useMemo(() => {
    return {
      repository: container.get<AuthRepository>(TYPES.AuthRepository),
      loginUseCase: container.get<LoginUseCase>(TYPES.LoginUseCase),
      logoutUseCase: container.get<LogoutUseCase>(TYPES.LogoutUseCase),
      registerUseCase: container.get<RegisterUseCase>(TYPES.RegisterUseCase),
      refreshToken: container.get<RefreshTokenUseCase>(
        TYPES.RefreshTokenUseCase
      ),
    };
  }, []);

  return (
    <AuthDependencyContext.Provider value={dependencies}>
      {children}
    </AuthDependencyContext.Provider>
  );
};

export const useAuthDependencies = () => {
  const context = useContext(AuthDependencyContext);
  if (!context) {
    throw new Error(
      "useAuthDependencies must be used within a AuthDependencyProvider"
    );
  }
  return context;
};
