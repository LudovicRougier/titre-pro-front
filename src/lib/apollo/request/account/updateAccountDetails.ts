import { gql } from "@apollo/client";

export const UPDATE_ACCOUNT_DETAILS = {
  queryName: "updateMe",
  query: gql`
    mutation UpdateMe($input: UserInput!) {
      updateMe(input: $input)
    }
  `,
};
