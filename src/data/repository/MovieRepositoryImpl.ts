import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { MovieDataSource } from "@/data/datasource/interfaces/MovieDataSource";
import { MovieRepository } from "@/data/repository/interfaces/MovieRepository";

@injectable()
export class MovieRepositoryImpl implements MovieRepository {
  private movieDataSource: MovieDataSource;

  public constructor(
    @inject(TYPES.MoodDataSource) movieDataSource: MovieDataSource
  ) {
    this.movieDataSource = movieDataSource;
  }

  async getMovieDetails() {
    return this.movieDataSource.getMovieDetails();
  }
}
