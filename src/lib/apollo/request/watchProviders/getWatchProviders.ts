import { gql } from "@apollo/client";

export const GET_WATCH_PROVIDERS = {
  queryName: "mediaProviders",
  query: gql`
    query MediaProviders {
      mediaProviders {
        provider_id
        logo_path
        provider_name
        display_priority
      }
    }
  `,
};
