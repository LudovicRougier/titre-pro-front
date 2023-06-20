import { Carousel } from "@mantine/carousel";
import { Movie } from "@/domain/model/Movie";

import MoviePoster from "@/presentation/components/moviePoster";
import MoviePosterTest from "@/presentation/components/moviePosterTest";

import s from "./style.module.css";

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  return (
    <Carousel
      className={s.movieCarousel}
      height={450}
      dragFree
      slideSize="245"
      align="start"
      slidesToScroll={1}
      withControls={false}
      controlsOffset="xl"
    >
      {/* {movies.map((movie: Movie) => (
        <MoviePoster key={movie.id} movie={movie} />
      ))} */}
      {movies.map((movie: Movie) => (
        <MoviePosterTest
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