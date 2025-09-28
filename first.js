let userScore = 0;
let computerScore = 0;
let msg = document.querySelector("#msg")
let UserScorePara = document.querySelector("#user-score")
let CompScorePara = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");

const genCompterChoice = () => {
    let options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    msg.style.backgroundColor = "rgb(4, 4, 45)"
    msg.innerText = "Opps! Game was draw. Play again"
    
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin == true){
        userScore++;
        UserScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        
    }
    else{
        computerScore++;
        CompScorePara.innerText = computerScore;
        msg.style.backgroundColor = "red"
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        
    }
} 

const playGame = (userChoice) => {
    let compChoice = genCompterChoice();

    if(userChoice == compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            userWin = compChoice == "scissors" ? false : true;
        }
        else{
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
        
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})