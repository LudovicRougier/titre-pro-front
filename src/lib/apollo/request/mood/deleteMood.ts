import { gql } from "@apollo/client";

export const DELETE_PROMPT = {
  queryName: "deletePrompt",
  query: gql`
    mutation deletePrompt($id: ID!) {
      deletePrompt(id: $id) {
        deleted_at
      }
    }
  `,
};
