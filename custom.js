"use strict"
// console.log(datas.length);
// console.log(datas);

var currentWord,timer;
const refreshbtn=document.querySelector(".refresh_word");
const typyword=document.querySelector(".textfield");;
const check_btn=document.querySelector(".btn_check");
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

typyword.addEventListener('keyup',()=>{
    const currentType=typyword.value.toLocaleLowerCase();
     if(currentType==currentWord){
        showMassage('Congrate..','success');
        clearInterval(timer);
        gameinit();   
    }else if(currentType.length==currentWord.length && currentType!=currentWord){
        showMassage('🤣 incurrect ','danger');
        clearInterval(timer);
        gameinit();   
    }
}

check_btn.addEventListener('click',()=>{
    const typyword=document.querySelector(".textfield");;
    const checkword=typyword.value.toLocaleLowerCase();
    if(!checkword){
        showMassage('Please Type Word','danger');
        clearInterval(timer);
        gameinit(); 
    }else if(checkword==currentWord){
        showMassage('Congrate..','success');
        clearInterval(timer);
        gameinit();   
    }else if(checkword!=currentWord){
        showMassage('🤣 incurrect ','danger');
        clearInterval(timer);
        gameinit();   
    }
    
    
});


refreshbtn.addEventListener('click',()=>{
    clearInterval(timer);
    gameinit();
})


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
