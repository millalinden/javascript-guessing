// maximum number of attempts
const maxTries = 5; 
// get random number
const randomNumber = Math.floor(Math.random() * 100) + 1;
// how many guesses user makes
let numberOfGuesses = 0;

// loop until numberOfGuesses is less than maxTries
while (numberOfGuesses < maxTries) {
  const userGuess = parseInt(prompt(`Guess a number between 1 and 100. You have ${maxTries - numberOfGuesses} tries remaining:`));

  // check if input is valid, if yes numberGuesses increase by one
  if (isNaN(userGuess)) {
    alert("Please enter a valid number.");
  } else {
    numberOfGuesses++;
    // if guess is to low
    if (userGuess < randomNumber) {
      alert("Too low! Try again.");
    // if guess to high
    } else if (userGuess > randomNumber) {
      alert("Too high! Try again.");
      // if guess correct
    } else {
      alert(`Congratulations! You guessed the correct number (${randomNumber}) in ${numberOfGuesses} attempts.`);
      break;
    }
  }
}
// if user makes maxtries - alert correct answer
if (numberOfGuesses === maxTries) {
  alert(`Sorry, you've run out of attempts. The correct number was ${randomNumber}.`);
}
