import React from "react";
import type { NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/moodHistory";
import { Timeline, Container } from "@mantine/core";
import { MoodCard } from "@/presentation/components/moodCard";

const moods = [
  {
    id: 1,
    date: "2021-10-10",
    userInput: "I'm happy because I'm alive",
    mainEmotion: {
      name: "happy",
      color: "yellow",
    },
    movies: [
      {
        id: 1,
        title: "The Matrix",
        backdropPath:
          "https://film-grab.com/wp-content/uploads/2017/01/thematrixrevolutions052.jpg",
      },
    ],
  },
  {
    id: 2,
    date: "2022-10-10",
    userInput: "I'm sad because I'm alive",
    mainEmotion: {
      name: "anger",
      color: "red",
    },
    movies: [
      {
        id: 2,
        title: "Amelie Poulain",
        backdropPath: "https://filmgrab.files.wordpress.com/2012/10/5136.jpg",
      },
    ],
  },
];

const MoodHistory: NextPage = () => {
  const { data } = useViewModel();

  return (
    <Container>
      {/* <div>Hello MoodHistory</div> */}

      <Timeline active={4} bulletSize={12} lineWidth={2} color="gray">
        {moods.map((mood) => {
          return (
            <Timeline.Item key={mood.id}>
              <MoodCard mood={mood} />
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Container>
  );
};

export default MoodHistory;
