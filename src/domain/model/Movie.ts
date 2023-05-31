export interface APIMovie {
  id: number;
  title: string;
  tagline: string | null;
  genre: string[];
  director: string;
  sypnosis: string;
  rating: number;
  poster_path: string | null;
  backdro_path: string | null;
}

export interface Movie {
  id: number;
  title: string;
  tagline: string | null;
  genre: string[];
  director: string;
  sypnosis: string;
  rating: number;
  posterPath: string | null;
  backdropPath: string | null;
}

export class MovieModel implements Movie {
  id: number;

  title: string;

  tagline: string | null;

  genre: string[];

  director: string;

  sypnosis: string;

  rating: number;

  posterPath: string | null;

  backdropPath: string | null;

  public constructor(movie: Movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.tagline = movie.tagline;
    this.genre = movie.genre;
    this.director = movie.director;
    this.sypnosis = movie.sypnosis;
    this.rating = movie.rating;
    this.posterPath = movie.posterPath;
    this.backdropPath = movie.backdropPath;
  }

  public static fromJSON(movie: APIMovie): MovieModel {
    return new MovieModel({
      id: movie.id,
      title: movie.title,
      tagline: movie.tagline,
      genre: movie.genre,
      director: movie.director,
      sypnosis: movie.sypnosis,
      rating: movie.rating,
      posterPath: movie.poster_path,
      backdropPath: movie.backdro_path,
    });
  }
}
