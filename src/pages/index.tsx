import React from "react";
import type { NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/home";
import { Button, Center, Container, TextInput } from "@mantine/core";
import { ArrowRight2, Refresh } from "iconsax-react";

const Home: NextPage = () => {
  const {
    handleChangeInput,
    getRecommandations,
    recommandations,
    error,
    userInput,
    resetInput,
  } = useViewModel();

  return (
    <Container>
      <Center
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-10vh",
        }}
      >
        <TextInput
          placeholder="How do you feel today ?"
          variant="filled"
          error={error}
          size="md"
          radius="md"
          onChange={handleChangeInput}
          value={userInput}
          style={{
            width: "100%",
          }}
        />

        <Button
          variant="light"
          radius="md"
          size="md"
          ml={12}
          onClick={error ? resetInput : getRecommandations}
        >
          {error ? (
            <Refresh size={18} />
          ) : (
            <ArrowRight2 size={18} onClick={resetInput} />
          )}
        </Button>
        {JSON.stringify(recommandations)}
      </Center>
    </Container>
  );
};

export default Home;
