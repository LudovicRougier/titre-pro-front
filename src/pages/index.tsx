/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/home";
import {
  Button,
  Center,
  Container,
  Loader,
  Text,
  TextInput,
} from "@mantine/core";
import { ArrowRight2, Refresh } from "iconsax-react";
// import Blob from "@/presentation/components/blob";
// import Suggestions from "@/presentation/components/suggestions";

const Home: NextPage = () => {
  const {
    handleChangeInput,
    getRecommandations,
    recommandations,
    isLoading,
    error,
    resetInput,
  } = useViewModel();

  return (
    <Container
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Center
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <Container style={{ position: "absolute", top: "25%" }}>
          {/* <Blob /> */}
        </Container>
        <TextInput
          placeholder="How do you feel today ?"
          variant="filled"
          error={error}
          size="md"
          radius="md"
          onChange={handleChangeInput}
          rightSection={
            isLoading ? <Loader size="xs" /> : !error && <ArrowRight2 />
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") getRecommandations();
          }}
          style={{
            width: "100%",
            transition: "all 0.8s ease",
          }}
        />
        {/* DO NOT UNCOMMENT <TEXT> AND <SUGGESTIONS /> BELOW */}
        {/* <Text>
          "You seem to have had a very bad day at work. Here are some movies
          about people hating their jobs."
        </Text>
        <Suggestions movies /> */}
        {error && (
          <Button
            variant="light"
            radius="md"
            size="md"
            ml={12}
            onClick={resetInput}
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
