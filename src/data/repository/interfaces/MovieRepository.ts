export interface MovieRepository {
  getMovieDetails: () => Promise<void>;
}
