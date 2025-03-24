let userScore = 0;
let computerScore = 0;
let userHand;
let computerHand;
let roundResult;

const user_output = document.getElementById("user-scored");
const computer_output = document.getElementById("compute-scored");

const Rock = document.getElementById("Rock");
const scissors = document.getElementById("scissors");
const Paper = document.getElementById("Paper");

const Result = document.getElementById("result");
const Score_board = document.getElementById("score-board");

function computerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        computerHand = "Rock";
    } else if (randomNum == 1) {
        computerHand = "Paper";
    } else {
        computerHand = "scissors";
    }
}

function calculateResult() {
    if (
        (userHand == "Rock" && computerHand == "scissors") ||
        (userHand == "Paper" && computerHand == "Rock") ||
        (userHand == "scissors" && computerHand == "Paper")
    ) {
        userScore++;
        user_output.innerHTML = userScore;
        Result.innerHTML = `${userHand}<sup>(user)</sup> beats ${computerHand}<sup>(Computer)</sup>. You Win!`;
        roundResult = "You Win";
    } else if (
        (computerHand == "Rock" && userHand == "scissors") ||
        (computerHand == "Paper" && userHand == "Rock") ||
        (computerHand == "scissors" && userHand == "Paper")
    ) {
        computerScore++;
        computer_output.innerHTML = computerScore;
        Result.innerHTML = `${computerHand}<sup>(Computer)</sup> beats ${userHand}<sup>(user)</sup>. You Lose!`;
        roundResult = "YOU LOSE!";
    } else {
        Result.innerHTML = "It's a Draw!";
        roundResult = "Draw";
    }
}

function changeColor() {
    if (roundResult == "You Win") {
        Score_board.style.backgroundColor = "#4caf50";
    } else if (roundResult == "YOU LOSE!") {
        Score_board.style.backgroundColor = "#f44336";
    } else {
        Score_board.style.backgroundColor = "#2196f3";
    }
}

Rock.addEventListener("click", function () {
    computerChoice();
    userHand = "Rock";
    calculateResult();
    changeColor();
});

Paper.addEventListener("click", function () {
    computerChoice();
    userHand = "Paper";
    calculateResult();
    changeColor();
});

scissors.addEventListener("click", function () {
    computerChoice();
    userHand = "scissors";
    calculateResult();
    changeColor();
});
