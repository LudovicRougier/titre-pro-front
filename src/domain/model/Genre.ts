export interface APIGenre {
  id: string;
  name: string;
}

export interface Genre {
  id: string;
  name: string;
}

export class GenreModel implements Genre {
  id: string;

  name: string;

  constructor(genre: Genre) {
    this.id = genre.id;
    this.name = genre.name;
  }

  public static fromJSON(genre: APIGenre): Genre {
    return new GenreModel({
      id: genre.id,
      name: genre.name,
    });
  }

  public static toJSON(genre: GenreModel) {
    return {
      genre_id: genre.id,
      genre_name: genre.name,
    };
  }
}
