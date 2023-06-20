import React from "react";
import type { GetServerSideProps, NextPage } from "next";

import MovieDetailsComponent from "@/presentation/components/movieDetails";
import { useViewModel } from "@/presentation/viewModel/movie";

interface MovieDetailsProps {
  movieId: string;
}

const MovieDetails: NextPage<MovieDetailsProps> = ({ movieId }) => {
  const { movie } = useViewModel(movieId);

  return <MovieDetailsComponent movie={movie} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: { movieId: id },
  };
};

export default MovieDetails;
