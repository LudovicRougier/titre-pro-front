import { createContext, useContext, useMemo } from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";

import { TYPES, container } from "@/container/container.config";

import { AuthRepository } from "@/data/repository/AuthRepository";
import { LoginUseCase } from "@/domain/useCase/auth/LoginUseCase";
import { LogoutUseCase } from "@/domain/useCase/auth/LogoutUseCase";

export const AuthDependencyContext = createContext<{
  repository: AuthRepository;
  loginUseCase: LoginUseCase;
  logoutUseCase: LogoutUseCase;
} | null>(null);

export const AuthDependencyProvider: React.FC<ChildrenInterface> = ({
  children,
}) => {
  const dependencies = useMemo(() => {
    return {
      repository: container.get<AuthRepository>(TYPES.AuthRepository),
      loginUseCase: container.get<LoginUseCase>(TYPES.LoginUseCase),
      logoutUseCase: container.get<LogoutUseCase>(TYPES.LogoutUseCase),
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
