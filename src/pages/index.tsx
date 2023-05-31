import React from "react";
import type { NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/home";

const Home: NextPage = () => {
  const { session, status } = useViewModel();

  return (
    <>
      <div>Hello Index</div>
      {session && (
        <div data-test="authentificated">
          Currently {status} with : {session.user.email}
        </div>
      )}
    </>
  );
};

export default Home;
