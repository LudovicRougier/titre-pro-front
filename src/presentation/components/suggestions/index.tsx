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

const Suggestions: React.FC<SuggestionsProps> = ({
  movies,
  mainEmotion,
  subEmotion,
}) => {
  return (
    <Container className={s.suggestions}>
      <Container className={s.suggestionsTop}>
        <Text className={s.suggestionsTopTitle}>Suggestions :</Text>
        <Badge
          variant="gradient"
          gradient={{
            from: `${mainEmotion.color}`,
            to: `${subEmotion?.color}`,
            deg: 35,
          }}
        >
          {mainEmotion.translation}
        </Badge>
      </Container>
      <Container className={s.suggestionsMain}>
        <MovieCarousel movies={movies} />
      </Container>
    </Container>
  );
};

export default Suggestions;
