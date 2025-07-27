let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.getElementById("message");
const userScoreDisplay=document.querySelector("#user-score");
const computerScoreDisplay=document.querySelector("#computer-score");
const genComputerChoice=() => {
// rock,paper,scissor
const options=["rock", "paper", "scissor"];
// Generate a random number between 0 and 2
const RandomIndex=Math.floor(Math.random()*3);
return options[RandomIndex];
};

const drawGame=() => {
    console.log("It's a draw!");
    msg.innerText="It's a draw!";
    msg.style.backgroundColor="yellow";
};

const showWinner=(userWin) => {
    if(userWin){
        userScore++;
        userScoreDisplay.innerText=userScore;
        console.log("You win!");
        msg.innerText="You win!";
        msg.style.color="green";
        msg.style.backgroundColor="lightgreen";
       // userScore++;
    }else{
        computerScore++;
        computerScoreDisplay.innerText=computerScore;
        console.log("Computer wins!");
        msg.innerText="Computer wins!";
        msg.style.color="black";
        msg.style.backgroundColor="red";
       // computerScore++;
    }
};

const playGame=(userChoice) => {
    console.log("user choice is: ", userChoice);
    // Generate computer choice
    const computerChoice=genComputerChoice();
    console.log("computer choice is: ", computerChoice);


if(userChoice === computerChoice){
    drawGame();
       // document.getElementById("message").innerText="It's a tie!";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor beats rock
            //rock beats paper
            userWin=computerChoice==="paper"? false : true;

    }else if(userChoice==="paper"){
            userWin=computerChoice==="scissor"? false : true;
        }else{
            userWin=computerChoice==="rock"? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};
           

choices.forEach((choice) => {
   //console.log("choice is: ", choice);
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
       // console.log("choice was clicked",choiceId);
        playGame(userChoice)
    });
    });
