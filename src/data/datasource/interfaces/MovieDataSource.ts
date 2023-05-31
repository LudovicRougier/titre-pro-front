import { APIMovie } from "@/domain/model/Movie";

export interface MovieDataSource {
  getMovieDetails: () => Promise<APIMovie | null>;
}
