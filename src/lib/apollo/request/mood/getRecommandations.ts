import { gql } from "@apollo/client";

export const GET_RECOMMANDATIONS = {
  queryName: "createPromptTest",
  query: gql`
    mutation CreatePromptTest($userInput: String!) {
      createPromptTest(input: { user_input: $userInput }) {
        id
        user_input
        custom_answer
        is_positive
        mainEmotion {
          name
          color
        }
        subEmotion {
          name
          color
        }
        # movies {
        #   id
        #   title
        #   synopsis
        #   medias
        # }
      }
    }
  `,
};
