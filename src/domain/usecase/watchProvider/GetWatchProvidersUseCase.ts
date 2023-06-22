import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { WatchProviderRepository } from "@/data/repository/interfaces/WatchProviderRepository";
import { GetWatchProviders } from "@/domain/usecase/watchProvider/interfaces/GetWatchProviders";

@injectable()
export class GetWatchProvidersUseCase implements GetWatchProviders {
  private watchProviderRepository: WatchProviderRepository;

  public constructor(
    @inject(TYPES.WatchProviderRepository)
    watchProviderRepository: WatchProviderRepository
  ) {
    this.watchProviderRepository = watchProviderRepository;
  }

  public invoke() {
    return this.watchProviderRepository.getWatchProviders();
  }
}
