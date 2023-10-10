var questionArray = [
    {
        "question": "1. How do you log somethine to the console?",
        "choices": ["console.log()", "logToConsole()", "log.console()", "None of the above"],
        "answer": "console.log()"
    },

    {
        "question": "2. Inside which HTML element do we put the JavaScript?",
        "choices": ["<js>", "<script>", "<javascript>", "<scripting>"],
        "answer": "<script>"
    },

    {
        "question": "3. What is the proper syntax for an alert box?",
        "choices": ["msgBox()", "msg()", "alertBox()", "alert()"],
        "answer": "alert()"
    },

    {
        "question": "4. Javascript is an _______ language?",
        "choices": ["Object-oriented", "Object-based", "Procedural", "None of the above"],
        "answer": "Object-oriented"
    },

    {
        "question": "5. JSON stands for what?",
        "choices": ["JavaScript Oriented Notation", "JavaScript Object Nuance", "JavaScript Object Notation", "None of the above"],
        "answer": "JavaScript Object Notation"
    },

    {
        "question": "6. Which of the following keywords is used to define a variable in Javascript?",
        "choices": ["var", "let", "Both A and B", "None of the above"],
        "answer": "Both A and B"
    },

    {
        "question": "7. What does the Javascript “debugger” statement do?",
        "choices": ["It will debug all the errors for you", "Acts as a breakpoint in a program", "Return a list of error codes", "All of the above"],
        "answer": "Acts as a breakpoint in a program"
    },

    {
        "question": "8. Boolean refers to what data type?",
        "choices": ["True", "False", "Integer", "Both A and B"],
        "answer": "Both A and B"
    },

    {
        "question": "9. Array items are stored in which type of brackets?",
        "choices": ["[ ]", "{ }", "< >", "( )"],
        "answer": "[ ]"
    },

    {
        "question": "10. How to stop an interval timer in Javascript?",
        "choices": ["clearTimer", "intervalOver", "clearInterval", "None of the Above"],
        "answer": "clearInterval"
    },
]

var questionNumber = 0

var timerNum = document.querySelector("#timer-digit")
var homeScreen = document.querySelector(".home-screen")
var multipleChoice = document.querySelector(".multiple-choice")

var timeLimit = 60
var score = 0
var countdown

var questionTitle

var choiceA
var choiceB
var choiceC
var choiceD

var allScores = []

function startGame() {
    beginCountdown()

    homeScreen.setAttribute ("style", "display: none;")

    multipleChoiceQuestions()
}

function beginCountdown() { 
        countdown = setInterval(function() {
        timerNum.textContent = timeLimit
        timeLimit--

        if (timeLimit <= 0) {
        clearInterval(countdown)
        endGame()
        }
    }, 1000)
    
}

