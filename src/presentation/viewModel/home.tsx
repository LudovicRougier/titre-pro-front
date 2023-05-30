import { useAuthDependencies } from "@/shared/contexts/dependencies/auth";
import { signOut, signIn, useSession } from "next-auth/react";

export const useViewModel = () => {
  const { data: session, status } = useSession();
  const { logoutUseCase } = useAuthDependencies();

  const handleLogout = async () => {
    await logoutUseCase.invoke();
    signOut();
  };

  const handleLogin = async () => {
    await signIn();
  };

  return { session, status, logoutUseCase, handleLogout, handleLogin };
};
