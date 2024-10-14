import { choice, getComputerChoice, check } from './GameLogic.js';

let playerScore = 0;
let computerScore = 0;

function updateScore() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function updateChoices(playerChoice, computerChoice) {
    document.getElementById('playerChoice').textContent = playerChoice;
    document.getElementById('computerChoice').textContent = computerChoice;
}

function updateResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;

    if (result === "you win") {
        playerScore++;
    } else if (result === "you lose") {
        computerScore++;
    }

    updateScore();
}

export function setupGame() {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => playRound(button.textContent));
    });
}

export function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    updateChoices(playerChoice, computerChoice);

    const result = check(playerChoice, computerChoice);
    updateResult(result);
}