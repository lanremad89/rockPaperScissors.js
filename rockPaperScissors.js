/*

Rock, Paper, or Scissors

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.



The possible outcomes are:



Rock destroys scissors.

Scissors cut paper.

Paper covers rock.

If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:



Get the user’s choice.

Get the computer’s choice.

Compare the two choices and determine a winner.

Start the program and display the results.

*/



const getUserChoice = userInput => {

    userInput = userInput.toLowerCase();
  
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  
      return userInput;
  
    } else {
  
      console.log('Error please type either rock, paper or scissors');
  
    }
  
  }
  
  const getComputerChoice = () => {
  
    let randomChoice = Math.floor(Math.random() * 3);
  
    
  
    switch(randomChoice) {
  
      case 0: 
  
        return 'rock';
  
        break;
  
      case 1:
  
        return 'paper';
  
        break;
  
      case 2:
  
        return 'scissors';
  
        break;
  
      // case 3:
  
      //   return 'bomb';
  
      //   break;
  
    }
  
  }
  
  
  
  const determineWinner = (userChoice, computerChoice) => {
  
    if(userChoice === computerChoice) {
  
      return 'Tie Game';
  
      }
  
    if(userChoice === 'rock') {
  
      if(computerChoice === 'paper') {
  
        return `Computer won!`;
  
      } else {
  
        return `User won!`;
  
      }
  
    } if(userChoice === 'paper') {
  
        if(computerChoice === 'scissors') {
  
          return 'Computer won!';
  
        } else {
  
          return  'User won!';
  
        }
  
    } if(userChoice === 'scissors') {
  
        if(computerChoice === 'rock') {
  
          return 'Computer won!';
  
        } else {
  
          return 'User won!';
  
        }
  
    } if(userChoice === 'bomb') {
  
        if(computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors') {
  
          return 'User won!'
  
        } else {
  
          return 'User won!'
  
        }
  
    } 
  
  }
  
  
  
  const playGame = () => {
  
    let userChoice = getUserChoice('bomb');
  
    let computerChoice = getComputerChoice();
  
    console.log(`User chose: ${userChoice}!`);
  
    console.log(`Computer chose: ${computerChoice}!`);
  
    console.log(determineWinner(userChoice, computerChoice));
  
  }
  
  
  
  
  
  // console.log(getUserChoice('Scissors'));
  
  // console.log(getComputerChoice());
  
  // console.log(determineWinner('rock', 'rock'));
  
  playGame();