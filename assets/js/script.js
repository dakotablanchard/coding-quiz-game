var timerNum = document.querySelector("#timerDigit")
var timeLimit = 60











function beginCountdown() {
    var countdown = setInterval(function() {
        timerNum.textContent = timeLimit
        timeLimit--

        if (timeLimit < 0)
        clearInterval(countdown);
    }, 1000)
}

function startGame() {
    console.log("Game has started")

    beginCountdown()

    
}