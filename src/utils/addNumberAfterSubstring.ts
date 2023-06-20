/* eslint-disable @typescript-eslint/no-explicit-any */
export const addNumberAfterSubstring = (
  strings: string[],
  waitingTime: number
): any[] => {
  const result: any[] = [];

  // Mélange les strings de manière aléatoire
  const shuffledStrings = strings.sort(() => Math.random() - 0.5);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < shuffledStrings.length; i++) {
    // eslint-disable-next-line security/detect-object-injection
    const currentString = shuffledStrings[i];
    const previousString = shuffledStrings[i - 1];

    if (i === 0 || !currentString.startsWith(previousString)) {
      result.push(currentString);
      result.push(waitingTime);
    }
  }

  return result;
};
