import { gql } from "@apollo/client";

export const CREATE_ACCOUNT = {
  queryName: "register",
  query: gql`
    mutation register(
      $age: Int!
      $country: String!
      $email: String!
      $name: String!
      $password: String!
    ) {
      register(
        age: $age
        country: $country
        email: $email
        name: $name
        password: $password
      ) {
        id
        name
        age
        country
        gender
        description
        email
      }
    }
  `,
};
