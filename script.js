// making some question
const quizData = [
    {
        question: "What is the total of 22 * 12 ?",
        a : '256',
        b : '264',
        c : '246',
        d: '254',
        correct : 'b'
    },
    {
        question: "What is the total of 112 / 8 ?",
        a : '10',
        b : '12',
        c : '9',
        d : '14',
        correct : 'd'
    }, 
    {
        question: "What is the total of 89 + 12 ?",
        a : '101',
        b : '112',
        c : '102',
        d : '104',
        correct : 'a'
    },
    {
        question: "What is the total of 512 - 8 ?",
        a : '501',
        b : '502',
        c : '504',
        d : '509',
        correct : 'c'
    },
    {
        question: "What is the total of 110 * 2 / 5 ?",
        a : '40',
        b : '38',
        c : '52',
        d : '44',
        correct : 'd'
    },
    
];

// getting element from html
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById ('submit');
const quiz_container = document.getElementById ('quiz_container');
const answerElement = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;
loadQuiz();

// get the question from array and fill the element
function loadQuiz (){
    deselectingAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText =currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

// to check if client do not check any radio do not let to next step
function getSelected(){
    let answer = undefined;
    answerElement.forEach((answerElement) =>{
        if (answerElement.checked){
            answer =  answerElement.id;
        }
    });

    return answer;
}

// for deselecting answer when move to next question
function deselectingAnswers(){
    answerElement.forEach((answerElement) =>{
        answerElement.checked =false;
    });
}

submitBtn.addEventListener('click',()=>{
    
    // check to see the answer checked or no
    const answer = getSelected();
    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz(); 
        }
        else{
            // quiz done and show result
            quiz_container.innerHTML = 
            `<h2>Thank You for doing the Quiz
            <br/>
            You answered correctly
            <br/>
            <span>${score} out of ${quizData.length}</span>
            questions</h2>
            <button onclick="location.reload()">Reload</button>`
            quiz_container.style =  "height: 250px; font-size: 25px; text-align: center;";
        }
    }

})
