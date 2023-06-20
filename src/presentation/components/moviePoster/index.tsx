import { useRouter } from "next/router";
import { BackgroundImage, Badge, Container, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Movie } from "@/domain/model/Movie";
import { Star1 } from "iconsax-react";

import s from "./style.module.css";

interface MoviePosterProps {
  movie: Movie;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ movie }) => {
  const router = useRouter();
  const handleClickMovie = () => router.push(`/movie/${movie.id}`);

  return (
    <Carousel.Slide className={s.movieCarouselSlide}>
      <Container
        className={s.movieCarouselSlidePoster}
        onClick={(e) => {
          // e.stopPropagation();
          return handleClickMovie();
        }}
      >
        <BackgroundImage
          src={movie.posterPath ? movie.posterPath : ""}
          className={s.movieCarouselSlidePosterImg}
        />
      </Container>
      <Container className={s.movieCarouselSlideDetails}>
        <Title className={s.movieCarouselSlideDetailsTitle}>
          {movie.title}
        </Title>
        <Title className={s.movieCarouselSlideDetailsDirector}>
          {movie.directors.map((director) => director.name)}
        </Title>
        <Container className={s.movieCarouselSlideDetailsRating}>
          <Star1 size={12} color="#d9e3f0" />
          <span className={s.movieCarouselSlideDetailsRatingNumber}>
            {/* Back doesn't give movie rating yet */}
            {/* {movie.rating} */}
          </span>
        </Container>
        <Container className={s.movieCarouselSlideDetailsGenres}>
          {movie.genres?.map((genre, index) => (
            // Index needs to be replaced with ID
            <Badge key={index} size="xs" mr="xs">
              {genre.name}
            </Badge>
          ))}
        </Container>
        <Container className={s.movieCarouselSlideDetailsDescription} />
      </Container>
    </Carousel.Slide>
  );
};

export default MoviePoster;
