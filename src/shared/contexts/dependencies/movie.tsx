import { createContext, useContext, useMemo } from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";

import { TYPES, container } from "@/container/container.config";

import { MovieRepository } from "@/data/repository/interfaces/MovieRepository";
import { GetMovieDetailsUseCase } from "@/domain/useCase/movie/GetMovieDetailsUseCase";

export const MovieDependencyContext = createContext<{
  repository: MovieRepository;
  getMovieDetailsUseCase: GetMovieDetailsUseCase;
} | null>(null);

export const MovieDependencyProvider: React.FC<ChildrenInterface> = ({
  children,
}) => {
  const dependencies = useMemo(() => {
    return {
      repository: container.get<MovieRepository>(TYPES.MovieRepository),
      getMovieDetailsUseCase: container.get<GetMovieDetailsUseCase>(
        TYPES.GetMovieDetailsUseCase
      ),
    };
  }, []);

  return (
    <MovieDependencyContext.Provider value={dependencies}>
      {children}
    </MovieDependencyContext.Provider>
  );
};

export const useMovieDependencies = () => {
  const context = useContext(MovieDependencyContext);
  if (!context) {
    throw new Error(
      "useMovieDependencies must be used within a AuthDependencyProvider"
    );
  }
  return context;
};
