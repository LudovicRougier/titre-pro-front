import React from "react";
import type { NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/moodHistory";

const MoodHistory: NextPage = () => {
  const { data } = useViewModel();

  return (
    <>
      <div>Hello MoodHistory</div>
      {JSON.stringify(data)}
    </>
  );
};

export default MoodHistory;
