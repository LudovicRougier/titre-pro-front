import { createStyles } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import MoviePoster from "@/presentation/components/moviePoster";

const useStyles = createStyles(() => ({
  movieCarousel: {
    width: "100%",
  },
}));

interface MovieCarouselProps {
  movies: any;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const { classes } = useStyles();
  return (
    <Carousel
      className={classes.movieCarousel}
      height={370}
      dragFree
      slideSize="225px"
      align="start"
      slidesToScroll={1}
      withControls={false}
      controlsOffset="xl"
    >
      {movies.map((movie: any) => (
        <MoviePoster key={movie.id} movie />
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
