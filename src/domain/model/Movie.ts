import { APIGenre, GenreModel } from "@/domain/model/Genre";

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
    });
  }

  public toJSON() {
    return {
      ...this,
      genres: this.genres.map((genre) => GenreModel.toJSON(genre)),
    };
  }
}
