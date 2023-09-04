function getComputerChoice() {
    choices = ["rock","paper","scissors"];

    random_index = Math.round(( Math.random() * 10 ) % 2,1)

    return choices[random_index];
}

function playRound(playerSelection, computerSelection) {

    //Define all possible cases where the player win
    playerWinsWithRock = playerSelection == "rock" && computerSelection == "scissors";
    playerWinsWithPaper = playerSelection == "paper" && computerSelection == "rock";
    playerWinsWithScisors = playerSelection == "scissors" && computerSelection == "paper";

    //If this boolean has any true then the player won, else the computer won!
    playerWin = playerWinsWithRock || playerWinsWithPaper || playerWinsWithScisors

    //If the player and computer have the same selection then it's draw no need to verify anything
    if(playerSelection === computerSelection) {
        return "Draw"
    } 

    if(playerWin) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lost! ${computerSelection} beats ${playerSelection}`
    }

}

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    
    let result;
    for (let index = 0; index < 5; index++) {
        let playerChoice = prompt("Please choose a value between : rock,paper,scissors");
        result = playRound(playerChoice,getComputerChoice());

        console.log(result);
        
        if (result.split(" ")[1] === "Win!") {
            playerScore++;
        } else {
            if (result != "Draw"){
                computerScore++;
            }
        }
        
    }

    console.log(`Final score :
    player score : ${playerScore}
    computer score : ${computerScore}`)

}

game()