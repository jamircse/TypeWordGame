"use strict"
// console.log(datas.length);
// console.log(datas);

var currentWord,timer,level=0;
var point=JSON.parse(localStorage.getItem("point"));
const stepUrl=document.querySelector(".step");
const typyword=document.querySelector(".textfield");;
const pointUrl=document.querySelector(".point");
var time=document.querySelector(".time_left");;

var initTimer=(maxTime)=>{
    timer=setInterval(()=>{
        if(maxTime>0){
            maxTime--;  
            return time.innerText=maxTime;  
        }
        clearInterval(timer);
        gameinit();                 
    },1000);  
}


var  gameinit=()=>{
  initTimer(10);
  const word_length=datas.length
  const randomObj=datas[Math.floor(Math.random()*word_length)];
  const question=document.querySelector(".word_title");
  question.innerText=randomObj.word;
  currentWord=randomObj.word.toLocaleLowerCase();
  typyword.value="";
  typyword.setAttribute("maxLength",currentWord.length);

}

typyword.addEventListener("keyup",()=>{
    const currentType=typyword.value.toLocaleLowerCase();     
    if(currentType==currentWord){
        showMassage('Congrate..','success');
        point++;
        checkpointLevel();
        clearInterval(timer);
        gameinit();   
    }else if(currentType.length==currentWord.length && currentType!=currentWord){
        showMassage('🤣 incurrect ','danger');
        point--;
        if(point<0){
            point=0;
        }
        checkpointLevel();
        clearInterval(timer);
        gameinit();   
    }             
});

var checkpointLevel=()=>{
    pointUrl.innerText=point;
    if(point>14 && point<=25){
        level=1;
    }
    stepUrl.innerText=level;
    localStorage.setItem("point",JSON.stringify(point));
}


var showMassage = (message, status) => {
    var msg = document.querySelector(".msg");
    msg.classList.add(`bg-${status}`);
    msg.innerText = message;
    setTimeout(() => {
        msg.innerText = " ";
        // localStorage.removeItem("msg");
        localStorage.removeItem("status");
        msg.classList.remove(`bg-${status}`);
    }, 2000)
}

gameinit();
