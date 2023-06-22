import { WatchProvider } from "@/domain/model/WatchProvider";

export interface GetWatchProviders {
  invoke: () => Promise<WatchProvider[] | null>;
}
