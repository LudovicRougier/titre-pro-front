import { gql } from "@apollo/client";

export const GET_ACCOUNT_DETAILS = {
  queryName: "me",
  query: gql`
    query Me {
      me {
        id
        name
        age
        country
        gender
        description
        email
        wanted_genres {
          id
          name
        }
        unwanted_genres {
          id
          name
        }
        wanted_watch_providers {
          provider_id
          logo_path
          provider_name
          display_priority
        }
        prompts {
          id
        }
      }
    }
  `,
};
