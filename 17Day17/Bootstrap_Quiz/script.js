const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
// Get all elements whichever needed
// quizContainer
let quiz=document.getElementById('quiz')
// question
let questionHeading=document.getElementById('questionHeading')
//all otionlist
let optionList=document.querySelectorAll('.optionList')
console.log(optionList)
// Each Optiontext:
let aOption=document.getElementById('aOption')
let bOption=document.getElementById('bOption')
let cOption=document.getElementById('cOption')
let dOption=document.getElementById('dOption')
// button
let submitBtn=document.getElementById('submit')

console.log(quizData)

let currentQuizCount=0;
let score=0;
// console.log(quizData[currentQuizCount])

loadQuiz()
function loadQuiz(){
deSelectOption()
let currentQuizData=quizData[currentQuizCount]
questionHeading.innerText=currentQuizData.question;
aOption.innerText=currentQuizData.a
bOption.innerText=currentQuizData.b
cOption.innerText=currentQuizData.c
dOption.innerText=currentQuizData.d
}
function deSelectOption(){
    optionList.forEach((element)=>element.checked=false)
}

// answerSelection
function getSelected(){
    let selectedanswer;
    optionList.forEach((element)=>{
        // console.log(element.checked)
        if(element.checked){
            selectedanswer=element.id
        }        
    })
return selectedanswer;
}
submitBtn.addEventListener('click',()=>{
    let answer=getSelected()
    console.log(answer)
    if(answer){
        if(answer==quizData[currentQuizCount].correct){
            score++
        }
    }
    //console.log("Button clicked")
    currentQuizCount++;
    //console.log(currentQuizCount)
    if(currentQuizCount<quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML=(
            `<h2> You scored ${score}/${quizData.length}</h2>
            <button id="reload" class="btn btn-success" type="button" onClick="location.reload()>Reload</button> 
           
            ` )
            document.body.style.backgroundImage="url('https://i.ibb.co/frqqx3S/glitterimg.jpg')"
    }
    // https://i.ibb.co/frqqx3S/glitterimg.jpg
})
