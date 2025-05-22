function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById("dice1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.getElementById("dice2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  var resultText = document.getElementById("result");

  if (randomNumber1 > randomNumber2) {
    resultText.innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    resultText.innerHTML = "🚩 Player 2 Wins!";
  } else {
    resultText.innerHTML = "It's a Draw! 🎲";
  }
}
