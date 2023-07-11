import React from "react";
import type { NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/home";
import { Button, Center, Loader, TextInput } from "@mantine/core";
import { ArrowRight2, Refresh } from "iconsax-react";
import { motion } from "framer-motion";
import Blob from "@/presentation/components/blob";
import { waitingSentences } from "@/data/static/waitingSentences";
import { errorSentences } from "@/data/static/errorSentences";
import { TypingAnimation } from "@/presentation/components/typeAnimation";
import Suggestions from "@/presentation/components/suggestions";
import { removeDuplicates } from "@/utils/removeDuplicates";

import LightAnimationGroup from "@/presentation/components/animatedLightGroup";
import s from "./style.module.css";

const Home: NextPage = () => {
  const {
    handleChangeInput,
    getRecommandations,
    recommandations,
    isLoading,
    error,
    resetInput,
    textInputRef,
  } = useViewModel();

  return (
    <div className={s.homepage}>
      <Center className={s.homepageContent}>
        {!recommandations && (
          <motion.div
            layout
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1 },
              layout: { duration: 1 },
            }}
            style={{ position: "absolute", top: "20%" }}
          >
            <Blob blur={0} opacity={1} size={200} emotionColor="#ffffff" />
          </motion.div>
        )}
        <motion.div
          className={s.emotionTextInputMotion}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { duration: 1 },
          }}
        >
          <TextInput
            ref={textInputRef}
            placeholder="How do you feel today ?"
            variant="filled"
            error={error}
            size="md"
            radius="md"
            onChange={handleChangeInput}
            className={s.emotionInput}
            data-test="emotion-input"
            rightSection={
              isLoading ? <Loader size="xs" /> : !error && <ArrowRight2 />
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getRecommandations();
              }
            }}
          />
        </motion.div>
        {isLoading && (
          <TypingAnimation
            sentences={waitingSentences.en}
            data-test="emotion-typing-animation"
          />
        )}
        {error && (
          <TypingAnimation
            sentences={[
              errorSentences.en[
                Math.floor(Math.random() * (errorSentences.en.length - 1))
              ],
            ]}
            color="#DC0800"
            data-test="emotion-typing-animation"
          />
        )}
        {recommandations && (
          <>
            <LightAnimationGroup recommendations={recommandations} />
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
              <TypingAnimation
                sentences={[recommandations.message]}
                data-test="emotion-recommendations-message"
              />
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
                movies={removeDuplicates(
                  [
                    ...recommandations.moviesRelatedToEmotions,
                    ...recommandations.moviesRelatedToTopic,
                  ],
                  "id"
                )}
                mainEmotion={recommandations.mainEmotion}
                subEmotion={recommandations.subEmotion}
              />
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
            data-test="emotion-refresh"
          >
            <Refresh size={18} />
          </Button>
        )}
      </Center>
    </div>
  );
};

export default Home;
