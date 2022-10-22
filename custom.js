"use strict"
// console.log(datas.length);
// console.log(datas);

var currentWord,timer,currect=0,wrong=0,totaltime;
var startbtn=document.querySelector(".btn_start");
const wrongType=document.querySelector(".step");
const typyword=document.querySelector(".textfield");;
const CurrectType=document.querySelector(".point");
var time=document.querySelector(".time_left");;



var initTimer=(maxTime)=>{
    timer=setInterval(()=>{
        typyword.disabled = false;
        if(maxTime>0){
            maxTime--;  
            return time.innerText=maxTime;  
        }else{
           typyword.disabled = true; 
        }
        
//        clearInterval(timer);
//        gameinit();             
    },1000);  
}

startbtn.addEventListener("click",()=>{
    gameinit();
    currect=0;wrong=0;
    clearInterval(timer);
    initTimer(60);
    startbtn.innerText="Restart";
})
var  gameinit=()=>{
//  initTimer(60);
  showResult();
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
        currect++;
        showResult();
//        clearInterval(timer);
        gameinit();   
    }else if(currentType.length==currentWord.length && currentType!=currentWord){
        showMassage('🤣 incurrect ','danger');
        wrong++;
        showResult();
//        clearInterval(timer);
        gameinit();   
    }             
});


var showResult=()=>{
    CurrectType.innerText=currect;
    wrongType.innerText=wrong;
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

