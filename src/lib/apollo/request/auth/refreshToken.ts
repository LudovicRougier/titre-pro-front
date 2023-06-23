import { gql } from "@apollo/client";

export const REFRESH_TOKEN = {
  queryName: "refreshToken",
  query: gql`
    mutation RefreshToken {
      refreshToken
    }
  `,
};
