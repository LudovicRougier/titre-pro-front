import { gql } from "@apollo/client";

export const GET_MOOD_HISTORY = {
  queryName: "prompts",
  query: gql`
    query Promts {
      prompts {
        created_at
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
          watch_providers {
            buy {
              display_priority
              logo_path
              provider_id
              provider_name
            }
            flatrate {
              provider_name
              logo_path
              provider_id
              display_priority
            }
            rent {
              display_priority
              logo_path
              provider_id
              provider_name
            }
          }
        }
        movies_related_to_topic {
          backdrop_path
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
          watch_providers {
            buy {
              display_priority
              logo_path
              provider_id
              provider_name
            }
            flatrate {
              provider_name
              logo_path
              provider_id
              display_priority
            }
            rent {
              display_priority
              logo_path
              provider_id
              provider_name
            }
          }
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
