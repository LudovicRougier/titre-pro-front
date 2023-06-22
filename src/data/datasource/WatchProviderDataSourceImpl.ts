import "reflect-metadata";
import { injectable } from "inversify";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { WatchProviderDataSource } from "@/data/datasource/interfaces/WatchProviderDataSource";
import { GET_WATCH_PROVIDERS } from "@/lib/apollo/request/watchProviders";

/**
 * Implementation of the WatchProviderDataSource interface.
 * Provides methods for watch providers-related operations.
 *
 * @extends {GraphQLBaseService}
 * @implements {WatchProviderDataSource}
 */
@injectable()
export class WatchProviderDataSourceImpl
  extends GraphQLBaseService
  implements WatchProviderDataSource
{
  async getWatchProviders() {
    const res = await this.api.query({
      query: GET_WATCH_PROVIDERS.query,
    });
    return res.data[GET_WATCH_PROVIDERS.queryName];
  }
}
