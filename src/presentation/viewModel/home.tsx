import { useCallback, useRef, useState } from "react";
import { useAppMutation } from "@/lib/react-query/hooks";
import { useMoodDependencies } from "@/shared/contexts/dependencies/mood";
import { MoodModel } from "@/domain/model/Mood";
import { useDebouncedState } from "@mantine/hooks";

export const useViewModel = () => {
  const { fetchMoodRecommandations } = useMoodDependencies();
  const [userInput, setUserInput] = useDebouncedState("", 50);
  const [error, setError] = useState<boolean>(false);
  const textInputRef = useRef<HTMLInputElement>(null);

  const resetInput = () => {
    setError(false);
    setUserInput("");
    if (textInputRef.current) {
      textInputRef.current.value = "";
      textInputRef.current.focus();
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(false);
    setUserInput(e.target.value);
  };

  const mutationFn = useCallback(
    () => fetchMoodRecommandations.invoke(userInput),
    [fetchMoodRecommandations, userInput]
  );

  const {
    mutate,
    data: recommandations,
    isLoading,
  } = useAppMutation<MoodModel | null>(mutationFn, {
    onError: () => setError(true),
  });

  const getRecommandations = () => mutate();

  return {
    handleChangeInput,
    getRecommandations,
    recommandations,
    isLoading,
    error,
    userInput,
    resetInput,
    textInputRef,
  };
};
