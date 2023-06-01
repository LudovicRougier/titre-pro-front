/* eslint-disable no-console */
import { useState } from "react";
import { useAppMutation } from "@/lib/react-query/hooks";
import { useMoodDependencies } from "@/shared/contexts/dependencies/mood";
import { MoodModel } from "@/domain/model/Mood";

export const useViewModel = () => {
  const { fetchMoodRecommandations } = useMoodDependencies();

  const [userInput, setUserInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const resetInput = () => {
    setError(false);
    setUserInput("");
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(false);
    setUserInput(e.target.value);
  };

  const { mutate, data: recommandations } = useAppMutation<MoodModel | null>(
    () => fetchMoodRecommandations.invoke(userInput),
    {
      onError: () => setError(true),
    }
  );

  const getRecommandations = () => mutate();

  return {
    handleChangeInput,
    getRecommandations,
    recommandations,
    error,
    userInput,
    resetInput,
  };
};
