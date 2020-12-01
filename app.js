let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors"); 
const reset_btn = document.querySelector(".btn");

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
    
}

function convertToWord(letter) {
   if (letter === "rock") return "Rock";
   if (letter === "paper") return "Paper";
   if (letter === "scissors") return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_div.innerHTML = "<span style='color: blue'>" + convertToWord(userChoice) + "</span>" + " beats <span style='color: orange'>" + convertToWord(computerChoice) + "</span>"  + ". You win ✔️!";

    document.getElementById(userChoice).style.border =  '4px solid green';
    document.querySelector(".score-board").style.border =  '3px solid green';

    setTimeout(() => {
        document.getElementById(userChoice).style.border =  '4px solid white';
        document.querySelector(".score-board").style.border =  '3px solid white';
    }, 300) 

    
    
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "<span style='color: orange'>" + convertToWord(computerChoice) +"</span>" + " beats <span style='color: blue'>" + convertToWord(userChoice) + "</span>"  + ". You lose... ❌ !";

    document.getElementById(userChoice).style.border =  '4px solid red';
    document.querySelector(".score-board").style.border =  '3px solid red';

    setTimeout(() => {
        document.getElementById(userChoice).style.border =  '4px solid white';
        document.querySelector(".score-board").style.border =  '3px solid white';
    }, 300) 

}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = `it's a Draw. You both picked ${convertToWord(userChoice)} 😁`
}

function game(userChoice) {
   let computerChoice = getComputerChoice();
   switch(userChoice + "/" + computerChoice){
       case "rock/scissors":
       case "paper/rock":
       case "scissors/paper":  
        win(userChoice, computerChoice);
        break;
       case "scissors/rock":
       case "rock/paper":
       case "paper/scissors":  
        lose(userChoice, computerChoice);
        break;
       case "rock/rock":
       case "paper/paper":
       case "scissors/scissors":  
        draw(userChoice, computerChoice);
        break;
   }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Welcome!"
}


function main(){

    rock_div.addEventListener('click', () => {
        game("rock");
    })

    paper_div.addEventListener('click', () => {
        game("paper");
    })

    scissors_div.addEventListener('click', () => {
        game("scissors");
    })
    reset_btn.addEventListener('click', () => {
        resetGame();
    })

}

main();
