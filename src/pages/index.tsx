import React from "react";
import type { NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/home";
import { Button, Center, Container, Loader, TextInput } from "@mantine/core";
import { ArrowRight2, Refresh } from "iconsax-react";
import Blob from "@/presentation/components/blob";

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
      <Center style={{ width: "100%" }}>
        <Container style={{ position: "absolute", top: "25%" }}>
          <Blob />
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
