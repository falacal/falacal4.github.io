﻿// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
 
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "1.Suda çözündüğünde OH<sup>-</sup> iyonu veren maddelere ...........  denir.",
        imgSrc : "img/dusun.png",
        choiceA : "Asit",
        choiceB : "Baz",
        choiceC : "Tuz",
		correct : "B",
    },     {
        question : "2. Maddelerin tuz ve su oluşturdukları tepkime türüne   ...........  denir.",
        imgSrc : "img/dusun.png",
        choiceA : "Nötralleşme",
        choiceB : "Sentez (oluşum)",
        choiceC : "Analiz (Ayrışma)",
		correct : "A"
    }
	,	    {
        question : "3. Maddelerin oksijenle tepkimesine  ........... denir.",
        imgSrc : "img/dusun.png",
        choiceA : "Çözünme",
        choiceB : "Yanma",
        choiceC : "timsah",
		correct : "B"
    },      {
        question : "4.  Suda çözündüğünde H<sup>+</sup> iyonu veren maddelere ........... denir.",
        imgSrc : "img/dusun.png",
        choiceA : "Asit",
        choiceB : "Baz",
        choiceC : "Tuz",
		correct : "A"
    },        { 
        question : "5. Normal koşullarda 44,8 litre  gazın mol sayısı ............  olur.",
        imgSrc : "img/dusun.png",
        choiceA : "bir",
        choiceB : "iki",
        choiceC : "üç ",
		correct : "B"
    },
	
		
	
	{
        question : "6.  Maddelerin kendisinden daha basit maddeleri oluşturma tepkimesine  ...........  denir.",
        imgSrc : "img/dusun.png",
        choiceA : "Nötralleşme",
        choiceB : "Sentez (oluşum)",
        choiceC : "Analiz (Ayrışma)",
		correct : "C"
    },	    {
        question : "7. Bağıl atom kütlesi için referans alınan element ............ dır/dir/dur",
        imgSrc : "img/dusun.png",
        choiceA : "flor",
        choiceB : "oksijen",
        choiceC : "karbon",
		correct : "C"
    } , 
 	     
 	    {
        question : "8. Katlı oranlar kanununu ileri süren bilim insanı  kimdir?",
        imgSrc : "img/dusun.png",
        choiceA : "Proust",
        choiceB : "Lavoisier",
        choiceC : "Dalton",
		correct : "C"
    } 
	, 
 	    {
        question : "9. Çözünme - çökelme tepkimelerinde çözeltide kalan iyonlara  verilen isim?",
        imgSrc : "img/dusun.png",
        choiceA : "OH iyonları",
        choiceB : "H iyonları ",
        choiceC : "seyirci",
		correct : "C"
    } 
	, 
 	    {
        question : "10. Elementlerin birleşerek bir bileşiği oluşturdukları tepkimelere  ...........  denir.",
        imgSrc : "img/dusun.png",
        choiceA : "Nötralleşme",
        choiceB : "Sentez (oluşum)",
        choiceC : "Analiz (Ayrışma)",
		correct : "B"
    } 
	, 
 	    {
        question : "11. Kütlenin kornumu kanununu  ileri süren bilim insanı? ",
        imgSrc : "img/dusun.png",
        choiceA : "Proust",
        choiceB : "Lavoisier",
        choiceC : "Dalton",
		correct : "B"
    } 
	, 
 	    {
        question : "12. Asit baz tepkimelerinde oluşan maddelerden biri?",
        imgSrc : "img/dusun.png",
        choiceA : "kalay",
        choiceB : "C<sub>2</sub>H<sub>4</sub>",
        choiceC : "tuz",
		correct : "C"
    } 
	, 
 	    {
        question : "13. Bir tane karbon atomunun on ikide birine ne denir? ",
        imgSrc : "img/dusun.png",
        choiceA : "akb",
        choiceB : "1 mol",
        choiceC : "molarite",
		correct : "A"
    } 
	, 
 	    {
        question : "14. Tepkimede az olan maddeye ne denir?",
        imgSrc : "img/dusun.png",
        choiceA : "ürün",
        choiceB : "sınırlayıcı",
        choiceC : "artan",
		correct : "B"
    } 
	, 
 	    {
        question : "15. Tepkimede kullanılmadan kalan maddeye denir",
        imgSrc : "img/dusun.png",
        choiceA : "ürün",
        choiceB : "sınırlayıcı",
        choiceC : "artan",
		correct : "C"
    } 
	
	, 
 	    {
        question : "16. Hidrojen ve oksijen elementlerinden su molekülünün oluşması tepkimesine tepkimesi ........ denir. ",
        imgSrc : "img/dusun.png",
        choiceA : "sentez ",
        choiceB : "analiz",
        choiceC : "tren ",
		correct : "A"
    } 
	, 
 	    {
        question : "17. H<sub>2</sub> + S → H<sub>2</sub>S <br> Yukarıdaki tepkime türünü bulunuz",
        imgSrc : "img/dusun.png",
        choiceA : "sentez ",
        choiceB : "analiz",
        choiceC : "yanma ",
		correct : "A"
    } 
	, 
 	    {
        question : "18. HI + KOH → KI + H<sub>2</sub>O <br> Yukarıdaki tepkime türünü bulunuz ",
        imgSrc : "img/dusun.png",
        choiceA : "analiz ",
        choiceB : "asit-baz",
        choiceC : "yanma ",
		correct : "B"
    } 
	
	, 
 	    {
        question : "19. H<sub>2</sub> + 1/2 O<sub>2</sub> → H<sub>2</sub>O <br> Yukarıdaki tepkime türünü bulunuz ",
        imgSrc : "img/dusun.png",
        choiceA : "analiz ",
        choiceB : "sentez",
        choiceC : "yanma ",
		correct : "C"
    }, 
 	    {
        question : "20. Aşağıdaki maddelerden hangisine sabit oranlar kanunu uygulanamaz?",
        imgSrc : "img/dusun.png",
        choiceA : "Çelik",
        choiceB : "Kezzap",
        choiceC : "Su",
		correct : "B"
    } 
 
	
 
	
 
	


	
// 10 Doğru/Yanlış Sorusu select all elements	
	
	
	
	
	
	
	
	
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 120; // 120 s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    
	
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render



// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
	document.getElementById(runningQuestion).innerHTML = " ";
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
	document.getElementById(runningQuestion).innerHTML = "D";
}

// answer is Wrong
function answerIsWrong(){
	document.getElementById(runningQuestion).innerHTML = " ";
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
	document.getElementById(runningQuestion).innerHTML = "Y";
}

 // score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    	if (scorePerCent < 85 ) {
		   var audio = new Audio('img/basaramadim-.mp3');
		   audio.play();
	     }
		 
		 if (scorePerCent > 85 ) {
		   var audio = new Audio('img/Rasputin.mp3');
		   audio.play();
	     } 
		 
		 
		 
		 
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
			  (scorePerCent >= 10) ? "img/1.png" :
			   
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>%"+ scorePerCent + "</br>" +    "</br>" + "<button class='button' onClick='window.location.href=window.location.href' >"  + "Tekrarla" + "</button>"  +                 "</p>";
	
	 
}

    



 



function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = (120-count)+" saniye"    ;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}
















