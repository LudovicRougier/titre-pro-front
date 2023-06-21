import { gql } from "@apollo/client";

export const LOGOUT = {
  queryName: "logout",
  query: gql`
    mutation Logout {
      logout
    }
  `,
};
