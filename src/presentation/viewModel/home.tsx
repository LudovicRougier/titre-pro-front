import { useAuthDependencies } from "@/shared/contexts/dependencies/auth";

export const useViewModel = () => {
  const { loginUseCase, logoutUseCase } = useAuthDependencies();

  return { loginUseCase, logoutUseCase };
};
