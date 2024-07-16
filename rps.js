let choice=document.querySelectorAll(".choice");
let compscore=document.querySelectorAll(".compscore p");
let userscore=document.querySelectorAll(".uscore p");
let finalmsg=document.querySelector("#finalmsg");

let sumu=0;
let sumc=0;
choice.forEach((singlechoice)=>{
    singlechoice.addEventListener("click",()=>{
        let userinput=singlechoice.getAttribute("id");
        // console.log("clicked",userinput);
        check(userinput);
    });
   
})

const genValue=()=>{
    let compChoices=["rock","paper","scissors"];
    let compValue=Math.floor(Math.random()*3);
    return compChoices[compValue];
    
}

const check=(userinput)=>{
    console.log("the user input is",userinput);
   let generation= genValue();
   console.log("the choice is",generation);
   let userwin=true;
   
   if(userinput===generation){
    drawGame();
   }
   else{
    if(generation==="rock"){
        userinput==="scissors"?userwin=false:userwin=true;
        userinput==="paper"?userwin=true:userwin=false;
        console.log(userwin);
    }
    else if(generation==="scissors"){
        userinput==="rock"?userwin=true:userwin=false;
        userinput==="paper"?userwin=false:userwin=true;
        console.log(userwin);    
    }
    else if(generation==="paper"){
        userinput==="rock"?userwin=false:userwin=true;
        userinput==="scissors"?userwin=true:userwin=false; 
        console.log(userwin);   
    }
    updatescore(userwin,userinput,generation);
   }

    
}
const drawGame=()=>{
    console.log("the game is draw");
    finalmsg.innerText="Its a draw";
    finalmsg.style.backgroundColor="9E4770";

}



const updatescore=(userwin,userinput,generation)=>{
    
    if(userwin==true){
        sumu=sumu+1;
        userscore[1].innerText=sumu;
        finalmsg.innerText=`You Win, your ${userinput} beat the ${generation}` ;
        finalmsg.style.backgroundColor="green";
        
    }
    else{
        sumc=sumc+1;
        compscore[1].innerText=sumc;
        // finalmsg.innerText="You lose";
        finalmsg.innerText=`You Lose, your ${userinput} lost to the ${generation}` ;
        finalmsg.style.backgroundColor="red";
    }
}
