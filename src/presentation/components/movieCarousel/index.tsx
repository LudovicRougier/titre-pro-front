import { createStyles } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import MoviePoster from "@/presentation/components/moviePoster";

const useStyles = createStyles(() => ({
  movieCarousel: {
    width: "100%",
  },
}));

interface MovieCarouselProps {
  movies?: any;
}

const mockMovies = [
  {
    title: "Silent Twins",
    director: "Andrew Dominik",
    description: `After a convict breaks in a psychotherapist's home, he agrees to rehabilitation rather than arrest but the therapist's wife becomes infatuated with him.`,
    rating: 4.4,
    genres: [
      {
        color: "purple",
        name: "Drama",
      },
      {
        color: "pink",
        name: "Romance",
      },
    ],
    imgSrc:
      "https://film-grab.com/wp-content/uploads/2023/04/The-Silent-Twins-36.jpg",
  },
  {
    title: "Bones and All",
    director: "Luca Guadagnino",
    description: `After a convict breaks in a psychotherapist's home, he agrees to rehabilitation rather than arrest but the therapist's wife becomes infatuated with him.`,
    rating: 4.1,
    genres: [
      {
        color: "purple",
        name: "Drama",
      },
      {
        color: "pink",
        name: "Romance",
      },
    ],
    imgSrc:
      "https://film-grab.com/wp-content/uploads/2023/03/Bones-and-All-49.jpg",
  },
  {
    title: "Out of Blue",
    director: "Dennis Hopper",
    description: `After a convict breaks in a psychotherapist's home, he agrees to rehabilitation rather than arrest but the therapist's wife becomes infatuated with him.`,
    rating: 4.3,
    genres: [
      {
        color: "purple",
        name: "Drama",
      },
      {
        color: "pink",
        name: "Romance",
      },
    ],
    imgSrc:
      "https://film-grab.com/wp-content/uploads/2022/08/Out-of-the-Blue-007.jpg",
  },
  {
    title: "Red Rocket",
    director: "Sean Baker",
    description: `After a convict breaks in a psychotherapist's home, he agrees to rehabilitation rather than arrest but the therapist's wife becomes infatuated with him.`,
    rating: 4.7,
    genres: [
      {
        color: "purple",
        name: "Drama",
      },
      {
        color: "pink",
        name: "Romance",
      },
    ],
    imgSrc:
      "https://film-grab.com/wp-content/uploads/2022/08/Red-Rocket-024.jpg",
  },
  {
    title: "Sound of Metal",
    director: "Darius Marder",
    description: `After a convict breaks in a psychotherapist's home, he agrees to rehabilitation rather than arrest but the therapist's wife becomes infatuated with him.`,
    rating: 4.1,
    genres: [
      {
        color: "purple",
        name: "Drama",
      },
      {
        color: "pink",
        name: "Romance",
      },
    ],
    imgSrc:
      "https://film-grab.com/wp-content/uploads/2021/10/Sound-of-Metal-01.jpg",
  },
];

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
      {/* {movies.map((movie: any) => ( */}
      <MoviePoster movie={mockMovies[0]} />
      <MoviePoster movie={mockMovies[1]} />
      <MoviePoster movie={mockMovies[2]} />
      <MoviePoster movie={mockMovies[3]} />
      <MoviePoster movie={mockMovies[4]} />
      {/* ))} */}
    </Carousel>
  );
};

export default MovieCarousel;
