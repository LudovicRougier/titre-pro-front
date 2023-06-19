import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/moodDetails";

interface MoodDetailsProps {
  moodId: string;
}

const MoodDetails: NextPage<MoodDetailsProps> = ({ moodId }) => {
  const id = parseInt(moodId, 10);
  const { moodDetails } = useViewModel(id);

  return (
    <>
      <div>Hello MoodDetails for mood id: {moodId}</div>
      <div>{JSON.stringify(moodDetails)}</div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: { moodId: id },
  };
};

export default MoodDetails;
