import { useAppQuery } from "@/lib/react-query/hooks";
import { useMovieDependencies } from "@/shared/contexts/dependencies/movie";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const { getMovieDetailsUseCase } = useMovieDependencies();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, refetch } = useAppQuery<any>(
    ["todos"],
    () => getMovieDetailsUseCase.invoke(),
    {
      cacheTime: 5 * 1000 * 60,
      staleTime: 10 * 1000 * 60,
    }
  );

  return (
    <>
      {status.toString()}
      {session && <div>Currently logged in : {session.user?.email}</div>}
      <div data-test="homepage-title">Hello Home</div>
      <button type="button" onClick={() => refetch()}>
        Click me to load data
      </button>
      {data &&
        data.todos.map((item: any, index: number) => (
          <div key={index as number}>{item.description}</div>
        ))}
    </>
  );
};

export default Home;
