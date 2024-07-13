let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let msgContaier = document.querySelector(".msg-container");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


const genCompChoice = () => {
    let options = ["rock","paper" ,"sessiors"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("user choice is :" , userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice : ",compChoice);

    if(userChoice === compChoice){
        msg.innerText = "Draw , play again";
        msg.style.backgroundColor = "#081b31";

    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
           userWin = compChoice === "paper" ? false : true ; 
        }
        else if(userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false : true ;
        }
        else{
            userWin = compChoice === "rock" ? false : true ;
        }
    showWinner(userWin , userChoice, compChoice);
    }

};

const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `you Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
        }
        else{
            msg.innerText = `you loss! ${compChoice} beats Your ${userChoice}`;
            msg.style.backgroundColor = "red";
    }
};