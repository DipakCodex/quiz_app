const quizData = [
    {
        question: "What is the full form of HTML?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is the full form of CSS?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    },


     {
        question: "What is the full form of CSS?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    },

    {
        question: "What is the full form of JS?",
        options: ["JavaScript", "JavaSheet", "JustScript", "JScript"],
        answer: "JavaScript"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", selectOption);
        optionsEl.appendChild(li);
    });
}

function selectOption(e) {
    const selected = e.target.textContent;
    if (selected === quizData[currentQuestion].answer) {
        score++;
        e.target.style.backgroundColor = "#a5d6a7"; 
    } else {
        e.target.style.backgroundColor = "#ef9a9a"; 
    }

    Array.from(optionsEl.children).forEach(li => {
        li.removeEventListener("click", selectOption);
    });
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Finished!";
        optionsEl.innerHTML = "";
        resultEl.textContent = `Your Score: ${score} / ${quizData.length}`;
        nextBtn.style.display = "none";
    }
});

// Load first question
loadQuestion();