import React, { useState, useEffect } from "react";
import { Badge, Container, Title } from "@mantine/core";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Carousel } from "@mantine/carousel";
import { Movie } from "@/domain/model/Movie";
import { Star1 } from "iconsax-react";
import { interpolate } from "@popmotion/popcorn";

import s from "./style.module.css";

interface MoviePosterProps {
  movie: Movie;
  height: number;
  width: number;
}

const MoviePosterTest: React.FC<MoviePosterProps> = ({
  movie,
  height,
  width,
}) => {
  const [hover, setHover] = useState(false);
  const [tapped, setTapped] = useState(false);

  // middle point in 2d space [150, 250]
  const centerPoint = [width / 2, height / 2];
  const xy = useMotionValue(centerPoint);

  // how much should we rotate?
  const tx = 0.0125;

  // get rotateY
  const transformX = interpolate([0, width], [width * tx, width * tx * -1]);
  const rotateY = useTransform(xy, ([x]) => transformX(x));

  // get rotateX
  const transformY = interpolate(
    [0, height],
    [height * tx * -1, height * tx * 1]
  );
  const rotateX = useTransform(xy, ([, y]) => transformY(y));

  const config = {
    stiffness: 150,
    damping: 20,
  };

  // get our spring values
  const springX = useSpring(rotateX, config);
  const springY = useSpring(rotateY, config);

  function onMouseOver(e: any) {
    if (tapped) return;
    const rect = e.target.getBoundingClientRect();
    xy.set([e.clientX - rect.left, e.clientY - rect.top]);
  }

  function hoverStart() {
    setHover(true);
  }

  function hoverEnd() {
    setHover(false);
  }

  useEffect(() => {
    if (!hover) {
      xy.set(centerPoint);
    }
  }, [hover, xy, centerPoint]);

  const gradientOpacity = useTransform(xy, ([, y]) => {
    return interpolate([0, height], [0, 0.3])(y);
  });

  const gradientOpacitySpring = useSpring(gradientOpacity, config);

  const gradient = useTransform(gradientOpacitySpring, (opacity) => {
    // eslint-disable-next-line prefer-const
    let [x, y] = xy.get();

    if (y === centerPoint[1]) {
      y = centerPoint[1] + 1;
    }

    const angle = Math.atan2(y - centerPoint[1], x - centerPoint[0]);
    const degree =
      ((angle > 0 ? angle : 2 * Math.PI + angle) * 360) / (2 * Math.PI) - 90;
    return `linear-gradient(${degree}deg, rgba(255,255,255,${opacity}), rgba(255,255,255,0) 80%)`;
  });

  return (
    <Carousel.Slide
      className={s.movieCarouselSlide}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <motion.div
        className={s.movieCarouselSlideContent}
        style={{
          scale: 1,
          rotateX: springX,
          rotateY: springY,
        }}
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onTapCancel={(e) => {
          setTapped(false);
          onMouseOver(e);
        }}
        onTapStart={() => {
          setTapped(true);
        }}
        onTap={() => {
          setTapped(false);
        }}
        onHoverStart={hoverStart}
        onHoverEnd={hoverEnd}
        onMouseMove={onMouseOver}
      >
        {/* // eslint-disable-next-line react/no-unknown-property */}
        <div className={s.movieCarouselSlideContentShadow} />
        <div
          className={s.movieCarouselSlideContentBackground}
          style={{
            backgroundImage: `url(${movie.posterPath})`,
          }}
        />
        <motion.div
          style={{
            background: gradient,
          }}
        />
        <Container className={s.movieCarouselSlideContentDetails}>
          <Title className={s.movieCarouselSlideContentDetailsTitle}>
            {movie.title}
          </Title>
          <Title className={s.movieCarouselSlideContentDetailsDirector}>
            {movie.directors.map((director) => director.name)}
          </Title>
          <Container className={s.movieCarouselSlideContentDetailsRating}>
            <Star1 size={12} color="#d9e3f0" />
            <span className={s.movieCarouselSlideContentDetailsRatingNumber}>
              {/* Back doesn't give movie rating yet */}
              {/* {movie.rating} */}
            </span>
          </Container>
          <Container className={s.movieCarouselSlideContentDetailsGenres}>
            {movie.genres?.map((genre, index) => (
              // Index needs to be replaced with ID
              <Badge key={index} size="xs" mr="xs">
                {genre.name}
              </Badge>
            ))}
          </Container>
        </Container>
      </motion.div>
    </Carousel.Slide>
  );
};

export default MoviePosterTest;
