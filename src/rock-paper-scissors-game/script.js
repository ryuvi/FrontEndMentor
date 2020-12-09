const buttons = document.querySelectorAll(".pick");
const scoreEl = document.getElementById("score");
const main = document.getElementById("main");
const selection = document.getElementById("selection");
const reset = document.getElementById("reset");
const user_select = document.getElementById("user_select");
const computer_select = document.getElementById("computer_select");
const winner = document.getElementById("winner");
const choices = ["paper", "rock", "scissors", "spock", "lizard"];

// modal buttons & stuff

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");
const bright = document.getElementById("brite");

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");
    openBtn.style.display = "none";

    checkWinner();
  });
});

reset.addEventListener("click", () => {
  // show selection | hide the main
  openBtn.style.display = "";
  main.style.display = "flex";
  selection.style.display = "none";
});

openBtn.addEventListener("click", () => {
  bright.style.filter = "blur(2px)";
  modal.style.display = "flex";
  main.style.filter = "blur(2px)";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  bright.style.filter = "blur(0)";
  main.style.filter = "blur(0)";
  modal.style.display = "none";
  openBtn.style.display = "";
});

modal.addEventListener("click", () => {
  // show selection | hide the main

  main.style.display = "flex";
  selection.style.display = "none";
});

function checkWinner() {
  const computerChoice = pickRandomChoice();

  // update the view
  updateSelection(user_select, userChoice);
  updateSelection(computer_select, computerChoice);

  if (userChoice === computerChoice) {
    //draw
    winner.innerText = "draw";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "spock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "lizard") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "spock" && computerChoice === "scissors") ||
    (userChoice === "spock" && computerChoice === "rock") ||
    (userChoice === "lizard" && computerChoice === "spock") ||
    (userChoice === "lizard" && computerChoice === "paper")
  ) {
    // user won
    updateScore(1);
    winner.innerText = "win";
  } else {
    //user lose
    updateScore(-1);
    winner.innerText = "lost";
  }

  // show selection | hide the main
  main.style.display = "none";
  selection.style.display = "flex";
  selection.style.marginBottom = "25px";
}

function updateScore(value) {
  score += value;

  scoreEl.innerText = score;
}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
  //class reset
  selectionEl.classList.remove("btn-paper");
  selectionEl.classList.remove("btn-rock");
  selectionEl.classList.remove("btn-scissors");
  selectionEl.classList.remove("btn-spock");
  selectionEl.classList.remove("btn-lizard");

  const img = selectionEl.querySelector("img");
  selectionEl.classList.add(`btn-${choice}`);
  img.src = `./images/icon-${choice}.svg`;
  img.alt = choice;
}
