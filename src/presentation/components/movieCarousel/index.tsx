import { Carousel } from "@mantine/carousel";
import { Movie } from "@/domain/model/Movie";

import MoviePoster from "@/presentation/components/moviePoster";

import s from "./style.module.css";

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  return (
    <Carousel
      className={s.movieCarousel}
      height={400}
      dragFree
      slideSize="250px"
      align="start"
      slidesToScroll={1}
      withControls={false}
      controlsOffset="xl"
    >
      {movies.map((movie: Movie) => (
        <MoviePoster key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
