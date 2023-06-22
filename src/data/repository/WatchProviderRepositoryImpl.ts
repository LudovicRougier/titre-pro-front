import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import { store } from "@/lib/redux-toolkit/store";
import { ADD_WATCH_PROVIDER } from "@/lib/redux-toolkit/slices/watchProviderSlice";

import type { WatchProviderDataSource } from "@/data/datasource/interfaces/WatchProviderDataSource";
import { WatchProviderRepository } from "@/data/repository/interfaces/WatchProviderRepository";
import { WatchProviderModel } from "@/domain/model/WatchProvider";

/**
 * Implementation of the WatchProviderRepository interface.
 * Provides methods for interacting with watch providers.
 *
 * @implements {WatchProviderRepository}
 */
@injectable()
export class WatchProviderRepositoryImpl implements WatchProviderRepository {
  private watchProviderDataSource: WatchProviderDataSource;

  public constructor(
    @inject(TYPES.WatchProviderDataSource)
    watchproviderDataSource: WatchProviderDataSource
  ) {
    this.watchProviderDataSource = watchproviderDataSource;
  }

  async getWatchProviders() {
    const res = await this.watchProviderDataSource.getWatchProviders();
    if (res === null) return null;

    const watchProviders = res.map((provider) =>
      WatchProviderModel.fromJSON(provider)
    );

    this.updateStoreData(watchProviders);
    return watchProviders;
  }

  private updateStoreData(providers: WatchProviderModel[]) {
    this.updateWatchProviderList(providers);
  }

  private updateWatchProviderList(providers: WatchProviderModel[]) {
    store.dispatch(
      ADD_WATCH_PROVIDER(providers.map((provider) => ({ ...provider })))
    );
  }
}
