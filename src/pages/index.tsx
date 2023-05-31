import React from "react";
import type { NextPage } from "next";
import { useViewModel } from "@/presentation/viewModel/home";

const Home: NextPage = () => {
  const { session, status, handleLogin, handleLogout } = useViewModel();

  return (
    <>
      {session && (
        <div data-test="authentificated">
          Currently {status} with : {session.user.email} - {session.user?.token}
        </div>
      )}
      <div>Hello Index</div>
      {session?.user ? (
        <button type="button" onClick={handleLogout}>
          Sign out
        </button>
      ) : (
        <button type="button" onClick={handleLogin} data-test="sign-in">
          Sign in
        </button>
      )}
    </>
  );
};

export default Home;
