import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <>
      {status.toString()}
      {session && <div>Currently logged in : {session.user?.email}</div>}
      <div data-test="homepage-title">Hello Home</div>
      <a href="/login">Click me to sign in</a>
    </>
  );
};

export default Home;
