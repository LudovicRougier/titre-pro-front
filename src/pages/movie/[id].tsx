import React from "react";
import type { GetServerSideProps, NextPage } from "next";

interface MovieDetailsProps {
  movieId: string;
}

const MovieDetails: NextPage<MovieDetailsProps> = ({ movieId }) => {
  return <div>Hello MovieDetails for movie id: {movieId}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: { movieId: id },
  };
};

export default MovieDetails;
