import { Container } from "inversify";
import { TYPES } from "@/container/types";

import { AuthDataSource } from "@/data/datasource/AuthDataSource";
import { AuthDataSourceImpl } from "@/data/datasource/AuthDataSourceImpl";

import { AuthRepository } from "@/data/repository/AuthRepository";
import { AuthRepositoryImpl } from "@/data/repository/AuthRepositoryImpl";

import { LoginUseCase } from "@/domain/useCase/auth/LoginUseCase";
import { LogoutUseCase } from "@/domain/useCase/auth/LogoutUseCase";

const container = new Container();
container.bind<AuthDataSource>(TYPES.AuthDataSource).to(AuthDataSourceImpl);
container.bind<AuthRepository>(TYPES.AuthRepository).to(AuthRepositoryImpl);
container.bind<LoginUseCase>(TYPES.LoginUseCase).to(LoginUseCase);
container.bind<LogoutUseCase>(TYPES.LogoutUseCase).to(LogoutUseCase);

export { container, TYPES };
