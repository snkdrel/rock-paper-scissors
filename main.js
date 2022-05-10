let computerPlay = function(){
    let randNumber = Math.floor(Math.random() * 3);
    
    if(randNumber == 0){
        return "rock";
    }else if(randNumber == 1){
        return "paper";
    }else{
        return "scissors";
    }
};

let playRound = (playerChoice, computerChoice) => {
    // Case insensitive
    playerChoice = playerChoice.toLowerCase();

    let resultMsg;
    if(playerChoice == computerChoice){
        resultMsg = "Draw!";
    } // winning conditions
    else if((playerChoice == "rock" && computerChoice == "scissors") ||
            (playerChoice == "scissors" && computerChoice == "paper") ||
            (playerChoice == "paper" && computerChoice == "rock")){
                resultMsg = "You win! " + playerChoice + " beats " + computerChoice;
            }
    else{
        resultMsg = "You loose! " + computerChoice + " beats " + playerChoice;
    }
    return resultMsg;
};

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let roundResultMsg;

    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Choose rock, paper or scissors");
        roundResultMsg = playRound(playerSelection, computerPlay());
        console.log(roundResultMsg);

        if(scoreCounter(roundResultMsg)){
            playerScore++;
        }else{
            computerScore++;
        }
    }
}
/*
// Function that checks who won the round according to message
// returns true if player won, false otherwise
function scoreCounter(roundResult){

}
*/
game();