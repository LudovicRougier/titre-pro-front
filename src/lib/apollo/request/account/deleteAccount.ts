import { gql } from "@apollo/client";

export const DELETE_ACCOUNT = {
  queryName: "deleteMe",
  query: gql`
    mutation DeleteMe($input: String!) {
      deleteMe(input: $input)
    }
  `,
};
