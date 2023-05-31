import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { MovieDataSource } from "@/data/datasource/interfaces/MovieDataSource";
import { MovieRepository } from "@/data/repository/interfaces/MovieRepository";
import { MovieModel } from "@/domain/model/Movie";

@injectable()
export class MovieRepositoryImpl implements MovieRepository {
  private movieDataSource: MovieDataSource;

  public constructor(
    @inject(TYPES.MovieDataSource) movieDataSource: MovieDataSource
  ) {
    this.movieDataSource = movieDataSource;
  }

  public async getMovieDetails() {
    const res = await this.movieDataSource.getMovieDetails();
    if (res === null) return null;
    return MovieModel.fromJSON(res);
  }
}
