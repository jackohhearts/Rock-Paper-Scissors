let computerScore = 0
let playerScore = 0



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
        let playerSelection = prompt()
        let computerSelection = getComputerChoice()
       
        console.log("You Selected: " + playerSelection)
        console.log("The Computer Selected: " + computerSelection)
        
        if (playerSelection === "Rock" && computerSelection === "Rock") {
            console.log("Tie!")
            return "Tie!"
        }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
            console.log("You Lose!")
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            console.log("You Win!")
            playerScore += 1
            return "You Win!"
        }
        
        if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            console.log("Tie!")
            return "Tie!"
        }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            console.log("You Lose!")
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            console.log("You Win!")
            playerScore += 1
            return "You Win!"
        }
      
        if (playerSelection === "Paper" && computerSelection === "Paper") {
            console.log("Tie!")
            return "Tie!"
        }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            console.log("You Lose!")
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
            console.log("You Win!")
            playerScore += 1
            return "You Win!"
        }   
    }


    function playGame() {
        playRound()
        playRound()
        playRound()
        playRound()
        playRound()
        console.log("Your Score: " + playerScore + " " + "Computer Score: " + computerScore)
        if (playerScore > computerScore) {
            console.log("You Win The Game!")
            return "You Win The Game!"
        } else if (playerScore < computerScore) {
            console.log("You Lose The Game! The Computer Beat You!")
            return "You Lose The Game! The Computer Beat You!"
        }
    }



    playGame()
   





