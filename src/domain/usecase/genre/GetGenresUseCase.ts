import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { GenreRepository } from "@/data/repository/interfaces/GenreRepository";
import { GetGenres } from "@/domain/usecase/genre/interfaces/GetGenres";

@injectable()
export class GetGenresUseCase implements GetGenres {
  private genreRepository: GenreRepository;

  public constructor(
    @inject(TYPES.GenreRepository)
    genreRepository: GenreRepository
  ) {
    this.genreRepository = genreRepository;
  }

  public invoke() {
    return this.genreRepository.getGenres();
  }
}
