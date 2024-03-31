let computerSelection = getComputerChoice()
let playerSelection = prompt()


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1){
    return "Rock"
    } else if (randomNumber === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
   
    }


    function playRound() {
        getComputerChoice()
        console.log("You Selected: " + playerSelection)
        console.log("The Computer Selected: " + computerSelection)
        
        if (playerSelection === "Rock" && computerSelection === "Rock") {
            return "Tie!"
        }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
            return "You Lose!"
        }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return "You Win!"
        }
        
        if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            return "Tie!"
        }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            return "You Lose!"
        }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            return "You Win!"
        }
      
        if (playerSelection === "Paper" && computerSelection === "Paper") {
            return "Tie!"
        }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            return "You Lose!"
        }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
            return "You Win!"
        }
        
    }

function playGame() {
    playRound()
    console.log(playRound(playerSelection, computerSelection))
}




