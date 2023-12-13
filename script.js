function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3) + 1;
    if (computerSelection === 1) { 
        computerSelection = "Rock";
    }else if (computerSelection === 2 ) {
        computerSelection = "Paper";
    }else {
        computerSelection = "Scissors";
    }
    return computerSelection;
}


function getPlayerChoice() {
    playerSelection = prompt("Choose Rock,Paper or Scissors");
    playerSelection =  playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    return playerSelection;

}


let computerScore = 0;
let userScore = 0;
let playerSelection = "";
let computerSelection = "";
let statu = "";

function playRound() {
    getComputerChoice();
    getPlayerChoice();
if (computerSelection === playerSelection ) {
    statu = "TIE Play Again";
    return statu;
}else if(playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    statu = "You Lose! Paper beats Rock";
    return statu;
}else if(playerSelection === "Paper" && computerSelection === "Rock") {
    userScore++;
    statu = "You Win! Paper beats Rock";
    return statu;
}else if(playerSelection === "Scissors" && computerSelection === "Paper") {
    userScore++;
    statu =  "You Win! Scissors beats Paper";
    return statu;
}else if(playerSelection === "Rock" && computerSelection === "Scissors") {
    userScore++;
    statu =  "You Win! Rock beats Scissors";
    return statu;
}else if(playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    statu =  "You Lose! Rock beats Scissors";
    return statu;
}else if(playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    statu =  "You Lose! Scissors beats Paper";
    return statu;
}
}

function game() {
do {
playRound();
console.log(statu);
console.log("computer score : "+computerScore);
console.log("user score : " +userScore);
}while( (computerScore < 5) && (userScore < 5) ); 
}




console.log(game());