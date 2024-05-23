const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const startButton = document.querySelector("#start-btn");
const toast = document.querySelector(".toast");
const closetoast = document.querySelector(".close-toast");
const toastMessage = document.querySelector("#toast-message");
const timerElement = document.querySelector("#time");

// ITERATION 1: Add event listener to the start button
startButton.addEventListener("click", () => {
  startCountdown();
});

closetoast.addEventListener("click", () => {
  clearInterval(timer);
  toast.classList.remove("show");
  timerElement.innerText = DURATION;
  startButton.disabled = false;
});

function showToast(message) {
  toastMessage.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function startCountdown() {
  remainingTime = DURATION;

  timer = setInterval(() => {
    remainingTime -= 1;
    if (remainingTime >= 0) {
      startButton.disabled = true;
      timerElement.innerText = remainingTime;
      if (remainingTime === DURATION - 1) {
        showToast("⏰ Final countdown! ⏰");
      } else if (remainingTime === DURATION / 2) {
        showToast("Start the engines! 💥");
      }
    } else if (remainingTime <= 0) {
      timerElement.innerText = DURATION;
      startButton.disabled = false;
      clearInterval(timer);
    } else {
      showToast("Lift off! 🚀");
      startButton.disabled = false;
      clearInterval(timer);
    }
  }, 1000);
}
