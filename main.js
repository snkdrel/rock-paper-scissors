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

let showScores = function(){
    let scoreString = 'Player: ' + playerScore + ' - Computer: ' + computerScore;

    if(numberOfRounds == 5){
        if(playerScore > computerScore){
            scoreString += '\nYou win the game!';
        }else{
            scoreString += '\nYou loose the game!';
        }
    }

    divScore.textContent = scoreString;
};

// Keeps score and number of rounds
let scoreUpdate = (roundResultMsg) => {
    numberOfRounds++;
    
    // update scores
    if( roundResultMsg.slice(4,7) == "win" ){
        playerScore++;
    }else if( roundResultMsg.slice(4,9) == "loose" ){
        computerScore++;
    }

    showScores();

    // reset variables
    if(numberOfRounds == 5){
        numberOfRounds = 0;
        playerScore = 0;
        computerScore = 0;
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
    // shows result of round
    divResults.textContent = resultMsg;
    
    scoreUpdate(resultMsg);
};

const buttons = document.querySelectorAll('button');
buttons.forEach( (b) => {
    b.addEventListener('click', function(){
        playRound(this.textContent, computerPlay());
    });
});

const divResults = document.querySelector('.results');
const divScore = document.querySelector('.scores');
divScore.setAttribute('style', 'white-space: pre;')

let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;