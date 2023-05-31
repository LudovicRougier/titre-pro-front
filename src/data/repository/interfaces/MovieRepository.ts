import { MovieModel } from "@/domain/model/Movie";

export interface MovieRepository {
  getMovieDetails: () => Promise<MovieModel | null>;
}
