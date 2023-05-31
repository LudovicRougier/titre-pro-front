import React from "react";
import type { NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/home";
import { Container } from "@mantine/core";

const Home: NextPage = () => {
  const { session, status } = useViewModel();

  return (
    <Container>
      <div>Hello Index</div>
      {session && (
        <div data-test="authentificated">
          Currently {status} with : {session.user.email}
        </div>
      )}
    </Container>
  );
};

export default Home;
