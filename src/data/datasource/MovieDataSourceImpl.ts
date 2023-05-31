import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "@/container/types";
import { APIService } from "@/data/datasource/interfaces/APIService";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { MovieDataSource } from "@/data/datasource/interfaces/MovieDataSource";

@injectable()
export class MovieDataSourceImpl implements MovieDataSource {
  private api;

  public constructor(
    @inject(TYPES.APIService) apiService: GraphQLBaseService | APIService
  ) {
    this.api = apiService.api;
  }

  async getMovieDetails() {
    return null;
  }
}
