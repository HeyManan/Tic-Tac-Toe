"use strict";

const cellOne = document.querySelector(".cell-1");
const cellTwo = document.querySelector(".cell-2");
const cellThree = document.querySelector(".cell-3");
const cellFour = document.querySelector(".cell-4");
const cellFive = document.querySelector(".cell-5");
const cellSix = document.querySelector(".cell-6");
const cellSeven = document.querySelector(".cell-7");
const cellEight = document.querySelector(".cell-8");
const cellNine = document.querySelector(".cell-9");
const btnNew = document.querySelector(".btn--new");
const tableWrapper = document.querySelector(".grid");
const dispWinner = document.querySelector(".display-winner");
const topWrapper = document.querySelector(".top-wrapper");
const playerName = document.querySelector(".player-name");
const gameState = document.querySelector(".state");
const footer = document.querySelector(".footer");

let currentState = 0;
let winner = "XO";
let flag = 0;

const init = function () {
  currentState = 0;
  flag = 0;
  winner = "XO";
  cellOne.innerHTML = "";
  cellTwo.innerHTML = "";
  cellThree.innerHTML = "";
  cellFour.innerHTML = "";
  cellFive.innerHTML = "";
  cellSix.innerHTML = "";
  cellSeven.innerHTML = "";
  cellEight.innerHTML = "";
  cellNine.innerHTML = "";
  tableWrapper.classList.remove("hidden");
  dispWinner.classList.add("hidden");
  topWrapper.style.backgroundColor = "#ffffff66";
  document.querySelector(".name").style.color = "#333";
  footer.classList.add("hidden");
};
const edit = function () {
  tableWrapper.classList.add("hidden");
  dispWinner.classList.remove("hidden");
  footer.classList.remove("hidden");
  topWrapper.style.backgroundColor = "#2f2f2f";
  playerName.innerHTML = winner;
  document.querySelector(".name").style.color = "#c7365f";
};
const displayWinner = function () {
  edit();
  gameState.innerHTML = "🥇 Winner 🥇";
};
const draw = function () {
  edit();
  gameState.innerHTML = "!! Draw !!";
};
const checkWinner = function () {
  flag = 0;
  if (
    cellFive.innerHTML !== "" &&
    cellFive.innerHTML === cellOne.innerHTML &&
    cellFive.innerHTML === cellNine.innerHTML
  ) {
    flag = 1;
    winner = cellFive.innerHTML;
  } else if (
    cellFive.innerHTML !== "" &&
    cellFive.innerHTML === cellThree.innerHTML &&
    cellFive.innerHTML === cellSeven.innerHTML
  ) {
    flag = 1;
    winner = cellFive.innerHTML;
  } else if (
    cellFive.innerHTML !== "" &&
    cellFour.innerHTML === cellFive.innerHTML &&
    cellFive.innerHTML === cellSix.innerHTML
  ) {
    flag = 1;
    winner = cellFive.innerHTML;
  } else if (
    cellFive.innerHTML !== "" &&
    cellFive.innerHTML === cellTwo.innerHTML &&
    cellFive.innerHTML === cellEight.innerHTML
  ) {
    flag = 1;
    winner = cellFive.innerHTML;
  } else if (
    cellFour.innerHTML !== "" &&
    cellFour.innerHTML === cellOne.innerHTML &&
    cellFour.innerHTML === cellSeven.innerHTML
  ) {
    flag = 1;
    winner = cellFour.innerHTML;
  } else if (
    cellNine.innerHTML !== "" &&
    cellSeven.innerHTML === cellEight.innerHTML &&
    cellSeven.innerHTML === cellNine.innerHTML
  ) {
    flag = 1;
    winner = cellSeven.innerHTML;
  } else if (
    cellFive.innerHTML !== "" &&
    cellFive.innerHTML === cellThree.innerHTML &&
    cellFive.innerHTML === cellNine.innerHTML
  ) {
    flag = 1;
    winner = cellFive.innerHTML;
  } else if (
    cellTwo.innerHTML !== "" &&
    cellTwo.innerHTML === cellOne.innerHTML &&
    cellTwo.innerHTML === cellThree.innerHTML
  ) {
    flag = 1;
    winner = cellTwo.innerHTML;
  }

  if (flag === 1) {
    setTimeout(displayWinner, 500);
  } else if (currentState === 8 && flag === 0) {
    setTimeout(draw, 500);
  }
};

cellOne.addEventListener("click", function () {
  if (cellOne.innerHTML === "") {
    if (currentState % 2 == 0) {
      cellOne.innerHTML = "X";
      cellOne.style.color = "#333";
    } else {
      cellOne.innerHTML = "O";
      cellOne.style.color = "#c7365f";
    }
    checkWinner();
    currentState++;
  }
});
cellTwo.addEventListener("click", function () {
  if (cellTwo.innerHTML === "") {
    if (currentState % 2 == 0) {
      cellTwo.innerHTML = "X";
      cellTwo.style.color = "#333";
    } else {
      cellTwo.innerHTML = "O";
      cellTwo.style.color = "#c7365f";
    }
    checkWinner();
    currentState++;
  }
});
cellThree.addEventListener("click", function () {
  if (cellThree.innerHTML === "") {
    if (currentState % 2 == 0) {
      cellThree.innerHTML = "X";
      cellThree.style.color = "#333";
    } else {
      cellThree.innerHTML = "O";
      cellThree.style.color = "#c7365f";
    }
    checkWinner();
    currentState++;
  }
});
cellFour.addEventListener("click", function () {
  if (cellFour.innerHTML === "") {
    if (currentState % 2 == 0) {
      cellFour.innerHTML = "X";
      cellFour.style.color = "#333";
    } else {
      cellFour.innerHTML = "O";
      cellFour.style.color = "#c7365f";
    }
    checkWinner();
    currentState++;
  }
});
cellFive.addEventListener("click", function () {
  if (cellFive.innerHTML === "") {
    if (currentState % 2 == 0) {
      cellFive.innerHTML = "X";
      cellFive.style.color = "#333";
    } else {
      cellFive.innerHTML = "O";
      cellFive.style.color = "#c7365f";
    }
    checkWinner();
    currentState++;
  }
});
cellSix.addEventListener("click", function () {
  if (cellSix.innerHTML === "") {
    if (currentState % 2 == 0) {
      cellSix.innerHTML = "X";
      cellSix.style.color = "#333";
    } else {
      cellSix.innerHTML = "O";
      cellSix.style.color = "#c7365f";
    }
    checkWinner();
    currentState++;
  }
});
cellSeven.addEventListener("click", function () {
  if (cellSeven.innerHTML === "") {
    if (currentState % 2 == 0) {
      cellSeven.innerHTML = "X";
      cellSeven.style.color = "#333";
    } else {
      cellSeven.innerHTML = "O";
      cellSeven.style.color = "#c7365f";
    }
    checkWinner();
    currentState++;
  }
});
cellEight.addEventListener("click", function () {
  if (cellEight.innerHTML === "") {
    if (currentState % 2 == 0) {
      cellEight.innerHTML = "X";
      cellEight.style.color = "#333";
    } else {
      cellEight.innerHTML = "O";
      cellEight.style.color = "#c7365f";
    }
    checkWinner();
    currentState++;
  }
});
cellNine.addEventListener("click", function () {
  if (cellNine.innerHTML === "") {
    if (currentState % 2 == 0) {
      cellNine.innerHTML = "X";
      cellNine.style.color = "#333";
    } else {
      cellNine.innerHTML = "O";
      cellNine.style.color = "#c7365f";
    }
    checkWinner();
    currentState++;
  }
});

btnNew.addEventListener("click", init);
