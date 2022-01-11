const quizData = [
    {
        question: 'How old is Jaspreet ? ',
        a: '10',
        b : '17',
        c : '19',
        d: '110',
        correct : 'c'
    },
    {
        question: 'The date talk.wid.tech started posting ? ',
        a: '10 june 2020',
        b : '14 July 2020',
        c : '1 Jan 2021',
        d: '5 Oct 2020',
        correct : 'b'
    },
    
    {
        question: 'Where is Jaspreet currently Studying?',
        a: 'Bennett University',
        b : 'IIT bombay',
        c : 'NIT bhopal',
        d: 'MNIT',
        correct : 'a'
    },
   
    {
        question: 'Birthday Date of Jaspreet? ',
        a: '3 june 2002',
        b : '5 April 2002',
        c : '4 Aug 2002',
        d: '5 Sep 2002',
        correct : 'c'
    },
   
]

const quiz = document.getElementById('quiz');
const answerEl =  document.querySelectorAll('.answer');
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbtn = document.getElementById('submit');
let currrentquiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselect();
    const currentQuizData = quizData[currrentquiz];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}
function getSelected() {
    const answerEl =  document.querySelectorAll('.answer');
    
    let answer = undefined;
    answerEl.forEach((answerEl) =>{
        
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    })

    return answer;
}


function deselect() {
    answerEl.forEach((answerEl) =>{
        answerEl.checked = false;
    })
}
submitbtn.addEventListener("click" , () =>{
    
   
    
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer == quizData[currrentquiz].correct){
            score++;
        }
        currrentquiz++;
        if(currrentquiz < quizData.length-1){

            loadQuiz();
        }
    
        else{
           
            quiz.innerHTML = `<h2> Your Score is : 
            ${score}/${quizData.length} </h2>
            <button onclick ="location.reload()"> Reload </button>`;

        }
    }
    
   
})