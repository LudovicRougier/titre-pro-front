import "reflect-metadata";
import { injectable } from "inversify";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { MovieDataSource } from "@/data/datasource/interfaces/MovieDataSource";

@injectable()
export class MovieDataSourceImpl
  extends GraphQLBaseService
  implements MovieDataSource
{
  async getMovieDetails() {}
}
