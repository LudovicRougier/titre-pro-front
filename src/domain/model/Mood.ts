import { APIMovie, MovieModel } from "@/domain/model/Movie";

export type Emotion = {
  name: string;
  color: string;
  translation: string;
};

export interface APIMood {
  id: string;
  user_input: string;
  custom_answer: string;
  main_emotion_translation: string;
  sub_emotion_translation: string;
  mainEmotion: Emotion;
  subEmotion: Emotion | null;
  movies_related_to_emotions: APIMovie[];
  movies_related_to_topic: APIMovie[];
  created_at: string;
}

export interface Mood {
  id: string;
  date: string;
  userInput: string;
  message: string;
  mainEmotion: Emotion;
  subEmotion: Emotion | null;
  moviesRelatedToEmotions: MovieModel[];
  moviesRelatedToTopic: MovieModel[];
}

export class MoodModel implements Mood {
  id: string;

  date: string;

  userInput: string;

  message: string;

  mainEmotion: Emotion;

  subEmotion: Emotion | null;

  moviesRelatedToEmotions: MovieModel[];

  moviesRelatedToTopic: MovieModel[];

  public constructor(mood: Mood) {
    this.id = mood.id;
    this.date = mood.date;
    this.userInput = mood.userInput;
    this.message = mood.message;
    this.mainEmotion = mood.mainEmotion;
    this.subEmotion = mood.subEmotion;
    this.moviesRelatedToEmotions = mood.moviesRelatedToEmotions;
    this.moviesRelatedToTopic = mood.moviesRelatedToTopic;
  }

  public static fromJSON(mood: APIMood): MoodModel {
    return new MoodModel({
      id: mood.id ? mood.id : "0",
      date: mood.created_at,
      userInput: mood.user_input,
      message: mood.custom_answer,
      mainEmotion: {
        ...mood.mainEmotion,
        translation: mood.main_emotion_translation,
      },
      subEmotion: mood.subEmotion
        ? {
            ...mood.subEmotion,
            translation: mood.sub_emotion_translation,
          }
        : null,
      moviesRelatedToEmotions: mood.movies_related_to_emotions?.map((movie) =>
        MovieModel.fromJSON(movie)
      ),
      moviesRelatedToTopic: mood.movies_related_to_topic?.map((movie) =>
        MovieModel.fromJSON(movie)
      ),
    });
  }

  public toJSON() {
    return {
      id: this.id,
      date: this.date,
      userInput: this.userInput,
      message: this.message,
      mainEmotion: this.mainEmotion,
      subEmotion: this.subEmotion,
      moviesRelatedToEmotions: this.moviesRelatedToEmotions?.map((movie) =>
        movie.toJSON()
      ),
      moviesRelatedToTopic: this.moviesRelatedToTopic?.map((movie) =>
        movie.toJSON()
      ),
    };
  }
}
