/* eslint-disable prettier/prettier */
import { gql } from "@apollo/client";

export const GET_MOOD_HISTORY = {
  queryName: "prompts",
  query: gql`
    query Promts {
      prompts {
          custom_answer
          id
          is_positive
          main_emotion_translation
          sub_emotion_translation
          movies_related_to_emotions {
            actors {
              id
              name
              profile_picture
            }
            backdrop_path
            directors {
              name
              id
              profile_picture
            }
            genres {
              id
              name
            }
            id
            overview
            poster_path
            release_date
            runtime
            title
            vote_average
          }
          movies_related_to_topic {
            actors {
              id
              name
              profile_picture
            }
            directors {
              id
              name
              profile_picture
            }
            genres {
              id
              name
            }
            id
            overview
            poster_path
            release_date
            runtime
            title
            vote_average
          }
          subEmotion {
            color
            id
            is_positive
            name
          }
          user_input
          mainEmotion {
            color
            id
            is_positive
            name
          }
        }
      }
  `,
};
