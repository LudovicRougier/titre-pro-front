import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { MovieRepository } from "@/data/repository/interfaces/MovieRepository";
import { GetMovieDetails } from "@/domain/usecase/movie/interfaces/GetMovieDetails";

@injectable()
export class GetMovieDetailsUseCase implements GetMovieDetails {
  private movieRepository: MovieRepository;

  public constructor(
    @inject(TYPES.MovieRepository) movieRepository: MovieRepository
  ) {
    this.movieRepository = movieRepository;
  }

  public invoke() {
    return this.movieRepository.getMovieDetails();
  }
}
