function getComputerChoice() {
    // We need to have 3 choices : rock paper scissors saved somewhere
    // I decided to use an array
    choices = ["rock","paper","scissors"];

    // Then randomly pick one of the 3 choices
    // Since I used an array I tought then to choose a random index using the math.random
    random_index = Math.round(( Math.random() * 10 ) % 2,1)

    // then return the random value
    return choices[random_index];
}

function playRound(playerSelection, computerSelection) {
    // I need to compare the playerSelection and the computerSelection
    // Based on that comparison I give a winner
    // There are a lot of possible combinations
    // I need to find a way to minimize that

    //Define all possible cases where the player win
    playerWinsWithRock = playerSelection == "rock" && computerSelection == "scissors";
    playerWinsWithPaper = playerSelection == "paper" && computerSelection == "rock";
    playerWinsWithScisors = playerSelection == "scissors" && computerSelection == "paper";

    // If this boolean has any true then the player won, else the computer won!
    playerWin = playerWinWithRock || playerWinWithPaper || playerWinWithScisors

    // If the player and computer have the same selection then it's draw no need to verify anything
    if(playerSelection === computerSelection) {
        return "Draw"
    } 

    if(playerWin) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lost! ${computerSelection} beats ${playerSelection}`
    }

}