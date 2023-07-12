/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Suggestions from "@/presentation/components/suggestions";
import { useViewModel } from "@/presentation/viewModel/moodDetails";
import { Center, Container, Text, Blockquote } from "@mantine/core";
import { motion } from "framer-motion";
import { removeDuplicates } from "@/utils/removeDuplicates";

import LightAnimationGroup from "@/presentation/components/animatedLightGroup";
import s from "./style.module.css";

interface MoodDetailsProps {
  moodId: string;
}

const MoodDetails: NextPage<MoodDetailsProps> = ({ moodId }) => {
  const { moodDetails } = useViewModel(moodId);

  if (!moodDetails) return null;

  return (
    <div className={s.mood}>
      <Center className={s.moodContent}>
        <LightAnimationGroup recommendations={moodDetails} />
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
                ...moodDetails.moviesRelatedToTopic,
                ...moodDetails.moviesRelatedToEmotions,
              ],
              "id"
            )}
            mainEmotion={moodDetails.mainEmotion}
            subEmotion={moodDetails.subEmotion}
          />
        </motion.div>
      </Center>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: { moodId: id },
  };
};

export default MoodDetails;
