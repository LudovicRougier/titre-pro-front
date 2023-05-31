import React from "react";
import type { GetServerSideProps, NextPage } from "next";

interface MoodDetailsProps {
  moodId: string;
}

const MoodDetails: NextPage<MoodDetailsProps> = ({ moodId }) => {
  return <div>Hello MoodDetails for mood id: {moodId}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: { moodId: id },
  };
};

export default MoodDetails;
