import { APIGenre, GenreModel } from "@/domain/model/Genre";
import {
  APIWatchProvider,
  WatchProviderModel,
} from "@/domain/model/WatchProvider";

export interface APIMovie {
  id: string;
  title: string;
  overview: string | null;
  backdrop_path: string;
  poster_path: string;
  runtime: number;
  vote_average: number;
  directors: { id: string; name: string; profile_picture: string }[];
  actors: { id: string; name: string; profile_picture: string }[];
  genres: APIGenre[];
  watch_providers: {
    buy: APIWatchProvider[] | null;
    flatrate: APIWatchProvider[] | null;
    rent: APIWatchProvider[] | null;
  };
}

export interface Movie {
  id: string;
  title: string;
  overview: string | null;
  backdropPath: string;
  posterPath: string;
  runtime: number;
  rating: number;
  directors: { id: string; name: string; profilePicture: string }[];
  actors: { id: string; name: string; profilePicture: string }[];
  genres: GenreModel[];
  watchProviders: {
    buy: WatchProviderModel[] | null;
    flatrate: WatchProviderModel[] | null;
    rent: WatchProviderModel[] | null;
  };
}

export class MovieModel implements Movie {
  id: string;

  title: string;

  overview: string | null;

  backdropPath: string;

  posterPath: string;

  runtime: number;

  rating: number;

  directors: { id: string; name: string; profilePicture: string }[];

  actors: { id: string; name: string; profilePicture: string }[];

  genres: GenreModel[];

  watchProviders: {
    buy: WatchProviderModel[] | null;
    flatrate: WatchProviderModel[] | null;
    rent: WatchProviderModel[] | null;
  };

  public constructor(movie: Movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.overview = movie.overview;
    this.backdropPath = movie.backdropPath;
    this.posterPath = movie.posterPath;
    this.runtime = movie.runtime;
    this.rating = movie.rating;
    this.directors = movie.directors;
    this.actors = movie.actors;
    this.genres = movie.genres;
    this.watchProviders = movie.watchProviders;
  }

  public static fromJSON(movie: APIMovie): MovieModel {
    return new MovieModel({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      runtime: movie.runtime,
      rating: movie.vote_average,
      directors: movie.directors.map((director) => ({
        id: director.id,
        name: director.name,
        profilePicture: director.profile_picture,
      })),
      actors: movie.actors.map((actor) => ({
        id: actor.id,
        name: actor.name,
        profilePicture: actor.profile_picture,
      })),
      posterPath: movie.poster_path,
      backdropPath: movie.backdrop_path,
      genres: movie.genres.map((genre) => GenreModel.fromJSON(genre)),
      watchProviders: {
        buy:
          movie.watch_providers.buy !== null
            ? movie.watch_providers.buy.map((provider) =>
                WatchProviderModel.fromJSON(provider)
              )
            : null,
        flatrate:
          movie.watch_providers.flatrate !== null
            ? movie.watch_providers.flatrate.map((provider) =>
                WatchProviderModel.fromJSON(provider)
              )
            : null,
        rent:
          movie.watch_providers.rent !== null
            ? movie.watch_providers.rent.map((provider) =>
                WatchProviderModel.fromJSON(provider)
              )
            : null,
      },
    });
  }

  public toJSON() {
    return {
      ...this,
      genres: this.genres.map((genre) => GenreModel.toJSON(genre)),
      watchProviders: {
        buy: this.watchProviders.buy
          ? this.watchProviders.buy.map((provider) => ({ ...provider }))
          : null,
        flatrate: this.watchProviders.flatrate
          ? this.watchProviders.flatrate.map((provider) => ({ ...provider }))
          : null,
        rent: this.watchProviders.rent
          ? this.watchProviders.rent.map((provider) => ({ ...provider }))
          : null,
      },
    };
  }
}
