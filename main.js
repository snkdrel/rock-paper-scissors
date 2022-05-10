// Computer choice
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

// Play one round
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

// Play multiple rounds
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let roundResultMsg;

    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Choose rock, paper or scissors");
        roundResultMsg = playRound(playerSelection, computerPlay());
        console.log(roundResultMsg);

        // Update score
        if( roundResultMsg.slice(4,7) == "win" ){
            playerScore++;
        }else if( roundResultMsg.slice(4,9) == "loose" ){
            computerScore++;
        }
    }
    // Overall winner
    if(playerScore > computerScore){
        console.log("You win the game!");
    }else{
        console.log("You loose the game!");
    }
}

game();