import { WatchProviderModel } from "@/domain/model/WatchProvider";

export interface WatchProviderRepository {
  getWatchProviders: () => Promise<WatchProviderModel[] | null>;
}
