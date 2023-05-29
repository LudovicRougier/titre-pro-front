import "reflect-metadata";
import { injectable } from "inversify";
import apolloClient, {
  ApolloClient,
  NormalizedCacheObject,
} from "@/lib/apollo/client";

interface IGraphQLBaseService {
  api: ApolloClient<NormalizedCacheObject>;
}

@injectable()
export class GraphQLBaseService implements IGraphQLBaseService {
  public api;

  constructor() {
    this.api = apolloClient;
  }
}
