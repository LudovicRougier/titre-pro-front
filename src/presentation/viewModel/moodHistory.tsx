import { MoodModel } from "@/domain/model/Mood";
import { useAppQuery } from "@/lib/react-query/hooks";
import { useMoodDependencies } from "@/shared/contexts/dependencies/mood";
import { useCallback } from "react";

export const useViewModel = (userId: number) => {
  const { retrieveMoodHistoryList } = useMoodDependencies();

  const queryFn = useCallback(
    () => retrieveMoodHistoryList.invoke(userId),
    [retrieveMoodHistoryList, userId]
  );

  const { data: moodHistory } = useAppQuery<MoodModel[] | null>(
    ["mood-history", userId],
    queryFn,
    {
      staleTime: 1000 * 60 * 1,
      enabled: !!userId,
      retry: 1,
    }
  );

  return { moodHistory };
};
