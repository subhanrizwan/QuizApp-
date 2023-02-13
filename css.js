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
      ques: 'CSS stands for ______',
      a: 'Color Style Sheets',
      b: 'Cascade Sheets Style  ',
      c: 'Cascade Style Sheet',
      d: 'Cascading Style Sheets',
      correct:'d'
    },
    {
      ques: 'What is CSS?',
      a: 'CSS is a style sheet language',
      b: 'CSS is designed to separate the presentation and content, including layout, colors, and fonts',
      c: 'CSS is the language used to style the HTML documents',
      d: 'All of the above',
      correct:'d'
    },
    {
      ques: 'The < link > tag goes inside ?',
      a: 'the title section',
      b: 'the body section',
      c: 'the head section',
      d: 'None of the above',
      correct:'c'
    },
    {
      ques: 'Which property sets the font size of text?',
      a: 'font',
      b: 'font-text',
      c: 'font-size',
      d: ' None of the above',
      correct:'c'
    },
    {
      ques: 'Which CSS property is equivalent for the attribute < font >?',
      a: ' font-family',
      b: 'font-style',
      c: 'color',
      d: 'all of the mentioned',
      correct:'d'
    },
    {
      ques: ' The ___property is used to set the color of the text.',
      a: '. pallet',
      b: 'colour',
      c: 'color',
      d: 'text-decoration',
      correct:'c'
    },
    {
      ques: 'Which is the correct way to apply Styles?',
      a: ' inside an HTML element',
      b: 'inside the section of an HTML page',
      c:' in an external CSS file ',
      d:'all of the mentioned ',
      correct:'d'
    },
    {
      ques: 'The ______ property specifies the type of positioning method used for an element.',
      a: 'position',
      b: 'align',
      c: 'float',
      d: 'padding',
      correct:'a'
    },
    {
      ques: 'Which selector selects the elements that are checked?',
      a: 'E ~ F',
      b: ':checked',
      c: '::after',
      d: 'None of the above',
      correct:'b'
    },
    {
      ques: 'Which type of HTML tag is used to define an internal style sheet?',
      a: '< style >',
      b: '< script >',
      c: '< link >',
      d: '< class > ',
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
          window.location = 'css.html'
  
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
  
  
    