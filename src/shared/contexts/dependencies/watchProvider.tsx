import { createContext, useContext, useMemo } from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";

import { TYPES, container } from "@/container/container.config";
import { GetWatchProvidersUseCase } from "@/domain/usecase/watchProvider/GetWatchProvidersUseCase";
import { WatchProviderRepository } from "@/data/repository/interfaces/WatchProviderRepository";

export const WatchProviderDependencyContext = createContext<{
  repository: WatchProviderRepository;
  getWatchProvidersUseCase: GetWatchProvidersUseCase;
} | null>(null);

export const WatchProviderDependencyProvider: React.FC<ChildrenInterface> = ({
  children,
}) => {
  const dependencies = useMemo(() => {
    return {
      repository: container.get<WatchProviderRepository>(
        TYPES.WatchProviderRepository
      ),
      getWatchProvidersUseCase: container.get<GetWatchProvidersUseCase>(
        TYPES.GetWatchProvidersUseCase
      ),
    };
  }, []);

  return (
    <WatchProviderDependencyContext.Provider value={dependencies}>
      {children}
    </WatchProviderDependencyContext.Provider>
  );
};

export const useWatchProviderDependencies = () => {
  const context = useContext(WatchProviderDependencyContext);
  if (!context) {
    throw new Error(
      "useWatchProviderDependencies must be used within a WatchProviderDependencyProvider"
    );
  }
  return context;
};
