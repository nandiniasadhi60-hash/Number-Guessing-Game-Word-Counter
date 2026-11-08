
// ========================================
// NUMBER GUESSING GAME
// JavaScript Program
// ========================================


// 1. Generate a random number

let randomNumber = Math.floor(Math.random() * 100) + 1;


// 2. Initialize attempts

let attempts = 0;


// 3. Get HTML elements

const guessInput = document.getElementById("guessInput");

const guessButton = document.getElementById("guessButton");

const message = document.getElementById("message");

const attemptsDisplay = document.getElementById("attempts");

const restartButton = document.getElementById("restartButton");


// 4. Check user's guess

function checkGuess() {

    // Get input value

    const userGuess = Number(guessInput.value);


    // Check empty input

    if (guessInput.value.trim() === "") {

        message.textContent = "⚠️ Please enter a number!";

        return;
    }


    // Check valid range

    if (
        !Number.isInteger(userGuess) ||
        userGuess < 1 ||
        userGuess > 100
    ) {

        message.textContent = "⚠️ Enter a number between 1 and 100!";

        guessInput.focus();

        return;
    }


    // Increase attempts

    attempts++;

    attemptsDisplay.textContent = attempts;


    // Check the answer

    if (userGuess === randomNumber) {

        message.textContent =
            "🎉 Congratulations! You guessed the correct number!";

        message.style.color = "green";

        // Disable game input

        guessInput.disabled = true;

        guessButton.disabled = true;

        // Enable restart button

        restartButton.disabled = false;

    }

    else if (userGuess < randomNumber) {

        message.textContent = "📈 Too Low! Try a Higher Number.";

        message.style.color = "blue";

    }

    else {

        message.textContent = "📉 Too High! Try a Lower Number.";

        message.style.color = "red";

    }


    // Clear input for next guess

    if (userGuess !== randomNumber) {

        guessInput.value = "";

        guessInput.focus();

    }

}


// 5. Restart the game

function restartGame() {

    // Generate a new random number

    randomNumber = Math.floor(Math.random() * 100) + 1;


    // Reset attempts

    attempts = 0;

    attemptsDisplay.textContent = attempts;


    // Reset input

    guessInput.value = "";

    guessInput.disabled = false;


    // Enable guess button

    guessButton.disabled = false;


    // Disable restart button

    restartButton.disabled = true;


    // Reset message

    message.textContent = "Good luck! Start guessing.";

    message.style.color = "#764ba2";


    // Focus input

    guessInput.focus();

}


// 6. Press Enter to check the guess

guessInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !guessButton.disabled) {

        checkGuess();

    }

});


// 7. Start the game

console.log("Number Guessing Game Started!");

