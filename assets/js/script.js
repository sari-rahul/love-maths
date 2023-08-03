//Wait for DOM content to be loaded before starting the game
//add event listeners to buttons that listen to button clicks

document.addEventListener("DOMContentLoaded",function(){
    let buttons=document.getElementsByTagName("button");

      for(let button of buttons){
          button.addEventListener("click",function() {
             if(this.getAttribute("data-type")==="submit"){
                checkAnswer();
            }else{
                let gameType=this.getAttribute("data-type");
                  runGame(gameType);
                }
           });
        }

    document.getElementById("answer-box").addEventListener("keydown",function(event){
        if(event.key === "Enter"){
            checkAnswer();
        }
    })    
    runGame("addition");

});

/**The main game loop called when the DOM is loaded
 * and after the users answer is processed.
 */
function runGame(gameType){

    document.getElementById("answer-box").value ="";
    document.getElementById("answer-box").focus();

    //creates two random numbers between 1 and 25. 
    let num1=Math.floor(Math.random()*25)+1;
    let num2=Math.floor(Math.random()*25)+1;

    if(gameType === "addition"){
        displayAdditionQuestion(num1,num2);
    }else if (gameType === "multiply"){
        displayMulptiplcationQuestion(num1,num2);
    }else if (gameType ==="subtract" ){
        displaySubtractionQuestion(num1,num2);
    }else if (gameType ==="division"){
        displayDivisionQuestion(num1,num2);
    }else{
        alert(`Unknown Game type ${gameType}`);
        throw(`unknown Game type ${gameType}.Aborting `)
    }
}
/**
 * checks and compares the users answer with the calculated answer.
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();

    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect){
        alert("Hey!You got it right :D")
        incrementScore();
    }else{
        alert(`Awww...You answered ${userAnswer}.The correct answer is ${calculatedAnswer[0]}!`)
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}
/**
 * get operands and operators from DOM 
 * and calculates the correct answer 
 */
function calculateCorrectAnswer(){
      
let operand1 = parseInt(document.getElementById("operand1").innerText);
let operand2 = parseInt(document.getElementById("operand2").innerText);

let operator = document.getElementById("operator").innerText;

if(operator === "+"){
   return[ operand1 + operand2,"addition"]
}else if (operator === "x"){
  return [ operand1 * operand2, "multiply"]
} else if (operator === "-"){
  return [operand1-operand2,"subtract"]
} else if (operator === "/"){
    return[operand1/operand2,"division"]
}else { 
    alert(`Unimplemented operator ${operator}`);
    throw(`Unimplemented operator ${operator} Aborting!`)
}

}
/**
 * gets score fron DOM and increments it by 1 and displays back
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * increases the incorrect answer number from DOM and displaysit back
 */
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}
function displayAdditionQuestion(Operand1,Operand2){
    document.getElementById("operand1").textContent = Operand1;
    document.getElementById("operand2").textContent = Operand2;
    document.getElementById("operator").textContent = "+";

}
function displaySubtractionQuestion(Operand1,Operand2){
    document.getElementById("operand1").textContent = Operand1 > Operand2 ? Operand1 :Operand2;
    document.getElementById("operand2").textContent = Operand1 > Operand2 ? Operand2 :Operand1;
    document.getElementById("operator").textContent = "-";
}
function displayMulptiplcationQuestion(Operand1,Operand2){
    document.getElementById("operand1").textContent = Operand1;
    document.getElementById("operand2").textContent = Operand2;
    document.getElementById("operator").textContent = "x";

}
function displayDivisionQuestion(Operand1,Operand2){
    Operand1=Operand1*Operand2;

    document.getElementById("operand1").textContent = Operand1;
    document.getElementById("operand2").textContent = Operand2;
    document.getElementById("operator").textContent = "/";
}