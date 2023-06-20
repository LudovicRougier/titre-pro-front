export interface APIMovie {
  id: number;
  title: string;
  overview: string | null;
  backdrop_path: string | null;
  poster_path: string | null;
  runtime: number;
  directors: { name: string; profile_picture: string }[];
  actors: { name: string; profile_picture: string }[];
  genres: { name: string }[];
}

export interface Movie {
  id: number;
  title: string;
  overview: string | null;
  backdropPath: string | null;
  posterPath: string | null;
  runtime: number;
  directors: { name: string; profilePicture: string }[];
  actors: { name: string; profilePicture: string }[];
  genres: { name: string }[];
}

export class MovieModel implements Movie {
  id: number;

  title: string;

  overview: string | null;

  backdropPath: string | null;

  posterPath: string | null;

  runtime: number;

  directors: { name: string; profilePicture: string }[];

  actors: { name: string; profilePicture: string }[];

  genres: { name: string }[];

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
        name: director.name,
        profilePicture: director.profile_picture,
      })),
      actors: movie.actors.map((actor) => ({
        name: actor.name,
        profilePicture: actor.profile_picture,
      })),
      posterPath: movie.poster_path,
      backdropPath: movie.backdrop_path,
      genres: movie.genres,
    });
  }

  public toJSON() {
    return {
      ...this,
    };
  }
}
