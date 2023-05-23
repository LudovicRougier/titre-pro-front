import "reflect-metadata";
import { injectable } from "inversify";
import apolloClient, {
  ApolloClient,
  NormalizedCacheObject,
} from "@/lib/apollo/client";

@injectable()
export abstract class GraphQLBaseService {
  protected api: ApolloClient<NormalizedCacheObject>;

  constructor() {
    this.api = apolloClient;
  }
}
