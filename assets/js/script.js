var timerNum = document.querySelector("#timer-digit")
var homeScreen = document.querySelector(".home-screen")

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

    homeScreen.setAttribute ("style", "display: none;")
}