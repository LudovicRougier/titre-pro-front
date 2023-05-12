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
