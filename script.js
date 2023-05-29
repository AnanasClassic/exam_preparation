let firstQuestions = ["Непрерывные функции на компактах. Теорема Вейерштрасса",
"Перестановка членов абсолютно сходящегося ряда",
"Лемма Абеля для последовательностей. Признак Дирихле равномерной сходимости рядов",
"Непрерывность функции, эквивалентность определений непрерывности, непрерывность композиции",
"Теорема Коши-Адамара",
"Признак Лейбница",
"Лемма Абеля для интегралов. Признак Дирихле и Аблея для интегралов.",
"Ряд Тейлора (1+x)^a",
"Лемма Абеля для последовательностей. Признак Абеля равномерной сходимости функционального ряда",
"Полнота пространств R^n и B(E)",
"Теорема Кантора о равномерной сходимости",
"теорема Абеля для степеных рядов",
"Числовые ряды. Необходимое условие сходимости числового ряда. Группировка членов числового ряда",
"Равномерно сходящиеся функциональные последовательности и ряды. Критерий Коши. Признак Вейерштрасса",
"Связь рядов и интегралов ступенчатых функций, интегральный признак сходимости",
"достаточное условие для тейлора",
"Дифференцирование композиции",
"Дифференцируемость предельной функции и почленное дифференцирование ряда",
"Непрерывность предельной функции и суммы ряда",
"Признаки сравнения несобственных интегралов",
"Теорема Коши о произведении абсолютно сходящихся рядов"]
let secondQuestions = [
"Внешняя мера Лебега и ее свойства",
"Теорема о секвенциальной компактности",
"Дифференцирование из Rn в Rm. Связь дифференциала и производной по вектору",
"Неравенство Чебышева, конечность почти всюду интегрируемой функции",
"Ограниченность компакт на метрических простанствах, замкнутные подмножества компакта",
"Критерий измеримости (приближение борелевскими)",
"Дифференцирование суммы степенного ряда",
"Достаточное условие дифференцируемости функции нескольких переменных",
"Критерий измеримости (приближение брусами)",
"Теорема Лебега о мажорированной сходимости",
"Сумма, произведение измеримых функций. Супремум, инфинум. Верхний, нижний предел",
"Связаные множества. Непрерывные функции на связаных множествах. Теорема о промежуточном значении",
"Формула Тейлора для функций многих переменных с остаточным члегом в форме Лагранжа",
"Независимость смешанной производной от порядка дифференциацирования",
"Непрерывность меры Лебега",
"бибип леви",
"Монотонность и линейность интеграла лебега",
"Теорема о приближении измеримой функции простыми",
"Аддитивность интеграла Лебега по функциям, счётная аддитивность по множествам, что-то ещё",
"Теорема Каратеодори",
"Критерий непрерывности"
]

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
    const themeIndex = Math.floor(Math.random() * firstQuestions.length);
    return [firstQuestions[themeIndex], secondQuestions[themeIndex]];
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