import { APIMovie, MovieModel } from "@/domain/model/Movie";

export interface APIMood {
  id: number;
  date: string;
  user_input: string;
  message: string;
  main_emotion: string;
  sub_emotion: string;
  movies: APIMovie[];
}

export interface Mood {
  id: number;
  date: string;
  userInput: string;
  message: string;
  mainEmotion: string;
  subEmotion: string;
  movies: MovieModel[];
}

export class MoodModel implements Mood {
  id: number;

  date: string;

  userInput: string;

  message: string;

  mainEmotion: string;

  subEmotion: string;

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
      id: mood.id,
      date: mood.date,
      userInput: mood.user_input,
      message: mood.message,
      mainEmotion: mood.main_emotion,
      subEmotion: mood.sub_emotion,
      movies: mood.movies.map((movie) => MovieModel.fromJSON(movie)),
    });
  }
}
