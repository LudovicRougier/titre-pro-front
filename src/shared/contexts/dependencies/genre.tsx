import { createContext, useContext, useMemo } from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";

import { TYPES, container } from "@/container/container.config";
import { GetGenresUseCase } from "@/domain/usecase/genre/GetGenresUseCase";
import { GenreRepository } from "@/data/repository/interfaces/GenreRepository";

export const GenreDependencyContext = createContext<{
  repository: GenreRepository;
  getGenresUseCase: GetGenresUseCase;
} | null>(null);

export const GenreDependencyProvider: React.FC<ChildrenInterface> = ({
  children,
}) => {
  const dependencies = useMemo(() => {
    return {
      repository: container.get<GenreRepository>(TYPES.GenreRepository),
      getGenresUseCase: container.get<GetGenresUseCase>(TYPES.GetGenresUseCase),
    };
  }, []);

  return (
    <GenreDependencyContext.Provider value={dependencies}>
      {children}
    </GenreDependencyContext.Provider>
  );
};

export const useGenreDependencies = () => {
  const context = useContext(GenreDependencyContext);
  if (!context) {
    throw new Error(
      "useGenreDependencies must be used within a GenreDependencyProvider"
    );
  }
  return context;
};
