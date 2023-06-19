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
          name
          color
        }
        subEmotion {
          name
          color
        }
        created_at
        movies_related_to_emotions {
          title
          overview
          backdrop_path
          poster_path
          runtime
          directors {
            name
            profile_picture
          }
          actors {
            name
            profile_picture
          }
          genres {
            name
          }
        }
        movies_related_to_topic {
          title
          overview
          backdrop_path
          poster_path
          runtime
          directors {
            name
            profile_picture
          }
          actors {
            name
            profile_picture
          }
          genres {
            name
          }
        }
      }
    }
  `,
};
