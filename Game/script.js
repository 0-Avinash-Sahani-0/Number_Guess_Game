let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  const attemptsDisplay = document.getElementById('attempts');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "❗ Enter a valid number between 1 and 100.";
    message.style.color = 'red';
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  const difference = Math.abs(guess - randomNumber);

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    message.style.color = 'green';
  } else if (difference <= 5) {
    message.textContent = "🔥 Very Hot!";
    message.style.color = 'orangered';
  } else if (difference <= 10) {
    message.textContent = "🌡️ Hot";
    message.style.color = 'orange';
  } else if (difference <= 20) {
    message.textContent = "🙂 Warm";
    message.style.color = 'gold';
  } else if (guess > randomNumber) {
    message.textContent = "📈 Too High!";
    message.style.color = 'blue';
  } else {
    message.textContent = "📉 Too Low!";
    message.style.color = 'purple';
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('attempts').textContent = attempts;
  document.getElementById('message').textContent = "";
  document.getElementById('guessInput').value = "";
}
