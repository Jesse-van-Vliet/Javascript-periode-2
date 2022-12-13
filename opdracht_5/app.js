const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");


let player;
let computer; 
let result;

possibleChoices.forEach((button) => button.addEventListener("click", (e) =>{
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult()
    
})
);



function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 ) + 1;

    if (randomNumber == 1) {
        computer = "rock";
    }

    else if (randomNumber == 2) {
        computer = "paper";
    }

    else if (randomNumber == 3) {
        computer = "scissors";
    }

    computerChoice.innerText = computer; 
}

function getResult() {
    if (computer == player) {
            resultOutput.innerText = "Gelijkspel";
    }

    else if (computer == "rock" && player == "paper") {
            resultOutput.innerText = "Je hebt gewonnen";
    }
    
    else if (computer == "rock" && player == "scissors") {
        resultOutput.innerText = "Je hebt verloren";
    }

    else if (computer == "paper" && player == "scissors") {
        resultOutput.innerText = "Je hebt gewonnen";
    }

    else if (computer == "paper" && player == "rock") {
        resultOutput.innerText = "Je hebt verloren";
    }

    else if (computer == "scissors" && player == "rock") {
        resultOutput.innerText = "Je hebt gewonnen";
    }

    else if (computer == "scissors" && player == "paper") {
            resultOutput.innerText = "Je hebt verloren";
    }
}
