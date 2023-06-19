import { MoodModel } from "@/domain/model/Mood";
import { useAppQuery } from "@/lib/react-query/hooks";
import { useMoodDependencies } from "@/shared/contexts/dependencies/mood";
import { useCallback } from "react";

export const useViewModel = (id: number) => {
  const { getMoodDetails } = useMoodDependencies();

  const queryFn = useCallback(
    () => getMoodDetails.invoke(id),
    [getMoodDetails, id]
  );

  const { data: moodDetails } = useAppQuery<MoodModel | null>(
    ["mood", id],
    queryFn,
    {
      staleTime: 1000 * 60 * 1,
      enabled: !!id,
      retry: 1,
    }
  );

  return { moodDetails };
};
