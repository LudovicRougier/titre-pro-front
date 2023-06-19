/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/home";
import { Button, Center, Container, Loader, TextInput } from "@mantine/core";
import { ArrowRight2, Refresh } from "iconsax-react";
import { motion } from "framer-motion";
// import Blob from "@/presentation/components/blob";
import Suggestions from "@/presentation/components/suggestions";

import s from "./style.module.css";

const Home: NextPage = () => {
  const {
    handleChangeInput,
    getRecommandations,
    recommandations,
    isLoading,
    error,
    active,
    setActive,
    resetInput,
  } = useViewModel();

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
          <TextInput
            placeholder="How do you feel today ?"
            variant="filled"
            error={error}
            size="md"
            radius="md"
            onChange={handleChangeInput}
            className={s.emotionInput}
            rightSection={
              isLoading ? <Loader size="xs" /> : !error && <ArrowRight2 />
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTimeout(() => setActive(true), 2000);
                getRecommandations();
              }
            }}
          />
        </motion.div>
        {active && (
          <>
            <motion.div
              layout
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                y: { duration: 1 },
                opacity: { duration: 1 },
                layout: { duration: 1 },
              }}
            >
              <Text>
                "You seem to have had a very bad day at work. Here are some
                movies about people hating their jobs."
              </Text>
            </motion.div>
            <motion.div
              layout
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 0 }}
              className={s.emotionSuggestionstMotion}
              transition={{
                y: { duration: 1 },
                opacity: { duration: 1 },
                layout: { duration: 1 },
              }}
            >
              <Suggestions movies />
            </motion.div>
          </>
        )}
        {error && (
          <Button
            variant="light"
            radius="md"
            size="md"
            ml={12}
            onClick={resetInput}
            color="gray"
          >
            <Refresh size={18} />
          </Button>
        )}
        {JSON.stringify(recommandations)}
      </Center>
    </Container>
  );
};

export default Home;
