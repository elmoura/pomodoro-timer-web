import "./index.css";
import { Timer } from "./timer";
import {
  presentationTimeToSeconds,
  secondsToTimePresentation,
} from "./utils/time-presentation";
import IMask from "imask";

const timer = new Timer(25);

const timerElement = document.getElementById("timer");
timerElement.innerText = secondsToTimePresentation(timer.timeInSeconds);
const maskedTimer = IMask(timerElement, { mask: "00:00" });

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => timer.startCounting());

const stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", () => timer.stopCounting());

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", () => timer.restartCounter());

let currentTime;
const editButton = document.getElementById("edit-button");
editButton.addEventListener("click", () => {
  timer.stopCounting();

  currentTime = timerElement.innerText;

  timerElement.setAttribute("contenteditable", true);
  timerElement.focus();
});

timerElement.addEventListener("blur", () => {
  timerElement.style.border = "none";

  const maskedValue = maskedTimer.value;

  console.log({ currentTime, maskedValue });

  if (maskedValue === currentTime) return;

  const timeInSeconds = presentationTimeToSeconds(maskedValue);
  timer.setTime(timeInSeconds);

  timerElement.setAttribute("contenteditable", false);
  currentTime = "";
});
