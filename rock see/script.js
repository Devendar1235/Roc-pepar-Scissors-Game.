let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoise= () =>{
    // our options are rock,pepar,scissor
    const option=["rock","pepar","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
};
const gameDraw=()=>{
    //console.log("Game was Draw");
    msg.innerText="game was Draw";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin , userChoise,compChoise)=>{
if(userWin)
{
    userScore++;
    userScorepara.innerText=userScore;
    //console.log("You Win!..");
    msg.innerText=`You win!. Your ${userChoise} beats ${compChoise}`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compScorepara.innerText=compScore;
    //console.log("You loss!..");
    msg.innerText=`You lose!. ${compChoise} beats your ${userChoise}`;
    msg.style.backgroundColor="red";
}
}
const playGames= (userChoise) => {
   //console.log("user Choise =",userChoise);
   //compter choise...
   const compChoise=genCompChoise();
   //console.log("Copm Choise =",compChoise);
   if(userChoise ===compChoise)
   {
      //game draw
      gameDraw();
   }
   else{
    userWin=true;
    if(userChoise==="rock")
        // compute choise scissor,pepar
        {
            userWin=compChoise === "pepar" ? false:true;
        }
        else if(userChoise==="pepar")//com choises=  rock,scissor
        {
           userWin=compChoise === "scissor" ? false: true;
        
        }
        else{ //computer choises are rock,pepar
           userWin = compChoise === "rock" ? false:true;
        }
        showWinner(userWin ,userChoise,compChoise);
      }
};
choices.forEach((choice)=>{ 
    //console.log(choise);
   choice.addEventListener("click" , () =>{
    const userChoise=choice.getAttribute("id");
   // console.log("choice was clicked",userChoise);
    playGames(userChoise);
    
   });

});
/*NOTE : all console.log functions are used to better understanding the our 
program to easy to understand.
====> all console.log() function we will see in inspect option through "Console"
*/