import { APIMovie, MovieModel } from "@/domain/model/Movie";

export type Emotion = {
  name: string;
  color: string;
};

export interface APIMood {
  id: number | null;
  user_input: string;
  custom_answer: string;
  mainEmotion: Emotion;
  subEmotion: Emotion | null;
  movies: APIMovie[];
  created_at: string;
}

export interface Mood {
  id: number;
  date: string;
  userInput: string;
  message: string;
  mainEmotion: Emotion;
  subEmotion: Emotion | null;
  movies: MovieModel[];
}

export class MoodModel implements Mood {
  id: number;

  date: string;

  userInput: string;

  message: string;

  mainEmotion: Emotion;

  subEmotion: Emotion | null;

  movies: MovieModel[];

  public constructor(mood: Mood) {
    this.id = mood.id;
    this.date = mood.date;
    this.userInput = mood.userInput;
    this.message = mood.message;
    this.mainEmotion = mood.mainEmotion;
    this.subEmotion = mood.subEmotion;
    this.movies = mood.movies;
  }

  public static fromJSON(mood: APIMood): MoodModel {
    return new MoodModel({
      id: mood.id ? mood.id : 0,
      date: mood.created_at,
      userInput: mood.user_input,
      message: mood.custom_answer,
      mainEmotion: mood.mainEmotion,
      subEmotion: mood.subEmotion,
      movies: mood.movies.map((movie) => MovieModel.fromJSON(movie)),
    });
  }
}
