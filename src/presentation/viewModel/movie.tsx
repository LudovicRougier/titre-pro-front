import { MovieModel } from "@/domain/model/Movie";
import { useAppQuery } from "@/lib/react-query/hooks";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";
import { RootState } from "@/lib/redux-toolkit/store";
import { useCallback } from "react";

export const useViewModel = (id: string) => {
  const movieList = useAppSelector((state: RootState) => state.MOVIE.movies);

  const getMovie = useCallback(() => {
    const found = movieList.find((movie) => movie.id === id);
    if (!found) return null;
    return found;
  }, [id, movieList]);

  const { data: movie } = useAppQuery<MovieModel | null>(
    ["movie", id],
    getMovie
  );

  return { movie };
};
