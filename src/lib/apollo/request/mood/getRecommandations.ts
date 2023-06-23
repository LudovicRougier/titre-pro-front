import { gql } from "@apollo/client";

export const GET_RECOMMANDATIONS = {
  queryName: "createPrompt",
  query: gql`
    mutation CreatePrompt($userInput: String!) {
      createPrompt(
        input: {
          user_input: $userInput
          is_personnalized: false
          is_opposite: false
        }
      ) {
        id
        user_input
        custom_answer
        is_positive
        mainEmotion {
          id
          name
          color
        }
        subEmotion {
          id
          name
          color
        }
        created_at
        movies_related_to_emotions {
          id
          title
          overview
          backdrop_path
          poster_path
          runtime
          directors {
            id
            name
            profile_picture
          }
          actors {
            id
            name
            profile_picture
          }
          genres {
            id
            name
          }
        }
        movies_related_to_topic {
          id
          title
          overview
          backdrop_path
          poster_path
          runtime
          directors {
            id
            name
            profile_picture
          }
          actors {
            id
            name
            profile_picture
          }
          genres {
            id
            name
          }
        }
      }
    }
  `,
};
