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

function playRound(playerSelection, computerSelection) {
  if (typeof(playerSelection) !== 'string') {
    return "Invalid input";
  }

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return "tie";
  }
  if (getWinCondition(playerSelection, computerSelection)) {
    console.log("You win! " + playerSelection + " beats " + computerSelection);
    return "win";
  }
  else {
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
    return "loss";
  }
}

// function returns how much to update scores 
// returns in format [playerScoreUpdate, computerScoreUpdate]
function updateScore(result) {
  if (result === "win") {
    return [1, 0];
  } else if (result === "loss") {
    return [0, 1];
  } else {
    return [0, 0];
  }
}

function reportWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "You win with " + playerScore + " points to " + computerScore + "!";
  } else if (playerScore < computerScore) {
    return "You lose with " + playerScore + " points to " + computerScore + "!";
  } else {
    return "It's a tie! You both got " + playerScore + " points!";
  }  
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

}

const body = document.querySelector('body');
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock'
body.append(rockButton);
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper'
body.append(paperButton);
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors'
body.append(scissorsButton);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {    
  button.addEventListener('click', () => {
    let result = playRound(button.textContent, getComputerChoice()); 
    
    console.log(result);
  });
});
