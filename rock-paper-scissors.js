function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
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
  let keepGoing = true;
  let numberOfRounds = 0;
  let playerScore = 0;
  let computerScore = 0;

  while (keepGoing) {
    let playerSelection = prompt("Pick rock, paper, or scissors to play");
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    let scoreUpdates = updateScore(result);
    
    playerScore += scoreUpdates[0];
    computerScore += scoreUpdates[1];
    console.log("your current score is " + playerScore);        
    console.log("Computer's current score is " + computerScore);
    
    numberOfRounds += 1;
    if(numberOfRounds >= 5) {
      keepGoing = false;
    }
  }
  
  console.log(reportWinner(playerScore, computerScore));
  return reportWinner(playerScore, computerScore);
}

playGame();
