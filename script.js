const questions = [
    ["Тема1_Вопрос1", "Тема1_Вопрос2"],
    ["Тема2_Вопрос1", "Тема2_Вопрос2"],
    ["Тема3_Вопрос1", "Тема3_Вопрос2"]
];

let totalScore = 0;
let evaluatedTickets = 0;

const startBtn = document.getElementById("startBtn");
const evaluation = document.getElementById("evaluation");
const ticketInfo = document.getElementById("ticket-info");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const score = document.getElementById("score");

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const skipBtn = document.getElementById("skipBtn");

function getRandomQuestions() {
    const themeIndex = Math.floor(Math.random() * questions.length);
    return [questions[themeIndex][0], questions[themeIndex][1]];
}

function startTest() {
    const [q1, q2] = getRandomQuestions();
    question1.textContent = q1;
    question2.textContent = q2;
    startBtn.style.display = "none";
    evaluation.style.display = "block";
    ticketInfo.style.display = "block";
}

function evaluate(points) {
    resetButtons();
    totalScore += points;
    evaluatedTickets++;

    if(points === 0) {
        btn0.style.backgroundColor = "#d14a4a";
    } else if(points === 1) {
        btn1.style.backgroundColor = "#c1a041";
    } else {
        btn2.style.backgroundColor = "#7ac16f";
    }

    score.textContent = (totalScore / evaluatedTickets).toFixed(2);
    setTimeout(() => {
        const [q1, q2] = getRandomQuestions();
        question1.textContent = q1;
        question2.textContent = q2;
        resetButtons();
    }, 1000);
}

function resetButtons() {
    btn0.style.backgroundColor = "#4a87d3";
    btn1.style.backgroundColor = "#4a87d3";
    btn2.style.backgroundColor = "#4a87d3";
}

function skipTicket() {
    resetButtons();
    const [q1, q2] = getRandomQuestions();
    question1.textContent = q1;
    question2.textContent = q2;
}

startBtn.addEventListener("click", startTest);
btn0.addEventListener("click", () => evaluate(0));
btn1.addEventListener("click", () => evaluate(1));
btn2.addEventListener("click", () => evaluate(2));
skipBtn.addEventListener("click", skipTicket);