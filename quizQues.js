setTimeout(()=>{
  let loader1 = document.getElementById('loader4')
  loader1.style.display = 'none'
  
  let mainCont = document.getElementById('mainCont4')
  mainCont.style.display = 'block'
  },1000)

// function javascript() {
//   window.location = 'quizQues.html'
// }
  

let Questions = [
  {
    ques: 'Where is the correct place to insert a JavaScript?',
    a: 'The body section',
    b: 'The head section',
    c: 'The Container section',
    d: 'The head section and the body section are correct',
    correct:'d'
  },
  {
    ques: 'What is the correct syntax for referring to an external script called "sub.js"?',
    a: 'script name="sub.js"',
    b: 'script src="sub.js"',
    c: 'script href="sub.js"',
    d: 'script value="sub.js"',
    correct:'b'
  },
  {
    ques: 'To insert a JavaScript into an HTML page, which tag is used?',
    a: '< script=â€™javaâ€™ >',
    b: '< script >',
    c: '< javascript >',
    d: '< js >',
    correct:'b'
  },
  {
    ques: 'How do you write "Hello World" in an alert box?',
    a: 'msg("Hellow World")',
    b: 'msgBox("Hellow World")',
    c: 'alert("Hellow World")',
    d: 'alertBox("Hellow World")',
    correct:'c'
  },
  {
    ques: 'Which of the below is used in Java script to insert special characters?',
    a: '&',
    b: '/',
    c: '-',
    d: '%',
    correct:'b'
  },
  {
    ques: 'How does Java Script store dates in objects of Date type?',
    a: 'The number of days since January 1st, 1900',
    b: 'The number of seconds since January 1st, 1970',
    c: 'The number of milliseconds since January 1st, 1970',
    d: 'The number of picoseconds since January 1st, 1970',
    correct:'c'
  },
  {
    ques: 'How you can add a Comment in javaScript',
    a: '// This is comment',
    b: " 'This is comment ",
    c:' < !-- This is comment -- > ',
    d:' /* This is a comment */ ',
    correct:'a'
  },
  {
    ques: 'What language defines the behavior of a web page?',
    a: 'Java Script',
    b: 'HTML',
    c: 'CSS',
    d: 'XML',
    correct:'a'
  },
  {
    ques: 'How do you create a function in JavaScript?',
    a: 'function = myFunction',
    b: 'function:myFunction',
    c: 'function(myFunction)',
    d: 'function myFunction',
    correct:'d'
  },
  {
    ques: 'What is the correct way to write a javaScript array?',
    a: 'var array = ["red"]["green"]["blue"]',
    b: 'var array = ("red","green","blue")',
    c: ' var array = ["red","green","blue"] ',
    d: 'var array = "red","green","blue"',
    correct:'c'
  },

]


let totalTime = 30
let sec = totalTime
let secHeading = document.getElementById('sec')
var Timer;



let Quest= document.getElementById('Question')
var submit = document.getElementById('Submit_btn')
let options = document.querySelectorAll('.options')
// console.log(options[0].nextElementSibling);

let total = Questions.length
let QuestCount = 0
let right = 0,
wrong = 0;

let LoadQuest=()=>{
  if(QuestCount === total){
  return endQuiz();
  }
  // sec = 0
  clearInterval(Timer)
  Start();
  let QuestList = Questions[QuestCount]
  Quest.innerHTML =`Q${QuestCount+1})${QuestList.ques}`

  // console.log(options);
  options[0].nextElementSibling.innerHTML = QuestList.a
  options[1].nextElementSibling.innerHTML = QuestList.b
  options[2].nextElementSibling.innerHTML = QuestList.c
  options[3].nextElementSibling.innerHTML = QuestList.d

}
LoadQuest();

  


function Submitbtn(){
    let QuestList = Questions[QuestCount]
  const Answer = getAnswers() 
  // console.log(Answer);
  if(Answer){

    if(Answer === QuestList.correct){
       right ++;
       //  console.log(right);
       
       QuestCount++;
       LoadQuest();
       clearInterval(Timer)
       sec = totalTime
       Start();
       reset();
     
     }else{
       wrong ++;
 
       QuestCount++;
       LoadQuest();
       clearInterval(Timer)
       sec = totalTime
       Start();
       reset();
      
     }
  }else{
    // alert("please select any option")
    swal("you can't move the next question", "please select any option", "error");
  }
    
    
  }
  
  function getAnswers(){
      let checkAns;
      options.forEach((input) =>{
        if(input.checked){
          checkAns = input.value;
          // console.log(checkAns);
        }
      });
      return checkAns;
    }
  
   
    function reset(){
      options.forEach((input) =>{
        if(input){
         input.checked = false
        }
      });
    
    }
      
    function timer(){
 
      secHeading.innerHTML = sec
      sec--;
      
      if(sec == 0){
    
        setTimeout(()=>{
  
          wrong++;
          
          QuestCount++;
          sec = totalTime
          LoadQuest();
          reset();
        },1000)
       
      }
    // }  
  }
  
  function Start(){
  Timer = setInterval(timer,1000)
  }

  function endQuiz(){

    let header = document.querySelector('.card-header').innerHTML = ""
    let cardHeader = document.getElementById('cardHeader').style.borderBottom = '1px solid #54C7C3'
    // let mainLogo = document.getElementById('mainLogo').innerHTML = ""
    let textHeading = document.getElementById('quizRes')
    textHeading.innerHTML = '<h1 id="resultText" >Quiz Result</h1>'
    let mainBox = document.querySelector('.card-body1')
    mainBox.innerHTML = `
    <h3 id="res">Total Questions ${total}</h3><br>
    <h3 id="res">Correct Answers ${right}</h3><br>
  
    <div class ="btnPrnt">
    <button id="RestartBtn" onClick="Restart()">Restart Quiz</button>
    <button id="HomeBtn" onClick="BackHome()" >Go to Home</button>
    </div>
    `
    }


      function Restart(){
        let RestartBtn=document.getElementById('RestartBtn')
        RestartBtn.style.backgroundColor = 'rgb(236, 236, 236)'
        window.location = 'quizQues.html'

    }
    
    function BackHome(){
      let HomeBtn=document.getElementById('HomeBtn')
      HomeBtn.style.backgroundColor = 'rgb(236, 236, 236)'
      window.location = 'index.html'
    }


  