import { APIGenre } from "@/domain/model/Genre";

export interface GenreDataSource {
  getGenres: () => Promise<APIGenre[] | null>;
}
