import { Badge, Container, Text } from "@mantine/core";
import MovieCarousel from "@/presentation/components/movieCarousel";

import s from "./style.module.css";

interface SuggestionsProps {
  movies?: any;
}

const Suggestions: React.FC<SuggestionsProps> = () => {
  return (
    <Container className={s.suggestions}>
      <Container className={s.suggestionsTop}>
        <Text className={s.suggestionsTopTitle}>Suggestions :</Text>
        <Badge color="violet">Sadness</Badge>
      </Container>
      <Container className={s.suggestionsMain}>
        <MovieCarousel movies />
      </Container>
    </Container>
  );
};

export default Suggestions;
