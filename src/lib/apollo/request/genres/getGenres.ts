import { gql } from "@apollo/client";

export const GET_GENRES = {
  queryName: "genres",
  query: gql`
    query Genres {
      genres {
        id
        name
      }
    }
  `,
};
