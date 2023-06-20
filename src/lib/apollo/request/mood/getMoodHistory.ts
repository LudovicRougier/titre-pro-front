import { gql } from "@apollo/client";

export const GET_MOOD_HISTORY = {
  queryName: "user",
  query: gql`
    query User($id: ID!) {
      user(id: $id) {
        prompts {
          id
          user_input
          custom_answer
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
    }
  `,
};
