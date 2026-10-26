let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  //  Generate random number between 1 to 3
  let randomNum = Math.floor(Math.random() * 3) + 1;

  // Replace generated random number with string values and assign as choice
  let choice;

  switch (randomNum) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    case 3:
      choice = "Scissors";
  }

  //   return computer choice
  return choice;
}

function getHumanChoice() {
  // Ask human to make a choice between rock paper or scissors
  let choice = prompt("Guess: rock, paper, scissors");

  // Format and return human response
  choice = choice.trim().toLowerCase();
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playRound(humanChoice, computerChoice) {
  let message = "It's a tie! Play again";

  // Check if human and computer choice is not the same
  if (humanChoice !== computerChoice) {
    // compare choices, and determine score
    if (
      (humanChoice === "Scissors" && computerChoice === "Paper") ||
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
      message = `You won! ${humanChoice} beats ${computerChoice}`;
      humanScore += 1;
    } else {
      message = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore += 1;
    }
  }

  // display playround message
  console.log(message);
}

function playGame(rounds) {
  // Loop for $rounds times
  for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice(),
      computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame(5);
