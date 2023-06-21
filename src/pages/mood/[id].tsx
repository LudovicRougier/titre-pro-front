/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Suggestions from "@/presentation/components/suggestions";
import { useViewModel } from "@/presentation/viewModel/moodDetails";
import { Center, Container, Text, Blockquote } from "@mantine/core";
import { motion } from "framer-motion";

import s from "../style.module.css";

interface MoodDetailsProps {
  moodId: string;
}

const MoodDetails: NextPage<MoodDetailsProps> = ({ moodId }) => {
  const { moodDetails } = useViewModel(moodId);

  if (!moodDetails) return null;

  return (
    <Container className={s.homepage}>
      <Center className={s.homepageContent}>
        {/* <Container style={{ position: "absolute", top: "25%" }}> */}
        {/* <Blob /> */}
        {/* </Container> */}
        <motion.div
          className={s.emotionTextInputMotion}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { duration: 1 },
            layout: { duration: 1 },
          }}
        >
          <Blockquote cite="">
            {moodDetails.userInput ??
              "Life is like an npm install – you never know what you are going to get."}
          </Blockquote>
        </motion.div>
        <>
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
            className={s.emotionSuggestionstMotion}
            transition={{
              y: { duration: 1 },
              opacity: { duration: 1 },
              layout: { duration: 1 },
            }}
          >
            <Suggestions
              movies={[
                ...moodDetails.moviesRelatedToEmotions,
                ...moodDetails.moviesRelatedToTopic,
              ]}
              mainEmotion={moodDetails.mainEmotion}
              subEmotion={moodDetails.subEmotion}
            />
          </motion.div>
        </>
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
