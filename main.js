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
    let resultMsg;
    if(playerChoice == computerChoice){
        resultMsg = "Draw!";
    }else if((playerChoice == "rock" && computerChoice == "scissors") ||
            (playerChoice == "scissors" && computerChoice == "paper") ||
            (playerChoice == "paper" && computerChoice == "rock")){
                resultMsg = "You win! " + playerChoice + " beats " + computerChoice;
            }
    else{
        resultMsg = "You loose! " + computerChoice + " beats " + playerChoice;
    }
    return resultMsg;
};

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));