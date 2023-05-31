import { MoodModel } from "@/domain/model/Mood";
import { useAppQuery } from "@/lib/react-query/hooks";
import { useMoodDependencies } from "@/shared/contexts/dependencies/mood";

export const useViewModel = () => {
  const { fetchMoodRecommandations } = useMoodDependencies();

  const { data } = useAppQuery<MoodModel | null>(
    ["mood"],
    () => fetchMoodRecommandations.invoke("Wesh salut ou quoi!"),
    { staleTime: 1000 * 60 * 1 }
  );

  return { fetchMoodRecommandations, data };
};
