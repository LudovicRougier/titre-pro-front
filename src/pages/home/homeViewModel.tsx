import { useAuthDependencies } from "@/shared/contexts/dependencies/auth";
import { useState } from "react";

export const useViewModel = () => {
  const { loginUseCase } = useAuthDependencies();
};
