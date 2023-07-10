import React from "react";
import { convertDurationToString } from "@/utils/convertDurationToString";
import { BackgroundImage, Badge, Group, Rating, Tooltip } from "@mantine/core";
import { MovieModel } from "@/domain/model/Movie";
import { Calendar, Clock } from "iconsax-react";

import s from "./style.module.css";

interface MovieDetailsProps {
  movie: MovieModel | null | undefined;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  if (!movie) return null;

  const directors = movie.directors.map((director) => director.name).join(", ");
  const actors = movie.actors.map((actor) => actor.name).join(", ");
  const duration = convertDurationToString(movie.runtime);
  const rating = parseFloat((movie.rating / 2).toFixed(1));

  return (
    <div
      style={{
        height: "100%",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BackgroundImage
        src={`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}${movie.backdropPath}`}
        className={s.card}
      >
        <div className={s.cardInner}>
          <div className={s.cardBody}>
            <div className={s.cardTitle}>{movie.title}</div>
            <div className={s.cardDirector}>{directors}</div>
            <div>
              <ul className={s.cardIcons}>
                <li className={s.cardIconPair}>
                  <Calendar size={16} />
                  <span className={s.cardSubText}>2013</span>
                </li>
                <li className={s.cardIconPair}>
                  <Clock size={16} />
                  <span className={s.cardSubText}>{duration}</span>
                </li>
                <li className={s.cardIconPair}>
                  <Tooltip
                    label={`${rating.toString()}`}
                    position="top"
                    color="gray"
                  >
                    <Rating value={rating} fractions={10} readOnly />
                  </Tooltip>
                </li>
              </ul>
            </div>
            <div>
              <Group className={s.cardGenres}>
                {movie.genres.map((genre) => (
                  <Badge color="gray" variant="outline" key={genre.id}>
                    {genre.name}
                  </Badge>
                ))}
              </Group>
            </div>
            <div className={s.cardSlug}>{movie.overview}</div>
            <Group className={s.cardActors}>
              <span>{actors}</span>
            </Group>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default MovieDetails;
