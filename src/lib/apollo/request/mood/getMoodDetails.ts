import { gql } from "@apollo/client";

export const GET_MOOD_DETAILS = {
  queryName: "prompt",
  query: gql`
    query Prompt($id: ID!) {
      prompt(id: $id) {
        id
        user_input
        custom_answer
        is_positive
        created_at
        mainEmotion {
          name
          color
        }
        subEmotion {
          name
          color
        }
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
