import { MoodModel } from "@/domain/model/Mood";
import { useAppQuery } from "@/lib/react-query/hooks";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";
import { RootState } from "@/lib/redux-toolkit/store";
import { useMoodDependencies } from "@/shared/contexts/dependencies/mood";
import { useCallback } from "react";

export const useViewModel = (userId: number) => {
  const { retrieveMoodHistoryList } = useMoodDependencies();
  const moodHistory = useAppSelector((state: RootState) => state.MOOD.moods);

  const queryFn = useCallback(
    () => retrieveMoodHistoryList.invoke(userId),
    [retrieveMoodHistoryList, userId]
  );

  const { isLoading } = useAppQuery<MoodModel[] | null>(
    ["mood-history", userId],
    queryFn,
    {
      staleTime: 1000 * 60 * 3,
      refetchOnWindowFocus: false,
      enabled: !!userId,
      retry: 1,
    }
  );

  return { moodHistory, isLoading };
};
