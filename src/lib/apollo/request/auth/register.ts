import { gql } from "@apollo/client";

export const REGISTER = {
  queryName: "register",
  query: gql`
    mutation Register(
      $name: String!
      $email: String!
      $password: String!
      $country: String!
      $age: Int!
    ) {
      register(
        name: $name
        email: $email
        password: $password
        country: $country
        age: $age
      )
    }
  `,
};
