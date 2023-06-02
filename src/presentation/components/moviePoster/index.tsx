import { BackgroundImage, Badge, Container, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Star1 } from "iconsax-react";

import s from "./style.module.css";

interface MoviePosterProps {
  movie: any;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ movie }) => {
  return (
    <Carousel.Slide className={s.movieCarouselSlide}>
      <Container className={s.movieCarouselSlidePoster}>
        <BackgroundImage
          src={movie.imgSrc}
          className={s.movieCarouselSlidePosterImg}
        />
      </Container>
      <Container className={s.movieCarouselSlideDetails}>
        <Title className={s.movieCarouselSlideDetailsTitle}>
          {movie.title}
        </Title>
        <Title className={s.movieCarouselSlideDetailsDirector}>
          {movie.director}
        </Title>
        <Container className={s.movieCarouselSlideDetailsRating}>
          <Star1 size={12} color="#d9e3f0" />
          <span className={s.movieCarouselSlideDetailsRatingNumber}>
            {movie.rating}
          </span>
        </Container>
        <Container className={s.movieCarouselSlideDetailsGenres}>
          {movie.genres.map((genre: any) => (
            <Badge key={genre.id} size="xs" mr="xs" color={genre.color}>
              {genre.name}
            </Badge>
          ))}
        </Container>
        <Container className={s.movieCarouselSlideDetailsDescription}>
          <Text>{movie.description}</Text>
        </Container>
      </Container>
    </Carousel.Slide>
  );
};

export default MoviePoster;
