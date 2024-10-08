const choice = Object.freeze({
    Rock: 1,
    Paper: 2,
    Scissors: 3
});

function getComputerChoice() {
    const input = Math.floor(Math.random() * 3) + 1;
    return input;
}

function getPlayerChoice(input) {
    switch(input) {
        case 1:
        case 2:
        case 3:
            return input;
        default:
            return null;
    }
}

function check(playerInput, computerInput) {
    if (playerInput === computerInput) {
        return "draw";
    }

    switch(playerInput) {
        case choice.Rock:
            return computerInput === choice.Paper ? "you lose" : "you win";
        case choice.Paper:
            return computerInput === choice.Scissors ? "you lose" : "you win";
        case choice.Scissors:
            return computerInput === choice.Rock ? "you lose" : "you win";
        default:
            return "invalid input";
    }
}

function playRound() {
    let playerInput = prompt("Input a number, Rock = 1, Paper = 2, or Scissors = 3?");
    
    const computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice(parseInt(playerInput));

    if (playerChoice !== null) {
        const result = check(playerChoice, computerChoice);
        const message = `You chose: ${Object.keys(choice)[playerChoice - 1]}\nComputer chose: ${Object.keys(choice)[computerChoice - 1]}\nResult: ${result}`;
        alert(message);
        return { playerChoice, computerChoice, result, message };
    } else {
        alert("Invalid input, please try again.");
        return null;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;

    for (let round = 1; round <= 5; round++) {
        alert(`Round ${round} of 5`);
        const roundResult = playRound();
        
        if (roundResult) {
            console.log(`Round ${round}: ${roundResult.message}`);
            
            if (roundResult.result === "you win") {
                playerScore++;
            } else if (roundResult.result === "you lose") {
                computerScore++;
            } else {
                draws++;
            }
        } else {
            round--; // if input invalid replay round
        }
    }

    const finalMessage = `
Game Over!
Final Scores:
You: ${playerScore}
Computer: ${computerScore}
Draws: ${draws}
${playerScore > computerScore ? "You win the game!" : 
  playerScore < computerScore ? "Computer wins the game!" : "The game is a tie!"}`;

    alert(finalMessage);
    console.log(finalMessage);
}


playGame();