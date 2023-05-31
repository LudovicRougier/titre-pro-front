import { useRouter } from "next/router";

export const useViewModel = () => {
  const { query } = useRouter();

  return { movieId: query.id };
};
