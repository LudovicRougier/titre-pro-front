import { gql } from "@apollo/client";

export const LOGIN = {
  queryName: "login",
  query: gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `,
};
