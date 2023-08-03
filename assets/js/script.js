//Wait for DOM content to be loaded before starting the game
//add event listeners to buttons that listen to button clicks

document.addEventListener("DOMContentLoaded",function(){
    let buttons=document.getElementsByTagName("button");

    for(let button of buttons){

        button.addEventListener("click",function(){
            if(this.getAttribute("data-type")==="submit"){
                alert("You clicked submit button");
            }else{
                let gameType=this.getAttribute("data-type")
                  runGame(gameType);
            }
        })
    }
    runGame(addition);
})

/**The main game loop cllaed when the DOM is loaded
 * and after the users answer is processed.
 */
function runGame(gameType){
    //creates two random numbers between 1 and 25. 
    let num1=Math.floor(Math.random()*25)+1;
    let num2=Math.floor(Math.random()*25)+1;

    if(gameType === "addition"){
        displayAdditionQuestion(num1,num2);
    }else{
        alert(`Unknown Game type ${gameType}`);
        throw(`unknown Game type ${gameType}.Aborting `)
    }
}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(Operand1,Operand2){
    document.getElementById("operand1").textContent = Operand1;
    document.getElementById("operand2").textContent = Operand2;
    document.getElementById("operator").textContent = "+";

}
function displaySubtractionQuestion(){

}
function displayMulptiplcationQuestion(){

}
function displayDivisionQuestion(){

}