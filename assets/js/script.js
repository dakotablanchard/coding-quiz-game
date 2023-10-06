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
    // Displays title of question
    var questionTitle = document.createElement("h2")
        questionTitle.setAttribute("class", "question-title")
        questionTitle.textContent = questionArray[questionNumber].question
        multipleChoice.appendChild(questionTitle)

    // Creates multiple choice buttons 

        for (var i = 0; i < questionArray[questionNumber].choices.length; i++) {
        var choiceButtons = document.createElement("button")
        choiceButtons.setAttribute("class", "choice-buttons")
        choiceButtons.setAttribute("id", "button" + i)
        choiceButtons.textContent = questionArray[questionNumber].choices[i]
        multipleChoice.appendChild(choiceButtons)
    }
    
    // Targeting each individual multiple choice button:
    var choiceA = document.querySelector('#button0')
    var choiceB = document.querySelector('#button1')
    var choiceC = document.querySelector('#button2')
    var choiceD = document.querySelector('#button3')
    
    // Adding event listeners for each button on click:
    choiceA.addEventListener('click', function(event) {

        if (event.target.textContent === questionArray[questionNumber].answer) {
            //CORRECT
                // Adds 10 points to score:
                score = score + 10
                
                // Replacing text content of question and choices with next set:
    
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
    
            } else {
            //INCORRECT
                //Deducts 5 seconds from timer if answer is wrong:
                timeLimit = timeLimit - 5 
            }
    })
    
    choiceB.addEventListener('click', function(event) {

        if (event.target.textContent === questionArray[questionNumber].answer) {
            //CORRECT
                // Adds 10 points to score:
                score = score + 10
                
                // Replacing text content of question and choices with next set:
    
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
    
            } else {
            //INCORRECT
                //Deducts 5 seconds from timer if answer is wrong:
                timeLimit = timeLimit - 5 
            }
    })
    
    choiceC.addEventListener('click', function(event) {

        if (event.target.textContent === questionArray[questionNumber].answer) {
        //CORRECT
            // Adds 10 points to score:
            score = score + 10
            
            // Replacing text content of question and choices with next set:

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

        } else {
        //INCORRECT
            //Deducts 5 seconds from timer if answer is wrong:
            timeLimit = timeLimit - 5 
        }
    })
    
    choiceD.addEventListener('click', function(event) {

        if (event.target.textContent === questionArray[questionNumber].answer) {
            //CORRECT
                // Adds 10 points to score:
                score = score + 10
                
                // Replacing text content of question and choices with next set:
    
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
    
            } else {
            //INCORRECT
                //Deducts 5 seconds from timer if answer is wrong:
                timeLimit = timeLimit - 5 
            }
    })
}

function endGame() {
    console.log("End of game")
}

