export interface APIMovie {
  id: string;
  title: string;
  overview: string | null;
  backdrop_path: string;
  poster_path: string;
  runtime: number;
  directors: { id: string; name: string; profile_picture: string }[];
  actors: { id: string; name: string; profile_picture: string }[];
  genres: { id: string; name: string }[];
}

export interface Movie {
  id: string;
  title: string;
  overview: string | null;
  backdropPath: string;
  posterPath: string;
  runtime: number;
  directors: { id: string; name: string; profilePicture: string }[];
  actors: { id: string; name: string; profilePicture: string }[];
  genres: { id: string; name: string }[];
}

export class MovieModel implements Movie {
  id: string;

  title: string;

  overview: string | null;

  backdropPath: string;

  posterPath: string;

  runtime: number;

  directors: { id: string; name: string; profilePicture: string }[];

  actors: { id: string; name: string; profilePicture: string }[];

  genres: { id: string; name: string }[];

  public constructor(movie: Movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.overview = movie.overview;
    this.backdropPath = movie.backdropPath;
    this.posterPath = movie.posterPath;
    this.runtime = movie.runtime;
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
      genres: movie.genres.map((genre) => ({
        id: genre.id,
        name: genre.name,
      })),
    });
  }

  public toJSON() {
    return {
      ...this,
    };
  }
}
