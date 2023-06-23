export interface APIGenre {
  id: string;
  name: string;
}

export interface Genre {
  genreId: string;
  genreName: string;
}

export class GenreModel implements Genre {
  genreId: string;

  genreName: string;

  constructor(genre: Genre) {
    this.genreId = genre.genreId;
    this.genreName = genre.genreName;
  }

  public static fromJSON(genre: APIGenre): Genre {
    return new GenreModel({
      genreId: genre.id,
      genreName: genre.name,
    });
  }

  public static toJSON(genre: GenreModel) {
    return {
      genre_id: genre.genreId,
      genre_name: genre.genreName,
    };
  }
}
