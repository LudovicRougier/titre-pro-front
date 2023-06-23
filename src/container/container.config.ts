import { Container } from "inversify";
import { TYPES } from "@/container/types";

import { AuthDataSource } from "@/data/datasource/interfaces/AuthDataSource";
import { AuthDataSourceImpl } from "@/data/datasource/AuthDataSourceImpl";
import { MoodDataSource } from "@/data/datasource/interfaces/MoodDataSource";
import { MoodDataSourceImpl } from "@/data/datasource/MoodDataSourceImpl";
import { MovieDataSource } from "@/data/datasource/interfaces/MovieDataSource";
import { MovieDataSourceImpl } from "@/data/datasource/MovieDataSourceImpl";
import { AccountDataSource } from "@/data/datasource/interfaces/AccountDataSource";
import { AccountDataSourceImpl } from "@/data/datasource/AccountDataSourceImpl";
import { WatchProviderDataSource } from "@/data/datasource/interfaces/WatchProviderDataSource";
import { WatchProviderDataSourceImpl } from "@/data/datasource/WatchProviderDataSourceImpl";
import { GenreDataSource } from "@/data/datasource/interfaces/GenreDataSource";
import { GenreDataSourceImpl } from "@/data/datasource/GenreDataSourceImpl";

import { AuthRepository } from "@/data/repository/interfaces/AuthRepository";
import { AuthRepositoryImpl } from "@/data/repository/AuthRepositoryImpl";
import { MoodRepository } from "@/data/repository/interfaces/MoodRepository";
import { MoodRepositoryImpl } from "@/data/repository/MoodRepositoryImpl";
import { MovieRepository } from "@/data/repository/interfaces/MovieRepository";
import { MovieRepositoryImpl } from "@/data/repository/MovieRepositoryImpl";
import { AccountRepository } from "@/data/repository/interfaces/AccountRepository";
import { AcccountRepositoryImpl } from "@/data/repository/AccountRepositoryImpl";
import { WatchProviderRepository } from "@/data/repository/interfaces/WatchProviderRepository";
import { WatchProviderRepositoryImpl } from "@/data/repository/WatchProviderRepositoryImpl";
import { GenreRepository } from "@/data/repository/interfaces/GenreRepository";
import { GenreRepositoryImpl } from "@/data/repository/GenreRepositoryImpl";

import { GetWatchProvidersUseCase } from "@/domain/usecase/watchProvider/GetWatchProvidersUseCase";
import { GetGenresUseCase } from "@/domain/usecase/genre/GetGenresUseCase";
import { AxiosBaseService } from "@/data/AxiosBaseService";
import { DeleteAccountUseCase } from "@/domain/usecase/account/DeleteAccountUseCase";
import { GetAccountDetailsUseCase } from "@/domain/usecase/account/GetAccountDetailsUseCase";
import { UpdateAccountDetailsUseCase } from "@/domain/usecase/account/UpdateAccountDetailsUseCase";
import { LoginUseCase } from "@/domain/usecase/auth/LoginUseCase";
import { LogoutUseCase } from "@/domain/usecase/auth/LogoutUseCase";
import { RegisterUseCase } from "@/domain/usecase/auth/RegisterUseCase";
import { FetchMoodRecommendationsUseCase } from "@/domain/usecase/mood/FetchMoodRecommendationsUseCase";
import { GetMoodDetailsUseCase } from "@/domain/usecase/mood/GetMoodDetailsUseCase";
import { RemoveMoodHistoryEntryUseCase } from "@/domain/usecase/mood/RemoveMoodHistoryEntryUseCase";
import { RetrieveMoodHistoryListUseCase } from "@/domain/usecase/mood/RetrieveMoodHistoryListUseCase";
import { GetMovieDetailsUseCase } from "@/domain/usecase/movie/GetMovieDetailsUseCase";
import { RefreshTokenUseCase } from "@/domain/usecase/auth/RefreshTokenUseCase";

const container = new Container();

container.bind<AxiosBaseService>(TYPES.APIService).to(AxiosBaseService);

/* DATA SOURCES */
container.bind<AuthDataSource>(TYPES.AuthDataSource).to(AuthDataSourceImpl);
container.bind<MoodDataSource>(TYPES.MoodDataSource).to(MoodDataSourceImpl);
container.bind<MovieDataSource>(TYPES.MovieDataSource).to(MovieDataSourceImpl);
container
  .bind<AccountDataSource>(TYPES.AccountDataSource)
  .to(AccountDataSourceImpl);
container
  .bind<WatchProviderDataSource>(TYPES.WatchProviderDataSource)
  .to(WatchProviderDataSourceImpl);
container.bind<GenreDataSource>(TYPES.GenreDataSource).to(GenreDataSourceImpl);

/* REPOSITORIES */
container.bind<MoodRepository>(TYPES.MoodRepository).to(MoodRepositoryImpl);
container.bind<AuthRepository>(TYPES.AuthRepository).to(AuthRepositoryImpl);
container.bind<MovieRepository>(TYPES.MovieRepository).to(MovieRepositoryImpl);
container
  .bind<AccountRepository>(TYPES.AccountRepository)
  .to(AcccountRepositoryImpl);
container
  .bind<WatchProviderRepository>(TYPES.WatchProviderRepository)
  .to(WatchProviderRepositoryImpl);
container.bind<GenreRepository>(TYPES.GenreRepository).to(GenreRepositoryImpl);

/* USE CASES */
container.bind<LoginUseCase>(TYPES.LoginUseCase).to(LoginUseCase);
container.bind<LogoutUseCase>(TYPES.LogoutUseCase).to(LogoutUseCase);
container.bind<RegisterUseCase>(TYPES.RegisterUseCase).to(RegisterUseCase);
container
  .bind<RefreshTokenUseCase>(TYPES.RefreshTokenUseCase)
  .to(RefreshTokenUseCase);

container
  .bind<GetAccountDetailsUseCase>(TYPES.GetAccountDetailsUseCase)
  .to(GetAccountDetailsUseCase);
container
  .bind<UpdateAccountDetailsUseCase>(TYPES.UpdateAccountDetailsUseCase)
  .to(UpdateAccountDetailsUseCase);
container
  .bind<DeleteAccountUseCase>(TYPES.DeleteAccountUseCase)
  .to(DeleteAccountUseCase);

container
  .bind<FetchMoodRecommendationsUseCase>(TYPES.FetchMoodRecommendationsUseCase)
  .to(FetchMoodRecommendationsUseCase);
container
  .bind<RetrieveMoodHistoryListUseCase>(TYPES.RetrieveMoodHistoryListUseCase)
  .to(RetrieveMoodHistoryListUseCase);
container
  .bind<RemoveMoodHistoryEntryUseCase>(TYPES.RemoveMoodHistoryEntryUseCase)
  .to(RemoveMoodHistoryEntryUseCase);
container
  .bind<GetMoodDetailsUseCase>(TYPES.GetMoodDetailsUseCase)
  .to(GetMoodDetailsUseCase);

container
  .bind<GetMovieDetailsUseCase>(TYPES.GetMovieDetailsUseCase)
  .to(GetMovieDetailsUseCase);
export { container, TYPES };

container
  .bind<GetWatchProvidersUseCase>(TYPES.GetWatchProvidersUseCase)
  .to(GetWatchProvidersUseCase);

container.bind<GetGenresUseCase>(TYPES.GetGenresUseCase).to(GetGenresUseCase);
