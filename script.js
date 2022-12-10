let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

let compareGuesses = (humanGuess, computerGuess, targetNum) => {
    const humanDifference = Math.abs(targetNum - humanGuess);
    const computerDifference = Math.abs(targetNum - computerGuess);

    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;