import React from "react";
import { LOCALE } from "@/shared/enums/locale";
import { convertDurationToString } from "@/utils/convertDurationToString";
import {
  Avatar,
  BackgroundImage,
  Badge,
  Group,
  Rating,
  Tooltip,
} from "@mantine/core";
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
  const flatrateWatchProviders = movie.watchProviders.flatrate;
  const rentWatchProviders = movie.watchProviders.rent;
  const buyWatchProviders = movie.watchProviders.buy;

  return (
    <div className={s.movieDetails}>
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
                  <Badge
                    key={genre.id}
                    color="gray"
                    // variant="outline"
                  >
                    {genre.name}
                  </Badge>
                ))}
              </Group>
            </div>
            <div className={s.cardSlug}>{movie.overview}</div>
            <Group className={s.cardActors}>
              <span>{actors}</span>
            </Group>
            {/* BUY WATCH PROVIDERS */}
            <Group mb="md">
              {buyWatchProviders &&
                buyWatchProviders.map((provider) => (
                  <Badge
                    key={provider.providerId}
                    pl={0}
                    size="md"
                    color="gray"
                    radius="md"
                    leftSection={
                      <Avatar
                        src={`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}${provider.logoPath}`}
                        alt="it's me"
                      />
                    }
                  >
                    {LOCALE.BUY_ON} {provider.providerName}
                  </Badge>
                ))}
            </Group>

            {/* RENT WATCH PROVIDERS */}
            <Group mb="md">
              {rentWatchProviders &&
                rentWatchProviders.map((provider) => (
                  <Badge
                    key={provider.providerId}
                    pl={0}
                    size="md"
                    color="gray"
                    radius="md"
                    leftSection={
                      <Avatar
                        src={`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}${provider.logoPath}`}
                        alt="it's me"
                      />
                    }
                  >
                    {LOCALE.RENT_ON} {provider.providerName}
                  </Badge>
                ))}
            </Group>

            {/* STREAM WATCH PROVIDERS */}
            <Group className={s.cardWatchProviders}>
              {flatrateWatchProviders &&
                flatrateWatchProviders.map((provider) => (
                  <Badge
                    key={provider.providerId}
                    pl={0}
                    size="md"
                    color="gray"
                    radius="md"
                    leftSection={
                      <Avatar
                        src={`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}${provider.logoPath}`}
                        alt="it's me"
                      />
                    }
                  >
                    {LOCALE.STREAM_ON} {provider.providerName}
                  </Badge>
                ))}
            </Group>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default MovieDetails;
