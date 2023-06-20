export const convertDurationToString = (durationInMinutes: number): string => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  const hoursString = hours < 10 ? `0${hours}` : hours.toString();
  const minutesString = minutes < 10 ? `0${minutes}` : minutes.toString();

  return `${hoursString}h${minutesString}`;
};
