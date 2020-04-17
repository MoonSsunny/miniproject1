'use strict';
// const display = document.getElementById("result");
const resultText =document.querySelector(".text") ;
let numberCheck = false;

function add(num){
    // console.log(display.value)
   
    resultText.innerText +=num;
  
}

// function clear(){

//     display.value = "";
//  }
//clear 라는 이름의 함수는 사용이 불가함 = 이미 존재하는 함수 !!! reset으로 바꿔줌


function reset(){

    resultText.innerText = ''
    // display.value = "";

  
}


function calcResult(){

    
    let result = resultText.innerHTML;
    console.log(result)
    let finalResult = eval(result);
    result= finalResult;
    resultText.innerText=finalResult;
    // console.log(finalResult)
    
}


