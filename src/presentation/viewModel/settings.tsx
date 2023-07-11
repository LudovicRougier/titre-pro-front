import { useAppQuery } from "@/lib/react-query/hooks";
import { useAccountDependencies } from "@/shared/contexts/dependencies/account";
import { useWatchProviderDependencies } from "@/shared/contexts/dependencies/watchProvider";
import { useGenreDependencies } from "@/shared/contexts/dependencies/genre";

export const useViewModel = () => {
  const { getAccountDetailsUseCase } = useAccountDependencies();
  const { getWatchProvidersUseCase } = useWatchProviderDependencies();
  const { getGenresUseCase } = useGenreDependencies();

  const { data: accountDetails, isLoading: isAccountDetailsLoading } =
    useAppQuery(["account-details"], () => getAccountDetailsUseCase.invoke(), {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 2,
      cacheTime: 1000 * 60 * 2,
    });

  useAppQuery(["watch-providers"], () => getWatchProvidersUseCase.invoke(), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60 * 2,
  });

  useAppQuery(["genres"], () => getGenresUseCase.invoke(), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60 * 2,
  });

  return { accountDetails, isAccountDetailsLoading };
};
