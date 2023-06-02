import { useAppQuery } from "@/lib/react-query/hooks";
import { useAccountDependencies } from "@/shared/contexts/dependencies/account";

export const useViewModel = () => {
  const { getAccountDetailsUseCase } = useAccountDependencies();

  const { data: accountDetails } = useAppQuery(
    ["accountDetails"],
    () => getAccountDetailsUseCase.invoke(),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 2,
    }
  );

  return { accountDetails };
};
