const TYPES = {
  AuthDataSource: Symbol.for("AuthDataSource"),
  MoodDataSource: Symbol.for("MoodDataSource"),
  MovieDataSource: Symbol.for("MovieDataSource"),
  AccountDataSource: Symbol.for("AccountDataSource"),

  AuthRepository: Symbol.for("AuthRepository"),
  MoodRepository: Symbol.for("MoodRepository"),
  MovieRepository: Symbol.for("MovieRepository"),
  AccountRepository: Symbol.for("AccountRepository"),

  LoginUseCase: Symbol.for("LoginUseCase"),
  LogoutUseCase: Symbol.for("LogoutUseCase"),
};

export { TYPES };
