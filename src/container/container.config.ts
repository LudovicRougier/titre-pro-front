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
import { AccountRepository } from "@/data/repository/interfaces/AccountRepository";
import { AcccountRepositoryImpl } from "@/data/repository/AccountRepositoryImpl";

import { LoginUseCase } from "@/domain/useCase/auth/LoginUseCase";
import { LogoutUseCase } from "@/domain/useCase/auth/LogoutUseCase";

const container = new Container();

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
container.bind<MoodRepository>(TYPES.MoodRepository).to(MoodRepositoryImpl);
container
  .bind<AccountRepository>(TYPES.AccountRepository)
  .to(AcccountRepositoryImpl);

/* USE CASES */
container.bind<LoginUseCase>(TYPES.LoginUseCase).to(LoginUseCase);
container.bind<LogoutUseCase>(TYPES.LogoutUseCase).to(LogoutUseCase);

export { container, TYPES };
