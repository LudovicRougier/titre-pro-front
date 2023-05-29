export interface MovieDataSource {
  getMovieDetails: () => Promise<void>;
}
