const body = document.querySelector('body');

// Prompt user for input via buttons
// Generate random computer pick after input is selected
// See who wins based on selection
// After computing win, update the score
// and update game history
// if a player reaches 5 points, report winner and surface play again button


// Play a round each time a button is clicked
const buttons = document.querySelectorAll('.player-choice');
buttons.forEach((button) => {    
  button.addEventListener('click', () => {  
    let computerSelection = getComputerChoice();
    let playerSelection = button.textContent;  

    let result = playRound(playerSelection, computerSelection);
    updateGameHistory(playerSelection, computerSelection, result); 
    updateScore(result);                        
  });
});

function playRound(playerSelection, computerSelection) {
  if (typeof(playerSelection) !== 'string') {
    return "Invalid input";
  }

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {            
    return 'tied';        
  }
  if (getWinCondition(playerSelection, computerSelection)) {    
    return 'won';    
  }
  else {    
    return 'lost';   
  }
}

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  let choice = Math.floor(Math.random() * 3);
  console.log("Computer chose " + options[choice]);
  return options[choice];
}

function getWinCondition(playerSelection, computerSelection) {
  let winCondition = (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  )
  return winCondition; 
}

function updateScore(result) {
  let playerScore = body.querySelector('.player-score');
  let computerScore = body.querySelector('.computer-score');
  if (result === "won") {       
    playerScore.textContent = Number(playerScore.textContent)+1;     
  } else if (result === "lost") {    
    computerScore.textContent = Number(computerScore.textContent)+1;    
  }
  reportWinner(playerScore.textContent, computerScore.textContent);
}

function updateGameHistory(playerSelection, computerSelection, result) {
  const gameHistory = document.querySelector('.game-history');
  let priorGame = document.createElement('li');
  priorGame.textContent = "You chose " + playerSelection.toLowerCase() + 
                          " and computer chose " + computerSelection.toLowerCase() + "." +
                          " You " + result + '!';
  gameHistory.appendChild(priorGame);  
  return;
}

function reportWinner(playerScore, computerScore) {
  if (Number(playerScore) >= 5) {    
    alert("You won with " + playerScore + " points to " + computerScore + "!");
    resetGame();
  } else if (computerScore >= 5) {   
    alert("You lost with " + playerScore + " points to " + computerScore + "!");
    resetGame();
  }
  return;
}

function resetGame() {
  let playerScore = body.querySelector('.player-score');
  let computerScore = body.querySelector('.computer-score');
  playerScore.textContent = 0;
  computerScore.textContent = 0;

  let priorGames = document.querySelectorAll('li');
  priorGames.forEach((priorGame) => {
    priorGame.parentElement.removeChild(priorGame);
  });
}