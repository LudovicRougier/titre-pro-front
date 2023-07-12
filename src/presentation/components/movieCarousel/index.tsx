import { Carousel } from "@mantine/carousel";
import { Movie } from "@/domain/model/Movie";

import MoviePoster from "@/presentation/components/moviePoster";
import { useViewportSize } from "@mantine/hooks";
import s from "./style.module.css";

interface MovieCarouselProps {
  movies: Movie[] | undefined;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const { height, width } = useViewportSize();
  return (
    <Carousel
      className={s.movieCarousel}
      height={450}
      dragFree
      slideSize="245"
      align={0.02}
      withControls={width < 2300}
      slidesToScroll={1}
      loop
    >
      {movies &&
        movies.map((movie: Movie) => (
          <MoviePoster
            key={movie.id}
            movie={movie}
            height={367.5}
            width={245}
          />
        ))}
    </Carousel>
  );
};

export default MovieCarousel;
