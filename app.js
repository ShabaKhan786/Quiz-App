
const quiz = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        ans1text: "<js>",
        ans2text: "<Scripting>",
        ans3text: "<script>",
        ans4text: "<javascript>",
        answer: "<script>"

    },

    {
        question: "In what year did the Great October Socialist Revolution take place?",
        ans1text: "1917",
        ans2text: "1923",
        ans3text: "1914",
        ans4text: "1920",
        answer: "1917"

    },

    {
        question: "What is the largest lake in the world?",
        ans1text: "Caspian Sea",
        ans2text: "Baikal",
        ans3text: "Lake Superior",
        ans4text: "Ontario",
        answer: "Baikal"
    },



    {
        question: "Which planet in the solar system is known as the “Red Planet",
        ans1text: "Venus",
        ans2text: "Earth",
        ans3text: "Mars",
        ans4text: "Jupiter",
        answer: "Mars"
    }


]

const question = document.querySelector("#quiz-question")
console.log(question);
const option1 = document.getElementById("option-a-text")
const option2 = document.getElementById("option-b-text")
const option3 = document.getElementById("option-c-text")
const option4 = document.getElementById("option-d-text")

const answer = document.querySelectorAll('.answer')
const submit = document.querySelector("#submit")

let currQuestion = 0;
let score = 0
// console.log(quiz[currQuestion].question);
// console.log(quiz[currQuestion].ans1text);
// console.log(quiz[currQuestion].ans2text);
// console.log(quiz[currQuestion].ans3text);

question.textContent = quiz[currQuestion].question;


option1.textContent = quiz[currQuestion].ans1text
option2.textContent = quiz[currQuestion].ans2text
option3.textContent = quiz[currQuestion].ans3text
option4.textContent = quiz[currQuestion].ans4text


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    console.log(checkedAns.nextElementSibling.textContent);
    
    
    if (checkedAns == null) {
        alert("select answer first")
    }
    else {
        if (checkedAns.nextElementSibling.textContent === quiz[currQuestion].answer)
            score++;
    }
    checkedAns.checked = false;
    currQuestion++;
    if (currQuestion < quiz.length) {
        question.textContent = quiz[currQuestion].question;


        option1.textContent = quiz[currQuestion].ans1text
        
        option2.textContent = quiz[currQuestion].ans2text
        option3.textContent = quiz[currQuestion].ans3text
        option4.textContent = quiz[currQuestion].ans4text
    }else{
        alert("Your score is " + score + " out of "+quiz.length)
        location.reload()
    }
})





