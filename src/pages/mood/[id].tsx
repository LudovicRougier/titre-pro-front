/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Suggestions from "@/presentation/components/suggestions";
import { useViewModel } from "@/presentation/viewModel/moodDetails";
import { Center, Container, Text, Blockquote } from "@mantine/core";
import { motion } from "framer-motion";
import { removeDuplicates } from "@/utils/removeDuplicates";
import LightAnimation from "@/presentation/components/animatedLight";
import { useViewportSize } from "@mantine/hooks";

import s from "./style.module.css";

interface MoodDetailsProps {
  moodId: string;
}

const MoodDetails: NextPage<MoodDetailsProps> = ({ moodId }) => {
  const { moodDetails } = useViewModel(moodId);

  const { height, width } = useViewportSize();

  if (!moodDetails) return null;

  const elements = [
    {
      id: 1,
      color: "purple",
      width: 400,
      height: 400,
      opacity: 0.25,
      blur: 100,
    },
    {
      id: 2,
      color: "purple",
      width: 350,
      height: 350,
      opacity: 0.25,
      blur: 100,
    },
    { id: 3, color: "blue", width: 600, height: 600, opacity: 0.25, blur: 100 },
  ];

  return (
    <Container className={s.mood}>
      <Center className={s.moodContent}>
        {elements.map((element) => (
          <LightAnimation
            key={element.id}
            element={element}
            containerHeight={height}
            containerWidth={width}
          />
        ))}

        <motion.div
          layout
          initial={{ opacity: 0, y: 325 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            y: { duration: 1 },
            opacity: { duration: 1 },
            layout: { duration: 1 },
          }}
        >
          <Blockquote cite={`${moodDetails.date}`}>
            {moodDetails.userInput ??
              "Life is like an npm install – you never know what you are going to get."}
          </Blockquote>
        </motion.div>
        <motion.div
          layout
          initial={{ opacity: 0, y: 325 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            y: { duration: 1 },
            opacity: { duration: 1 },
            layout: { duration: 1 },
          }}
        >
          <Text>{moodDetails.message}</Text>
        </motion.div>
        <motion.div
          layout
          initial={{ opacity: 0, y: 325 }}
          animate={{ opacity: 1, y: 0 }}
          className={s.moodContentSuggestion}
          transition={{
            y: { duration: 1 },
            opacity: { duration: 1 },
            layout: { duration: 1 },
          }}
        >
          <Suggestions
            movies={removeDuplicates(
              [
                ...moodDetails.moviesRelatedToEmotions,
                ...moodDetails.moviesRelatedToTopic,
              ],
              "id"
            )}
            mainEmotion={moodDetails.mainEmotion}
            subEmotion={moodDetails.subEmotion}
          />
        </motion.div>
      </Center>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: { moodId: id },
  };
};

export default MoodDetails;
