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
    }
  `,
};
