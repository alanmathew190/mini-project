const minNumber = parseInt(document.getElementById('min').textContent);
const maxNumber = parseInt(document.getElementById('max').textContent);
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

const userGuessInput = document.getElementById('userGuess');
const guessButton = document.getElementById('guessButton');
const resultDisplay = document.getElementById('result');

let attempts = 0;

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(userGuessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        resultDisplay.textContent = `Congratulations! You guessed it right in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        resultDisplay.textContent = 'Too low! Try a higher number.';
    } else {
        resultDisplay.textContent = 'Too high! Try a lower number.';
    }
});

