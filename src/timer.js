import { minutesToSeconds } from "./utils/time-convert";
import { secondsToTimePresentation } from "./utils/time-presentation";

const DEFAULT_TIME_IN_MINUTES = 25;

export const timerStates = {
  stopped: "STOPPED",
  playing: "PLAYING",
};

export class Timer {
  constructor(time = DEFAULT_TIME_IN_MINUTES) {
    this.timeInSeconds = minutesToSeconds(time);
    this.initialTime = minutesToSeconds(time);
    this.state = timerStates.stopped;
  }

  startCounting = () => {
    if (this.state === timerStates.playing) return;

    this.interval = setInterval(this.decrementTime, 1000);
    this.state = timerStates.playing;
  };

  stopCounting = () => {
    clearInterval(this.interval);
    this.state = timerStates.stopped;
  };

  restartCounter = () => {
    this.stopCounting();
    this.timeInSeconds = this.initialTime;

    document.getElementById("timer").innerText = secondsToTimePresentation(
      this.timeInSeconds
    );
  };

  decrementTime = () => {
    this.timeInSeconds = this.timeInSeconds - 1;

    if (this.timeInSeconds === 0) {
      this.stopCounting();
    }

    console.log("timer: ", this.timeInSeconds);

    document.getElementById("timer").innerText = secondsToTimePresentation(
      this.timeInSeconds
    );
  };

  setTime = (timeInSeconds) => {
    if (!timeInSeconds) {
      throw new Error('You must provide a "time" value to Timer.setTime()');
    }

    this.initialTime = timeInSeconds;
    this.timeInSeconds = timeInSeconds;
  };
}
