import "reflect-metadata";
import { injectable } from "inversify";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { MovieDataSource } from "@/data/datasource/interfaces/MovieDataSource";
import { gql } from "@apollo/client";

const GET_MOVIES = gql`
  query GetMovies {
    todos {
      id
      description
    }
  }
`;

@injectable()
export class MovieDataSourceImpl
  extends GraphQLBaseService
  implements MovieDataSource
{
  async getMovieDetails() {
    const res = await this.api.query({ query: GET_MOVIES });
    if (res) return res.data;
  }
}
