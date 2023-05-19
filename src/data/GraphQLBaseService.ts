import "reflect-metadata";
import { injectable } from "inversify";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import apolloClient from "@/lib/apollo/apollo";

@injectable()
export abstract class GraphQLBaseService {
  protected api: ApolloClient<NormalizedCacheObject>;

  constructor() {
    this.api = apolloClient;
  }
}
