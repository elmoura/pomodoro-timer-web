import { minutesToSeconds, secondsToMinutes } from "./time-convert";

/**
 * @param {number} seconds
 * @returns {string}
 */
export const secondsToTimePresentation = (timeInSeconds) => {
  const minutes = parseInt(secondsToMinutes(timeInSeconds));
  const minutesPresentation = minutes.toString().padStart(2, "0");

  const remainingSeconds = timeInSeconds - minutesToSeconds(minutes);
  const secondsPresentation = remainingSeconds.toString().padStart(2, "0");

  return `${minutesPresentation}:${secondsPresentation}`;
};

export const presentationTimeToSeconds = (timeString) => {
  const [minutes, seconds] = timeString.split(":");

  return minutesToSeconds(parseInt(minutes)) + parseInt(seconds);
};
