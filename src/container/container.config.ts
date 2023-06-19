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

import { AuthRepository } from "@/data/repository/interfaces/AuthRepository";
import { AuthRepositoryImpl } from "@/data/repository/AuthRepositoryImpl";
import { MoodRepository } from "@/data/repository/interfaces/MoodRepository";
import { MoodRepositoryImpl } from "@/data/repository/MoodRepositoryImpl";
import { MovieRepository } from "@/data/repository/interfaces/MovieRepository";
import { MovieRepositoryImpl } from "@/data/repository/MovieRepositoryImpl";
import { AccountRepository } from "@/data/repository/interfaces/AccountRepository";
import { AcccountRepositoryImpl } from "@/data/repository/AccountRepositoryImpl";

import { LoginUseCase } from "@/domain/useCase/auth/LoginUseCase";
import { LogoutUseCase } from "@/domain/useCase/auth/LogoutUseCase";
import { GetAccountDetailsUseCase } from "@/domain/useCase/account/GetAccountDetailsUseCase";
import { UpdateAccountDetailsUseCase } from "@/domain/useCase/account/UpdateAccountDetailsUseCase";
import { DeleteAccountUseCase } from "@/domain/useCase/account/DeleteAccountUseCase";
import { FetchMoodRecommendationsUseCase } from "@/domain/useCase/mood/FetchMoodRecommendationsUseCase";
import { RetrieveMoodHistoryListUseCase } from "@/domain/useCase/mood/RetrieveMoodHistoryListUseCase";
import { RemoveMoodHistoryEntryUseCase } from "@/domain/useCase/mood/RemoveMoodHistoryEntryUseCase";
import { GetMoodDetailsUseCase } from "@/domain/useCase/mood/GetMoodDetailsUseCase";
import { GetMovieDetailsUseCase } from "@/domain/useCase/movie/GetMovieDetailsUseCase";
import { AxiosBaseService } from "@/data/AxiosBaseService";
import { RegisterUseCase } from "@/domain/useCase/auth/RegisterUseCase";

const container = new Container();

container.bind<AxiosBaseService>(TYPES.APIService).to(AxiosBaseService);

/* DATA SOURCES */
container.bind<AuthDataSource>(TYPES.AuthDataSource).to(AuthDataSourceImpl);
container.bind<MoodDataSource>(TYPES.MoodDataSource).to(MoodDataSourceImpl);
container.bind<MovieDataSource>(TYPES.MovieDataSource).to(MovieDataSourceImpl);
container
  .bind<AccountDataSource>(TYPES.AccountDataSource)
  .to(AccountDataSourceImpl);

/* REPOSITORIES */
container.bind<MoodRepository>(TYPES.MoodRepository).to(MoodRepositoryImpl);
container.bind<AuthRepository>(TYPES.AuthRepository).to(AuthRepositoryImpl);
container.bind<MovieRepository>(TYPES.MovieRepository).to(MovieRepositoryImpl);
container
  .bind<AccountRepository>(TYPES.AccountRepository)
  .to(AcccountRepositoryImpl);

/* USE CASES */
container.bind<LoginUseCase>(TYPES.LoginUseCase).to(LoginUseCase);
container.bind<LogoutUseCase>(TYPES.LogoutUseCase).to(LogoutUseCase);
container.bind<RegisterUseCase>(TYPES.RegisterUseCase).to(RegisterUseCase);

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