function multipleChoiceQuestions() {
    
    // Replacing text content of question and choices with next set:
    function nextQuestion() {
        if (questionNumber < 9) {
            questionNumber = questionNumber + 1
            questionTitle.textContent = questionArray[questionNumber].question
            
            choiceA.textContent = questionArray[questionNumber].choices[0]
            choiceB.textContent = questionArray[questionNumber].choices[1]
            choiceC.textContent = questionArray[questionNumber].choices[2]
            choiceD.textContent = questionArray[questionNumber].choices[3]
            } else {
                endGame()
            }
    }

    // Displays title of question:
        questionTitle = document.createElement("h2")
        questionTitle.setAttribute("class", "question-title")
        questionTitle.textContent = questionArray[questionNumber].question
        multipleChoice.appendChild(questionTitle)

    // Creates multiple choice buttons:
        for (var i = 0; i < questionArray[questionNumber].choices.length; i++) {
        var choiceButtons = document.createElement("button")
        choiceButtons.setAttribute("class", "choice-buttons")
        choiceButtons.setAttribute("id", "button" + i)
        choiceButtons.textContent = questionArray[questionNumber].choices[i]
        multipleChoice.appendChild(choiceButtons)
    }


    // Targeting each individual multiple choice button:
    choiceA = document.querySelector('#button0')
    choiceB = document.querySelector('#button1')
    choiceC = document.querySelector('#button2')
    choiceD = document.querySelector('#button3')
    
    // Adding event listeners for each button on click:
    choiceA.addEventListener('click', function(event) {

        if (event.target.textContent === questionArray[questionNumber].answer) {
            //CORRECT
                // Adds 10 points to score:
                score = score + 10
                nextQuestion()

            } else {
            //INCORRECT
                
                //Deducts 5 seconds from timer if answer is wrong:
                timeLimit = timeLimit - 5 
                nextQuestion()
            }
    })
    
    choiceB.addEventListener('click', function(event) {

        if (event.target.textContent === questionArray[questionNumber].answer) {
            //CORRECT
                // Adds 10 points to score:
                score = score + 10
                nextQuestion()

            } else {
            //INCORRECT
                
                //Deducts 5 seconds from timer if answer is wrong:
                timeLimit = timeLimit - 5 
                nextQuestion()
            }
    })
    
    choiceC.addEventListener('click', function(event) {

        if (event.target.textContent === questionArray[questionNumber].answer) {
            //CORRECT
                // Adds 10 points to score:
                score = score + 10
                nextQuestion()

            } else {
            //INCORRECT
                
                //Deducts 5 seconds from timer if answer is wrong:
                timeLimit = timeLimit - 5 
                nextQuestion()
            }
    })
    
    choiceD.addEventListener('click', function(event) {

        if (event.target.textContent === questionArray[questionNumber].answer) {
            //CORRECT
                // Adds 10 points to score:
                score = score + 10
                nextQuestion()

            } else {
            //INCORRECT
                
                //Deducts 5 seconds from timer if answer is wrong:
                timeLimit = timeLimit - 5 
                nextQuestion()
            }
        })

}

function endGame() {

    clearInterval(countdown)
    timeLimit = 60
    timerNum.textContent = 60

    choiceA.remove()
    choiceB.remove()
    choiceC.remove()
    choiceD.remove()
    questionTitle.textContent = "Your score is: " + score




    // ADD FORM TO SAVE SCORE HERE
    storeScores()




    var returnHome = document.createElement("button")
    returnHome.setAttribute("class", "choice-buttons")
    returnHome.setAttribute("id", "return-home-button")
    returnHome.textContent = "Return Home"
    multipleChoice.appendChild(returnHome)

    returnHome.addEventListener("click", function(event) {
        resetGame()
    })
}

function resetGame() {
    questionNumber = 0
    score = 0

    multipleChoice.textContent = ""

    homeScreen.setAttribute("style", "flex")
}

function storeScores() {

    var scoresForm = document.createElement("input")
    var scoresButton = document.createElement("button")
    scoresForm.setAttribute("type", "text")
    scoresForm.setAttribute("id", "username")
    scoresForm.setAttribute("class", "initials")
    scoresForm.setAttribute("placeholder", "Enter your name...")
    scoresButton.setAttribute("class", "initials")
    scoresButton.setAttribute("id", "score-btn")
    scoresButton.textContent = "Save Score"
    multipleChoice.appendChild(scoresForm)
    multipleChoice.appendChild(scoresButton)

    
    var localStorageScore = JSON.stringify(score)

    scoresButton.addEventListener('click', function(event) {

        event.preventDefault()
        // On click, save score and name to local storage
        // Might have to save into an array to save multiple set of data
        
        var saveScores = {
            "Name": scoresForm.value,
            "Score": score.toString()
        }

        allScores.push(saveScores)

        localStorage.setItem("Scores", JSON.stringify(allScores))

        var scoreSaved = document.createElement("p")

        scoreSaved.textContent = "Your score has been saved!"

        multipleChoice.appendChild(scoreSaved)

    })
}