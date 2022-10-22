let playerScore=0;
let tieScore=0;
let computerScore=0;
const computerscore_span=document.getElementById("computer-score");
const playerscore_span=document.getElementById("user-score"); 
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
function game(userChoice){
    const computerChoice=getComputerChoice();
    if (userChoice=="rock" && computerChoice=="scissors" 
    || userChoice=="paper" && computerChoice=="rock" 
    || userChoice=="scissors" && computerChoice=="paper"){ 
       playerScore++;
     playerscore_span.innerHTML=playerScore;
     result_div.innerHTML=userChoice +" "+"beats"+" "+computerChoice+".You win!";
    }
        else if (userChoice=="rock" && computerChoice=="paper"
        || userChoice=="scissors" && computerChoice=="rock" 
        || userChoice=="paper" && computerChoice=="scissors"){
        computerScore++;
        computerscore_span.innerHTML=computerScore;
        result_div.innerHTML=computerChoice +" "+"beats"+" "+userChoice+".You lose!";
        }
            else if (userChoice  == computerChoice){
            tieScore++;
            } 

}
function main(){
    rock_div.addEventListener('click',function(){
        game("rock");
    })
    paper_div.addEventListener('click',function(){
        game("paper");
    })
    scissors_div.addEventListener('click',function(){
        game("scissors");
    })   
}
main();
 //////////////////////////////////////////////////////////////////////////////// 






//   //console.log(playRound());
//     function game() {
   
//         for (let i = 0; i <5; i++) { 
//             console.log(playRound()); 
//                 }
//                     if (playerScore>computerScore){
//                         return "You win this game";
//                     }
//                         if (playerScore==computerScore){
//                         return "This game is a tie";
//                         }
//                     else{
//                         return "You lose this game";
//                     }
//        }
//       // console.log(game());
