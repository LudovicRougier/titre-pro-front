import { addNumberAfterSubstring } from "@/utils/addNumberAfterSubstring";
import { FC } from "react";

import { TypeAnimation } from "react-type-animation";

interface TypingAnimationProps {
  sentences: string[];
}

export const TypingAnimation: FC<TypingAnimationProps> = ({ sentences }) => {
  const preparedSentences = addNumberAfterSubstring(sentences, 1000);

  return (
    <TypeAnimation
      sequence={preparedSentences}
      speed={{ type: "keyStrokeDelayInMs", value: 40 }}
      deletionSpeed={90}
      wrapper="span"
      cursor
      repeat={Infinity}
      style={{ fontSize: "1em", display: "inline-block", marginTop: "1em" }}
    />
  );
};
