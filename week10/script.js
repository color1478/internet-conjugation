function rollDice() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.getElementById("diceImage");
    diceImage.src = `./dice${randomNum}.png`;
}
