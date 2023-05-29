import { useAuthDependencies } from "@/shared/contexts/dependencies/auth";
import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <>
      {status.toString()}
      {session && (
        <div data-test="authentificated">
          Currently logged in : {session.user?.email} - {session.user?.token}
        </div>
      )}
      <div>Hello Index</div>
      {session?.user ? (
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      ) : (
        <button type="button" onClick={() => signIn()} data-test="sign-in">
          Sign in
        </button>
      )}
    </>
  );
};

export default Home;
