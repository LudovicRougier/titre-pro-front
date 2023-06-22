import { useAppQuery } from "@/lib/react-query/hooks";
import { useAccountDependencies } from "@/shared/contexts/dependencies/account";
import { useWatchProviderDependencies } from "@/shared/contexts/dependencies/watchProvider";

export const useViewModel = () => {
  const { getAccountDetailsUseCase } = useAccountDependencies();
  const { getWatchProvidersUseCase } = useWatchProviderDependencies();

  const { data: accountDetails } = useAppQuery(
    ["account-details"],
    () => getAccountDetailsUseCase.invoke(),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 2,
      cacheTime: 1000 * 60 * 2,
    }
  );

  useAppQuery(["watch-providers"], () => getWatchProvidersUseCase.invoke(), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60 * 2,
  });

  return { accountDetails };
};
