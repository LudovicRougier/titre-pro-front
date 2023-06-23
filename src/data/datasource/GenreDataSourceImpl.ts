import "reflect-metadata";
import { injectable } from "inversify";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { GenreDataSource } from "@/data/datasource/interfaces/GenreDataSource";
import { GET_GENRES } from "@/lib/apollo/request/genres";

/**
 * Implementation of the GenresDataSource interface.
 * Provides methods for genres-related operations.
 *
 * @extends {GraphQLBaseService}
 * @implements {GenresDataSource}
 */
@injectable()
export class GenreDataSourceImpl
  extends GraphQLBaseService
  implements GenreDataSource
{
  async getGenres() {
    const res = await this.api.query({
      query: GET_GENRES.query,
    });
    return res.data[GET_GENRES.queryName];
  }
}
