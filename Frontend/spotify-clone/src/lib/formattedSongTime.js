export const formattingTimeFunc = (time) => {
  if (!time) {
    return "0:00";
  }
  const newTimeInSeconds = time / 60;
  const formattedTimeArray = `${newTimeInSeconds}`.split(".");
  const minutes = formattedTimeArray[0];
  const seconds = formattedTimeArray[1].slice(0, 2);

  return `${minutes}:${seconds}`;
};
