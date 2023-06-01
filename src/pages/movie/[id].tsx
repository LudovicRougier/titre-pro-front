import React from "react";
import type { GetServerSideProps, NextPage } from "next";

import MovieDetailsComponent from "@/presentation/components/movieDetails";

interface MovieDetailsProps {
  movieId: string;
  actors: {
    id: number;
    name: string;
  }[];
}

const MovieDetails: NextPage<MovieDetailsProps> = () => {
  return <MovieDetailsComponent />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: { movieId: id },
  };
};

export default MovieDetails;
