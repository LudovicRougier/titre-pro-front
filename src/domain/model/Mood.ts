import { Movie } from "./Movie";

export interface Mood {
  id: number;
  date: string;
  userInput: string;
  message: string;
  mainEmotion: string;
  subEmotion: string;
  movies: Movie[];
}
