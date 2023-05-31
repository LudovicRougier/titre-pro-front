import { MovieModel } from "@/domain/model/Movie";

export interface GetMovieDetails {
  invoke: () => Promise<MovieModel | null>;
}
