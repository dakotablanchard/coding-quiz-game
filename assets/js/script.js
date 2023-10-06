var questionArray = [
    {
        "question": "How do you log somethine to the console?",
        "choices": ["console.log()", "logToConsole()", "log.console()", "None of the above"],
        "answer": "console.log()"
    },

    {
        "question": "question 2",
        "choices": ["choice 1", "choice 2", "choice 3", "choice 4"],
        "answer": "answer 2"
    },

    {
        "question": "question 3",
        "choices": ["choice 1", "choice 2", "choice 3", "choice 4"],
        "answer": "answer 3"
    },

    {
        "question": "question 4",
        "choices": ["choice 1", "choice 2", "choice 3", "choice 4"],
        "answer": "answer 4"
    },

    {
        "question": "question 5",
        "choices": ["choice 1", "choice 2", "choice 3", "choice 4"],
        "answer": "answer 5"
    },

    {
        "question": "question 6",
        "choices": ["im working", "choice 2", "choice 3", "choice 4"],
        "answer": "answer 6"
    },

    {
        "question": "question 7",
        "choices": ["choice 1", "choice 2", "choice 3", "choice 4"],
        "answer": "answer 7"
    },

    {
        "question": "question 8",
        "choices": ["choice 1", "choice 2", "choice 3", "choice 4"],
        "answer": "answer 8"
    },

    {
        "question": "question 9",
        "choices": ["choice 1", "choice 2", "choice 3", "choice 4"],
        "answer": "answer 9"
    },

    {
        "question": "question 10",
        "choices": ["choice 1", "choice 2", "choice 3", "choice 4"],
        "answer": "answer 10"
    },
]

var questionNumber = 0

var timerNum = document.querySelector("#timer-digit")
var homeScreen = document.querySelector(".home-screen")
var multipleChoice = document.querySelector(".multiple-choice")

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

    beginCountdown()

    homeScreen.setAttribute ("style", "display: none;")

    multipleChoiceQuestions()
}

function multipleChoiceQuestions() {
console.log(questionArray[questionNumber].question)
    var questionTitle = document.createElement("h2")
        questionTitle.setAttribute("class", "question-title")
        questionTitle.textContent = questionArray[questionNumber].question
        multipleChoice.appendChild(questionTitle)

    for (var i = 0; i < questionArray[questionNumber].choices.length; i++) {
        var choiceButtons = document.createElement("button")
        choiceButtons.setAttribute("class", "choice-buttons")
        choiceButtons.setAttribute("id", "button" + i)
        choiceButtons.textContent = questionArray[questionNumber].choices[i]
        multipleChoice.appendChild(choiceButtons)

    }
}