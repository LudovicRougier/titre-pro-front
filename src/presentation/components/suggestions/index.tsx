import { Badge, Container, Text } from "@mantine/core";
import { Movie } from "@/domain/model/Movie";
import MovieCarousel from "@/presentation/components/movieCarousel";

import s from "./style.module.css";

type emotionType = {
  translation?: string;
  color?: string;
  name?: string;
};

interface SuggestionsProps {
  movies: Movie[] | undefined;
  mainEmotion: emotionType;
  subEmotion: emotionType | null;
}

const Suggestions: React.FC<SuggestionsProps> = ({ movies, mainEmotion }) => {
  return (
    <div className={s.suggestions}>
      <div className={s.suggestionsTop}>
        <Text className={s.suggestionsTopTitle}>Suggestions :</Text>
        <Badge variant="light" color="gray">
          {mainEmotion.translation}
        </Badge>
      </div>
      <div className={s.suggestionsMain}>
        <MovieCarousel movies={movies} />
      </div>
    </div>
  );
};

export default Suggestions;
