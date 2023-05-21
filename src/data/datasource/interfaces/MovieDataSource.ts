export interface MovieDataSource {
  getMovieDetails: () => Promise<string>;
}
