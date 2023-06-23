import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import { store } from "@/lib/redux-toolkit/store";
import { ADD_GENRE } from "@/lib/redux-toolkit/slices/genreSlice";

import type { GenreDataSource } from "@/data/datasource/interfaces/GenreDataSource";
import { GenreRepository } from "@/data/repository/interfaces/GenreRepository";
import { GenreModel } from "@/domain/model/Genre";

/**
 * Implementation of the GenreRepository interface.
 * Provides methods for interacting with genres.
 *
 * @implements {GenreRepository}
 */
@injectable()
export class GenreRepositoryImpl implements GenreRepository {
  private GenreDataSource: GenreDataSource;

  public constructor(
    @inject(TYPES.GenreDataSource)
    GenreDataSource: GenreDataSource
  ) {
    this.GenreDataSource = GenreDataSource;
  }

  async getGenres() {
    const res = await this.GenreDataSource.getGenres();
    if (res === null) return null;

    const genres = res.map((genre) => GenreModel.fromJSON(genre));

    this.updateStoreData(genres);
    return genres;
  }

  private updateStoreData(genres: GenreModel[]) {
    this.updateGenreList(genres);
  }

  private updateGenreList(genres: GenreModel[]) {
    store.dispatch(ADD_GENRE(genres.map((genre) => ({ ...genre }))));
  }
}
