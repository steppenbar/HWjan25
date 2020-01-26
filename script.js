const startButton = document.getElementById("start-btn")
startButton.addEventListener("click", startQuiz)

function starQuiz(){
    console.log("Started")
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")

}

function nextQuestion(){

}

function selectAnswer(){

}

const questions = [
    {
        question: "Who shot first?",
        answers: [
            {text:"Lando", correct: false}
            {text: "Han Solo", correct: true}
        ]
    }
]