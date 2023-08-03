//Wait for DOM content to be loaded before starting the game
//add event listeners to buttons that listen to button clicks

document.addEventListener("DOMContentLoaded",function(){
    let buttons=document.getElementsByTagName("button");

    for(let button of buttons){

        button.addEventListener("click",function(){
            if(this.getAttribute("data-type")==="submit")
                alert("You clicked submit button");
            else{
                let gameType=this.getAttribute("data-type")
                  alert(`You clicked the ${gameType} game type`);
            }
        })
    }
})

/**The main game loop cllaed when the DOM is loaded
 * and after the users answer is processed.
 */
function runGame(){
    let num1=Math.floor(Math.random()*25)+1;
    let num2=Math.floor(Math.random()*25)+1;
}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubtractionQuestion(){

}
function displayMulptiplcationQuestion(){

}
function displayDivisionQuestion(){

}