let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll(".btn");
const choiceLine = document.querySelector("#choice-line");
const resultLine = document.querySelector("#result-line");
const scoreLine = document.querySelector("#score-line");
const newGame = document.querySelector("#restartBtn");
const newGameBtn = document.querySelector('#restart');
let pChoice = document.createElement('p');
let cChoice = document.createElement('p');


buttons.forEach((button) => {
    button.addEventListener('click' ,playRound)
});

newGame.addEventListener('click', restartGame);


function playRound(e) {

    reinitialize();  

    playerSelection = e.target.id; 

    computerSelection = computerPlay();

    getWinner(playerSelection,computerSelection)

    //console.log("Player plays "+ playerSelection);
    //console.log("Computer plays "+computerSelection);
    
  
    pChoice.textContent = `Player plays ${playerSelection}`;
    cChoice.textContent = `Computer plays ${computerSelection}`;

    choiceLine.appendChild(pChoice);
    choiceLine.appendChild(cChoice);

    checkScore ();


}

function computerPlay() {
  let computerOptions = ['rock','paper','scissors'];
  let randomNumber = Math.floor(Math.random() * computerOptions.length);
  let computerChoice = computerOptions[randomNumber];
  return computerChoice;
}

function reinitialize () {
  if (pChoice == undefined) return
  if (cChoice == undefined) return
  pChoice.remove();
  cChoice.remove();
}

function getWinner(playerSelection,computerSelection) {

  let result;

  if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore++;
      result = 'You win! Paper beats Rock';
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore++;
    result = 'You win! Rock beats Scissors';
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore++;
    result = 'You win! Scissors beats Paper';
  };

  
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    computerScore++;
    result = 'You loose! Paper beats Rock';
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    computerScore++;
    result = 'You loose! Rock beats Scissors';
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    computerScore++;
    result = 'You loose! Scissors beats Paper';
  };

  
  if (playerSelection == 'paper' && computerSelection == 'paper') {
    result = 'Draw !';
  } else if (playerSelection == 'rock' && computerSelection == 'rock') {
    result = 'Draw !';
  } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    result = 'Draw !';
  };

  //console.log(result);
  //console.log("player = " + playerScore + ", computer = " + computerScore);
  
  resultLine.textContent = `${result}`;

  
  const player = document.querySelector("#player-score");
  player.textContent = `Player: ${playerScore}`;
  const computer = document.querySelector("#comp-score");
  computer.textContent = `Computer: ${computerScore}`;

  
}

function checkScore () {

  let finalResult;

  if (playerScore == 5) {
    finalResult = ' Congratulation! You win';
    reinitialize();
    resultLine.textContent = `${finalResult}`;
    resultLine.style.fontSize = '2rem';
    endGame();
  } else if (computerScore == 5) {
    finalResult = ' Too bad ! You lose, try again';
    reinitialize();
    resultLine.textContent = `${finalResult}`;
    resultLine.style.fontSize = '2rem';
    endGame();
    
  } 
  
    
}

function endGame () {
  const divButtons = document.querySelector('#buttons')
  divButtons.setAttribute('style','display:none');
  const h3Title = document.querySelector('h3');
  h3Title.setAttribute('style','display:none');
  newGameBtn.setAttribute ('style', 'display:flex');

}

function restartGame () {
  window.location.reload();

}


