// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
 
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "1. O noktası gelen atma	için ...... gibi davranır.",
        imgSrc : "img/soru3.png",
        choiceA : "serbest uç" ,
        choiceB : "gevşek uç " ,
        choiceC : "sabit uç" ,
        choiceD : "sıkı uç" ,
		correct : "C"
    }	 ,    

    {
        question : "2. Şekildeki dalga serbest uçtan yansıdıktan sonra aşağıdakilerden hangisi gibi olur?",
        imgSrc : "img/soru1.png",
        choiceA : "<img src='img/soru1a.png'>" ,
        choiceB : "<img src='img/soru1b.png'>" ,
        choiceC : "<img src='img/soru1c.png'>" ,
        choiceD : "<img src='img/soru1d.png'>" ,
		correct : "D"
    },     {
        question : "3. Şekildeki dalga sabit uçtan yansıdıktan sonra aşağıdakilerden hangisi gibi olur?  ",
        imgSrc : "img/soru2.png",
        choiceA : "<img src='img/soru2a.png'>" ,
        choiceB : "<img src='img/soru2b.png'>" ,
        choiceC : "<img src='img/soru2c.png'>" ,
        choiceD : "<img src='img/soru2d.png'>" ,
		correct : "B"
    } , 
	{
        question : "4. İnce ipten kalın ipe doğru gelen atma için, <sup>V</sup>g gelen atmanın hızı,  <sup>V</sup>y yansıyan atmanın hızı,  <sup>V</sup>i iletilen atmanın hızı olup, bu hızlar için aşağıdaki ifadelerden hangisi doğrudur? ",
        imgSrc : "img/soru4.png",
        choiceA : "<sup>V</sup>g <sup>=</sup> <sup>V</sup>y<sup> > </sup> <sup>V</sup>i" ,
        choiceB : "<sup>V</sup>g <sup>=</sup> <sup>V</sup>y<sup> < </sup> <sup>V</sup>i" ,
        choiceC : "<sup>V</sup>g <sup>></sup> <sup>V</sup>y<sup>  > </sup> <sup>V</sup>i" ,
        choiceD : "<sup>V</sup>g <sup>></sup> <sup>V</sup>y<sup>  = </sup> <sup>V</sup>i" ,
		correct : "A"
    } 
	 ,     {
        question : "5.İnce ipten kalın ipe doğru gelen atma için, <sup>X</sup>g gelen atmanın genişliği,  <sup>X</sup>y yansıyan atmanın genişliği,  <sup>X</sup>i iletilen atmanın genişliği olup, genişlikler için aşağıdakilerden hangisi doğrudur?",
        imgSrc : "img/soru5.png",
        choiceA : "<sup>X</sup>g <sup>></sup> <sup>X</sup>y<sup>  > </sup> <sup>X</sup>i " ,
        choiceB : "<sup>X</sup>g <sup>=</sup> <sup>X</sup>y<sup> < </sup> <sup>X</sup>i" ,
        choiceC : "<sup>X</sup>g <sup>=</sup> <sup>X</sup>y<sup> > </sup> <sup>X</sup>i" ,
        choiceD : "<sup>X</sup>g <sup>></sup> <sup>X</sup>y<sup>  = </sup> <sup>X</sup>i" ,
		correct : "C"
    } ,     {
        question : "6. İnce ipten kalın ipe doğru gelen atma için, <sup>a</sup>g gelen atmanın genliği,  <sup>a</sup>y yansıyan atmanın genliği,  <sup>a</sup>i iletilen atmanın genliği olup, genlikler için aşağıdakilerden hangisi doğrudur?",
        imgSrc : "img/soru6.png",
        choiceA : "<sup>a</sup>g <sup>></sup> <sup>a</sup>y  <sup>ve</sup> <sup>a</sup>g <sup>></sup> <sup>a</sup>i<sup>  " ,
        choiceB : "<sup>a</sup>g <sup>=</sup> <sup>a</sup>y  <sup>ve</sup> <sup>a</sup>g <sup>></sup> <sup>a</sup>i" ,
        choiceC : "<sup>a</sup>g <sup>=</sup> <sup>a</sup>y  <sup>ve</sup> <sup>a</sup>i <sup>></sup> <sup>a</sup>g" ,
        choiceD : "<sup>a</sup>g <sup>></sup> <sup>a</sup>y  <sup>></sup> </sup> <sup>a</sup>i" ,
		correct : "A"
    } ,     {
        question : "7. Şekildeki O noktası gelen atma	için ...... gibi davranır.",
        imgSrc : "img/soru7.png",
        choiceA : "serbest uç" ,
        choiceB : "gevşek uç " ,
        choiceC : "sabit uç" ,
        choiceD : "sıkı uç" ,
		correct : "A"
    } ,  
	{
        question : "8. Kalın ipten ince ipe doğru gelen atma için, <sup>V</sup>g gelen atmanın hızı,  <sup>V</sup>y yansıyan atmanın hızı,  <sup>V</sup>i iletilen atmanın hızı olup, bu hızlar için aşağıdaki ifadelerden hangisi doğrudur? ",
        imgSrc : "img/soru7.png",
        choiceA : "<sup>V</sup>g <sup>=</sup> <sup>V</sup>y<sup> > </sup> <sup>V</sup>i" ,
        choiceB : "<sup>V</sup>g <sup>=</sup> <sup>V</sup>y<sup> < </sup> <sup>V</sup>i" ,
        choiceC : "<sup>V</sup>g <sup>></sup> <sup>V</sup>y<sup>  > </sup> <sup>V</sup>i" ,
        choiceD : "<sup>V</sup>g <sup>></sup> <sup>V</sup>y<sup>  = </sup> <sup>V</sup>i" ,
		correct : "B"
    } ,     {
        question : "9. Kalın ipten ince ipe doğru gelen atma için, <sup>X</sup>g gelen atmanın genişliği,  <sup>X</sup>y yansıyan atmanın genişliği,  <sup>X</sup>i iletilen atmanın genişliği olup, genişlikler için aşağıdakilerden hangisi doğrudur?",
        imgSrc : "img/soru7.png",
        choiceA : "<sup>X</sup>g <sup>></sup> <sup>X</sup>y<sup>  > </sup> <sup>X</sup>i " ,
        choiceB : "<sup>X</sup>g <sup>=</sup> <sup>X</sup>y<sup> < </sup> <sup>X</sup>i" ,
        choiceC : "<sup>X</sup>g <sup>=</sup> <sup>X</sup>y<sup> > </sup> <sup>X</sup>i" ,
        choiceD : "<sup>X</sup>g <sup>></sup> <sup>X</sup>y<sup>  = </sup> <sup>X</sup>i" ,
		correct : "B"
    }  ,     {
        question : "10. Kalın ipten ince ipe doğru gelen atma için, <sup>a</sup>g gelen atmanın genliği,  <sup>a</sup>y yansıyan atmanın genliği,  <sup>a</sup>i iletilen atmanın genliği olup, genlikler için aşağıdakilerden hangisi doğrudur?",
        imgSrc : "img/soru7.png",
        choiceA : "<sup>a</sup>g <sup>></sup> <sup>a</sup>y  <sup>ve</sup> <sup>a</sup>g <sup>></sup> <sup>a</sup>y<sup>  " ,
        choiceB : "<sup>a</sup>g <sup>=</sup> <sup>a</sup>y  <sup>ve</sup> <sup>a</sup>g <sup>></sup> <sup>a</sup>i" ,
        choiceC : "<sup>a</sup>g <sup>=</sup> <sup>a</sup>y  <sup>ve</sup> <sup>a</sup>i <sup>></sup> <sup>a</sup>g" ,
        choiceD : "<sup>a</sup>i <sup>></sup> <sup>a</sup>g  <sup>></sup> </sup> <sup>a</sup>y" ,
		correct : "D"
    }  ,     {
        question : "11. Atmaların karşılaştıkları anda oluşturdukları atmaya .......... denir.",
        imgSrc : "img/soru8.png",
        choiceA : "bileşke dalga" ,
        choiceB : "bileşke atma" ,
        choiceC : "baş aşağı atma" ,
        choiceD : "baş yukarı atma" ,
		correct : "B"
    } ,
	{
        question : " 12. Yay üzerinde oluşturulan atma şekildeki gibi sabit uca gönderiliyor. Buna göre K ve L noktalarının titreşim yönü için aşağıdakilerden hangisi doğrudur?",
        imgSrc : "img/soru10.png",
        choiceA : '<font size="50">→         →</font>' ,
        choiceB : '<font size="50">←         →</font>' ,
        choiceC : '<font size="50">↑         ↓</font>' ,
        choiceD : '<font size="50">↓         ↑</font>' ,
		correct : "D"
    }
	 ,
	{
        question : " 13. Türdeş bir yayda oluşturulan iki atma birbirine doğru	hareket	ediyor. <b>Atmalar üst üste bindiğinde oluşan bileşke atma nasıl olur?</b>",
        imgSrc : "img/soru13.png",
        choiceA : "<img src='img/soru13b.png'>" ,
        choiceB : "<img src='img/soru13c.png'>" ,
        choiceC : "<img src='img/soru13a.png'>" ,
        choiceD : "<img src='img/soru13d.png'>" ,
		correct : "C"
    }
	 ,
	{
        question : " 14. Türdeş bir yayda oluşturulan iki atma birbirine doğru	hareket	ediyor. <b>Atmalar üst üste bindiğinde oluşan bileşke atma nasıl olur?</b>",
        imgSrc : "img/soru14.png",
        choiceA : "<img src='img/soru14a.png'>" ,
        choiceB : "<img src='img/soru14c.png'>" ,
        choiceC : "<img src='img/soru14b.png'>" ,
        choiceD : "<img src='img/soru14d.png'>" ,
		correct : "B"
    }, 
	{
        question : " 15. Türdeş bir yayda oluşturulan iki atma birbirine doğru	hareket	ediyor. <b>Atmalar üst üste bindiğinde oluşan bileşke atma nasıl olur?</b>",
        imgSrc : "img/soru14-1-15.png",
        choiceA : "<img src='img/soru14-1-15-a.png'>" ,
        choiceB : "<img src='img/soru14-1-15-b.png'>" ,
        choiceC : "<img src='img/soru14b.png'>" ,
        choiceD : "<img src='img/soru14d.png'>" ,
		correct : "A"
    },
	
	
	
	
	
	
	
	
	
	
	{
        question : " 16. Bir kaynağın oluşturduğu periyodik dalgaların konum-zaman grafiği şekildeki gibidir. Bu dalganın periyodu kaç saniyedir? ",
        imgSrc : "img/soru15.png",
        choiceA : "1" ,
        choiceB : "2" ,
        choiceC : "3" ,
        choiceD : "4" ,
		correct : "B"
    },
	{
        question : " 17. Bir kaynağın oluşturduğu periyodik dalgaların konum-zaman grafiği şekildeki gibidir. Bu dalganın genliği kaç santimetredir?",
        imgSrc : "img/soru15.png",
        choiceA : "1" ,
        choiceB : "2" ,
        choiceC : "3" ,
        choiceD : "4" ,
		correct : "D"
    }
	 ,
	{
        question : " 18. Şekildeki yay dalgası üzerindeki X, Y , Z noktalarının titreşim yönleri için aşağıdakilerden hangisi doğrusur? Not: Tabloyu ok işaretleriyle doldurunuz. ( ← ↑ → ↓ ↖ ↗ ↘ ↙ ) ",
        imgSrc : "img/soru18-1-.png",
        choiceA : "↑ ↓ ↑" ,
        choiceB : "↑ ↑ ↓" ,
        choiceC : "↑ ↓ ↓" ,
        choiceD : "↑ ↑ ↑" ,
		correct : "C"
    },
	{
        question : " 19. Şekildeki yay dalgası üzerindeki Y, Z , M noktalarının titreşim yönleri için aşağıdakilerden hangisi doğrusur? Not: Tabloyu ok işaretleriyle doldurunuz. ( ← ↑ → ↓ ↖ ↗ ↘ ↙ ) ",
        imgSrc : "img/soru19-1-.png",
        choiceA : "↑ ↓ ↑" ,
        choiceB : "↓ ↑ ↓" ,
        choiceC : "↑ ↓ ↓" ,
        choiceD : "↑ ↑ ↓" ,
		correct : "D"
    }
	 ,
	{
        question : " 20. Sabit derinlikli ortamdaki su dalgaları için; I. Frekansı zamanla azalmıştır. II. Dalga boyu zamanla artmıştır. III. Dalganın hızı zamanla artmıştır. Yargılarından hangileri kesinlikle doğrudur?",
        imgSrc : "img/soru20-1-.png",
        choiceA : "I doğru, II ve III yanlıştır." ,
        choiceB : "I ve II doğru, III yanlıştır." ,
        choiceC : "II doğru, I ve III yanlıştır." ,
        choiceD : "III doğru, I ve II yanlıştır." ,
		correct : "B"
    }
	 ,
	{
        question : " 21. Şekildeki Doğrusal dalgalar için; I. Kaynağın titreşim frekansı azalmaktadır. II. Kaynaktan uzaklaş<br> tıkça, suyun derinliği artmaktadır. III. Dalgaların dalgaboyu artmak<br> tadır. Yargılarından hangileri kesinlikle doğrudur?",
        imgSrc : "img/soru21-1-.png",
        choiceA : "I doğru, II ve III yanlıştır." ,
        choiceB : "I ve II doğru, III yanlıştır." ,
        choiceC : "II doğru, I ve III yanlıştır." ,
        choiceD : "III doğru, I ve II yanlıştır." ,
		correct : "C"
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
    choiceD.innerHTML = q.choiceD;
    
	
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
		   var audio = new Audio('img/MaryHopkin.mp3');
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
















