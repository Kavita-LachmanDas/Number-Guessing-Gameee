let random;
let attempt = 0;
const maxAttempt = 3;
let lastGuess = null; 

function startGame() {
    const difficulty = document.getElementById('difficulty').value;
    random = Math.floor(Math.random() * difficulty) + 1;

    var gett1 = document.getElementById('text');
    var gett2 = document.getElementById('number');
    var gett3 = document.getElementById('buttonguess');

    gett1.style.display = 'block';
    gett1.innerText = 'Choose a number:';
    gett2.style.display = 'block';
    gett3.style.display = 'block';
}

















function makeGuess() {
    const userGuess = Number(document.getElementById('number').value);
    const correctText = document.getElementById('correct');
    const attemptText = document.getElementById('att');

    // Check if input is empty
    if (document.getElementById('number').value === '') {
        correctText.style.display = 'block';
        correctText.innerText = 'Please enter a number first!';
        return;
    }

    // Check if the current guess is the same as the previous guess
    if (userGuess === lastGuess) {
        correctText.style.display = 'block';
        correctText.innerText = 'Please try a different number.';
        return;
    }
    lastGuess = userGuess;

    // Check if attempts are already maxed out
    if (attempt >= maxAttempt) {
        attemptText.innerText = 'You have exceeded the maximum attempts.';
        return;
    }
    attempt++;

    if (userGuess === random) {
        correctText.style.display = 'block';
        correctText.innerText = 'Congratulations! You guessed the right number! The correct number is ' + random + '.';
        
        attemptText.innerText = '';
        document.getElementById('buttonguess').disabled = true;
    } else {
        correctText.style.display = 'block';

        // Provide feedback if the guess is too low or too high
        if (userGuess < random) {
            correctText.innerText = 'Too low! Try again.';
        } else {
            correctText.innerText = 'Too high! Try again.';
        }

        attemptText.innerText = 'Attempts left: ' + (maxAttempt - attempt);

        // Check if maximum attempts are reached
        if (attempt === maxAttempt) {
            attemptText.innerText = 'You have exceeded the maximum attempts.';
            document.getElementById('buttonguess').disabled = true;
        }
    }

    document.getElementById('number').value = ''; // Clear the input field after each guess
}
