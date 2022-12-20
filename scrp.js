const quizData = [
    {
        question: "Who is president of Georgia",
        a: "Giorgi Margvelashvili",
        b: "Salome Zurabishvili",
        c: "Bidzina Ivanishvili",
        d: "Mikheil Saakashvili",
        correct: "b"
    },
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Who is President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Joe Biden",
        d: "Mihai Andrei",
        correct: "c"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Application Programming Interface",
        correct: "a"
    },
    {
        question: "What year was Javascript launched?",
        a: "1996",
        b: "1999",
        c: "1995",
        d: "none of the above",
        correct: "c"
    }
];

let answer = undefined;
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

const atext = document.getElementById("atext");
const btext = document.getElementById("btext");
const ctext = document.getElementById("ctext");
const dtext = document.getElementById("dtext");
const question = document.getElementById("question");
const button = document.getElementById("submit");

let increazeQuestion = 0;
let score = 0;

function innerHTML() {

const allQuizData = quizData[increazeQuestion];
question.innerHTML = allQuizData.question;
atext.innerHTML = allQuizData.a;
btext.innerHTML = allQuizData.b;
ctext.innerHTML = allQuizData.c;
dtext.innerHTML = allQuizData.d;

}
innerHTML();

function isRadioButtonsChecked(){
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
        answer = answerEl.id;            
        }
    });
        return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
       answerEl.checked = false;
    });
}

isRadioButtonsChecked();

button.addEventListener('click', () => {
const radio = isRadioButtonsChecked();
if (radio) {
if(radio === quizData[increazeQuestion].correct) {
    score++;
}
increazeQuestion++;
if(increazeQuestion < quizData.length){
innerHTML();
}else{
    quiz.innerHTML = `You answered correctly ${score}/${increazeQuestion} <button onclick="location.reload()">Reload</button>`;
}
}
deselectAnswers();

});