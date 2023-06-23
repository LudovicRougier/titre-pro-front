const TYPES = {
  APIService: Symbol.for("APIService"),

  /* DATA SOURCES */
  AuthDataSource: Symbol.for("AuthDataSource"),
  MoodDataSource: Symbol.for("MoodDataSource"),
  MovieDataSource: Symbol.for("MovieDataSource"),
  AccountDataSource: Symbol.for("AccountDataSource"),
  WatchProviderDataSource: Symbol.for("WatchProviderDataSource"),
  GenreDataSource: Symbol.for("GenreDataSource"),

  /* REPOSITORIES */
  AuthRepository: Symbol.for("AuthRepository"),
  MoodRepository: Symbol.for("MoodRepository"),
  MovieRepository: Symbol.for("MovieRepository"),
  AccountRepository: Symbol.for("AccountRepository"),
  WatchProviderRepository: Symbol.for("WatchProviderRepository"),
  GenreRepository: Symbol.for("GenreRepository"),

  /* USE CASES */
  /* Auth */
  LoginUseCase: Symbol.for("LoginUseCase"),
  LogoutUseCase: Symbol.for("LogoutUseCase"),
  RegisterUseCase: Symbol.for("RegisterUseCase"),

  /* Account */
  GetAccountDetailsUseCase: Symbol.for("GetAccountDetailsUseCase"),
  UpdateAccountDetailsUseCase: Symbol.for("UpdateAccountDetailsUseCase"),
  DeleteAccountUseCase: Symbol.for("DeleteAccountUseCase"),

  /* Mood */
  FetchMoodRecommendationsUseCase: Symbol.for(
    "FetchMoodRecommendationsUseCase"
  ),
  GetMoodDetailsUseCase: Symbol.for("GetMoodDetailsUseCase"),
  RemoveMoodHistoryEntryUseCase: Symbol.for("RemoveMoodHistoryEntryUseCase"),
  RetrieveMoodHistoryListUseCase: Symbol.for("RetrieveMoodHistoryListUseCase"),

  /* Movie */
  GetMovieDetailsUseCase: Symbol.for("GetMovieDetailsUseCase"),

  /* Watch Provider */
  GetWatchProvidersUseCase: Symbol.for("GetWatchProvidersUseCase"),

  /* Genre */
  GetGenresUseCase: Symbol.for("GetGenresUseCase"),
};

export { TYPES };
