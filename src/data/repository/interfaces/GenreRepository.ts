import { GenreModel } from "@/domain/model/Genre";

export interface GenreRepository {
  getGenres: () => Promise<GenreModel[] | null>;
}
