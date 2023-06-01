const TYPES = {
  APIService: Symbol.for("APIService"),

  /* DATA SOURCES */
  AuthDataSource: Symbol.for("AuthDataSource"),
  MoodDataSource: Symbol.for("MoodDataSource"),
  MovieDataSource: Symbol.for("MovieDataSource"),
  AccountDataSource: Symbol.for("AccountDataSource"),

  /* REPOSITORIES */
  AuthRepository: Symbol.for("AuthRepository"),
  MoodRepository: Symbol.for("MoodRepository"),
  MovieRepository: Symbol.for("MovieRepository"),
  AccountRepository: Symbol.for("AccountRepository"),

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
};

export { TYPES };
