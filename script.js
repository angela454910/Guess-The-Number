"use strict";

let upper = 20;
let secretNumber = Math.trunc(Math.random() * upper) + 1;
// console.log(secretNumber);
let score = 20;
let highScore = 0;
const scoreDisplay = document.querySelector(".score");
// const message = document.querySelector(".message");
const number = document.querySelector(".number");
const body = document.querySelector("body");

// refactoring
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function (e) {
  const highScoreDisplay = document.querySelector(".highscore");
  let guess = Number(document.querySelector(".guess").value);

  // Handle empty input
  if (!guess) {
    displayMessage("😢No Input Number");

    // Win condition
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    displayMessage("🎉Correct Number");
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    // False condition
  } else {
    if (guess < 0 || guess > upper) {
      displayMessage("🙅‍♀️🙅‍♀️Your input is out of range");
    } else {
      if (score > 1) {
        score--;
        displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      } else {
        score = 0;
        displayMessage("💥You lost the game");
      }
      scoreDisplay.textContent = score;
    }
  }
});

function reset() {
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * upper) + 1;
  //   console.log(secretNumber);
  score = 20;
  scoreDisplay.textContent = score;
  displayMessage("Start guess...");
  number.textContent = "?";
  document.querySelector(".guess").value = "";
}

document.querySelector(".again").addEventListener("click", function () {
  reset();
});

document.querySelector(".change").addEventListener("click", function () {
  upper = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(".upper").textContent = upper;
  secretNumber = Math.trunc(Math.random() * upper) + 1;
  //   console.log(secretNumber);
  //   reset();
});
