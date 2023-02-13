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
      ques: 'What does HTML stand for?',
      a: 'Home Tool Markup Language',
      b: 'Hyper Link and Text Markup Language',
      c: 'Hyper Text Markup Language',
      d: 'Hyper Text Mokup Language',
      correct:'c'
    },
    {
      ques: 'Choose the correct HTML element for the largest heading:',
      a: '< heading >',
      b: '< head >',
      c: '< h6 >',
      d: '< h1 >',
      correct:'d'
    },
    {
      ques: 'What is the correct HTML element for inserting a line break?',
      a: '< br >',
      b: '< break >',
      c: '< Br >',
      d: '< break line >',
      correct:'a'
    },
    {
      ques: 'Who is the father of HTML?',
      a: 'Rasmus Lerdorf',
      b: 'Tim Berners-Lee',
      c: 'Brendan Eich',
      d: 'Sergey Brin',
      correct:'b'
    },
    {
      ques: 'HTML tags are used to describe document ___.',
      a: 'definition',
      b: 'language',
      c: 'content',
      d: 'model',
      correct:'c'
    },
    {
      ques: ' HTML program is saved using ___ extension.',
      a: '.htmn',
      b: '.html',
      c: '.htms',
      d: '.htnl',
      correct:'b'
    },
    {
      ques: 'Which is used to open the document in new window ?',
      a: '< a target="_blank">Link </a >',
      b: '< a target="_top">Link </a >',
      c:' < a target="_new">Link </a > ',
      d:' < a target="_parent">Link </a > ',
      correct:'a'
    },
    {
      ques: 'Which works similar to < b > element?',
      a: '< i >',
      b: '< em >',
      c: '< blockquote >',
      d: '< strong >',
      correct:'d'
    },
    {
      ques: 'Which tag is used to divide the HTML document into the paragraphs ?',
      a: 'paragraph',
      b: 'par',
      c: 'p',
      d: 'pg',
      correct:'c'
    },
    {
      ques: 'The < a > tag in HTML stands for',
      a: 'Anchor Tag',
      b: 'Active Tag',
      c: 'Action Tag ',
      d: 'none of the above',
      correct:'a'
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
          window.location = 'htmlquiz.html'
  
      }
      
      function BackHome(){
        let HomeBtn=document.getElementById('HomeBtn')
        HomeBtn.style.backgroundColor = 'rgb(236, 236, 236)'
        let loader1 = document.getElementById('loader4')
        
        loader1.style.display = 'block'
        let mainCont = document.getElementById('mainCont4')
          mainCont.style.display = 'none'

        setTimeout(()=>{
          let load = document.getElementById('loader4')
          load.innerHTML = 'none'

         
          window.location = 'index.html'
        },1000)
      }
  
  
    