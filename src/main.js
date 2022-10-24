import "./index.css";
import { Timer } from "./timer";
import { secondsToTimePresentation } from "./utils/time-presentation";

const timer = new Timer();

const timerElement = document.getElementById("timer");
timerElement.innerText = secondsToTimePresentation(timer.timeInSeconds);

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => timer.startCounting());

const stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", () => timer.stopCounting());

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", () => timer.restartCounter());
