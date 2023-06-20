import { MoodModel } from "@/domain/model/Mood";
import { useAppQuery } from "@/lib/react-query/hooks";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";
import { RootState } from "@/lib/redux-toolkit/store";
import { useMoodDependencies } from "@/shared/contexts/dependencies/mood";
import { useCallback } from "react";

export const useViewModel = (id: string) => {
  const { getMoodDetails } = useMoodDependencies();

  const moodFromStore = useAppSelector(
    (state: RootState) => state.MOOD.moods
  ).find((mood) => mood.id === id);

  const queryFn = useCallback(
    () => getMoodDetails.invoke(id),
    [getMoodDetails, id]
  );

  const { data: moodDetailsFromAPI } = useAppQuery<MoodModel | null>(
    ["mood", id],
    queryFn,
    {
      staleTime: 1000 * 60 * 1,
      enabled: !!id,
      retry: 1,
    }
  );

  const moodDetails = moodFromStore ?? moodDetailsFromAPI;

  return { moodDetails };
};
