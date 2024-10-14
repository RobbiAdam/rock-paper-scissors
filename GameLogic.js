export const choice = Object.freeze({
    Rock: '✊',
    Paper: '✋',
    Scissors: '✌️'
});

export function getComputerChoice() {
    const choices = Object.values(choice);
    return choices[Math.floor(Math.random() * choices.length)];
}

export function check(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }

    switch(playerChoice) {
        case choice.Rock:
            return computerChoice === choice.Paper ? "you lose" : "you win";
        case choice.Paper:
            return computerChoice === choice.Scissors ? "you lose" : "you win";
        case choice.Scissors:
            return computerChoice === choice.Rock ? "you lose" : "you win";
    }
}