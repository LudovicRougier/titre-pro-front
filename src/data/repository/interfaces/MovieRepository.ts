export interface MovieRepository {
  getMovieDetails: () => Promise<string>;
}
