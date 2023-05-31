import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import {
  Card,
  Container,
  Image,
  Text,
  Space,
  Badge,
  Button,
  Group,
  Grid,
} from "@mantine/core";

interface MovieDetailsProps {
  movieId: string;
}

const MovieDetails: NextPage<MovieDetailsProps> = ({ movieId }) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ height: "500px" }}
    >
      <Card.Section>
        <Text style={{ fontSize: "3rem" }}>Movie Title</Text>
        <Space />
        <Text style={{ fontSize: "1rem" }}>Director</Text>s
        <Space />
        <Text>
          Synopsis of the movie, some description about it to engage user to
          click on the card to see more details about it.
        </Text>
      </Card.Section>
      <Card.Section
        style={{
          height: "100%",
          width: "900px",
          position: "absolute",
          top: "0",
          right: "0",
          backgroundImage:
            "linear-gradient(to left, transparent, #25262b 85%), url(https://filmgrab.files.wordpress.com/2014/07/5150.jpg)",
          backgroundSize: "cover",
          border: "none",
        }}
      />
    </Card>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: { movieId: id },
  };
};

export default MovieDetails;
