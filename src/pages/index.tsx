import React from "react";
import type { NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/home";
import { Button, Center, Container, Loader, TextInput } from "@mantine/core";
import { ArrowRight2, Refresh } from "iconsax-react";

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
    <Container>
      <Center
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-5vh",
          transition: "all 0.8s easeInOut",
        }}
      >
        <TextInput
          placeholder="How do you feel today ?"
          variant="filled"
          error={error}
          size="md"
          radius="md"
          onChange={handleChangeInput}
          rightSection={isLoading ? <Loader size="xs" /> : <ArrowRight2 />}
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
