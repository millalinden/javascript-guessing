const maxTries = 5; // maximum number of attempts
const randomNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;

while (numberOfGuesses < maxTries) {
  const userGuess = parseInt(prompt(`Guess a number between 1 and 100. You have ${maxTries - numberOfGuesses} tries remaining:`));

  if (isNaN(userGuess)) {
    alert("Please enter a valid number.");
  } else {
    numberOfGuesses++;

    if (userGuess < randomNumber) {
      alert("Too low! Try again.");
    } else if (userGuess > randomNumber) {
      alert("Too high! Try again.");
    } else {
      alert(`Congratulations! You guessed the correct number (${randomNumber}) in ${numberOfGuesses} attempts.`);
      break;
    }
  }
}

if (numberOfGuesses === maxTries) {
  alert(`Sorry, you've run out of attempts. The correct number was ${randomNumber}.`);
}
