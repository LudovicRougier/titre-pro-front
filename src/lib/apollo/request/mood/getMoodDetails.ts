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
          id
          name
          color
        }
        subEmotion {
          id
          name
          color
        }
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
