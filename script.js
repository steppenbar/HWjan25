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
      answers: {
        1: "Lando",
        2: "Greedo",
        3: "Han Solo",
        4: "Bossk",
        5: "None of the above",
      },
      correctAnswer: "3"
    },   
    
    {
      question: "What is the best Guitar Amplifier",
      answers: {
        1: "Hiwatt DR-103",
        2: "Marshall JCM800",
        3: "Gorilla combo",
        4: "Ampeg V4",
        5: "None of the above",
      },
      correctAnswer: "1"
    },
    {
      question: "Who is the thing?",
      answers: {
        1: "MacReady",
        2: "Dr. Blair ",
        3: "The dog",
        4: "Childs",
        5: "nobody trusts anybody now and we're all very tired",
      },
      correctAnswer: "5"
    }
    {
        question: "Who is not part of the fellowship?",
        answers: {
          1: "Gandalf",
          2: "Samwise",
          3: "Saruman",
          4: "Gimli",
          5: "Legolas",
        },
        correctAnswer: "3"
      }
  ];