import { APIWatchProvider } from "@/domain/model/WatchProvider";

export interface WatchProviderDataSource {
  getWatchProviders: () => Promise<APIWatchProvider[] | null>;
}
