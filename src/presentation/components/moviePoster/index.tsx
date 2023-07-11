import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Carousel } from "@mantine/carousel";
import { Movie } from "@/domain/model/Movie";
import { interpolate } from "@popmotion/popcorn";

import s from "./style.module.css";

interface MoviePosterProps {
  movie: Movie;
  height: number;
  width: number;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ movie, height, width }) => {
  const [hover, setHover] = useState(false);
  const [tapped, setTapped] = useState(false);

  // middle point in 2d space [150, 250]
  const centerPoint = useMemo(() => [width / 2, height / 2], [width, height]);
  const xy = useMotionValue(centerPoint);

  // how much should we rotate?
  const tx = 0.02;

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    const [x, y] = xy.get();

    let newY = y;

    if (newY === centerPoint[1]) {
      newY = centerPoint[1] + 1;
    }

    const angle = Math.atan2(newY - centerPoint[1], x - centerPoint[0]);
    const degree =
      ((angle > 0 ? angle : 2 * Math.PI + angle) * 360) / (2 * Math.PI) - 90;
    return `linear-gradient(${degree}deg, rgba(255,255,255,${opacity}), rgba(255,255,255,0) 80%)`;
  });

  const router = useRouter();
  const handleClickMovie = () => router.push(`/movie/${movie.id}`);

  return (
    <Carousel.Slide
      className={s.movieCarouselSlide}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
          handleClickMovie();
        }}
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
        data-test="emotion-movie-poster"
      >
        <div className={s.movieCarouselSlideContentShadow} />
        <div
          className={s.movieCarouselSlideContentBackground}
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_BASE_URL}${movie.posterPath})`,
          }}
        />

        <motion.div
          style={{
            background: gradient,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: hover ? 0.4 : 0,
            transition: "all 0.5s ease",
            borderRadius: "10px",
          }}
        />
      </motion.div>
    </Carousel.Slide>
  );
};

export default MoviePoster;
