let computerPlay = function(){
    let randNumber = Math.floor(Math.random() * 3);
    
    if(randNumber == 0){
        return "Rock";
    }else if(randNumber == 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}