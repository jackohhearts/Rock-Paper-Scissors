let computerScore = 0
let playerScore = 0
let playerSelectionEl = document.getElementById("playerSelection-el")
let computerSelectionEl = document.getElementById("computerSelection-el")
let roundResultEl = document.getElementById("roundResult-el")



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
       // let playerSelection = "Rock"
       // let playerSelection = prompt("Rock, Paper, or Scissors?")
        playerSelection = playerSelection.toLowerCase()
        let computerSelection = getComputerChoice()
        
       
        console.log("You Selected: " + playerSelection)
        playerSelectionEl.textContent = "You Selected: " + playerSelection
        console.log("The Computer Selected: " + computerSelection)
        computerSelectionEl.textContent = "The Computer Selected: " + computerSelection
        
        if (playerSelection === "rock" && computerSelection === "Rock") {
            console.log("Tie!")
            roundResultEl.textContent = "Result: Tie!" 
            return "Tie!"
        }   else if (playerSelection === "rock" && computerSelection === "Paper") {
            console.log("You Lose!")
            roundResultEl.textContent = "Result: You Lose!" 
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "rock" && computerSelection === "Scissors") {
            console.log("You Win!")
            roundResultEl.textContent = "Result: You Win!" 
            playerScore += 1
            return "You Win!"
        }
        
        if (playerSelection === "scissors" && computerSelection === "Scissors") {
            console.log("Tie!")
            roundResultEl.textContent = "Result: Tie!" 
            return "Tie!"
        }   else if (playerSelection === "scissors" && computerSelection === "Rock") {
            console.log("You Lose!")
            roundResultEl.textContent = "Result: You Lose!" 
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "scissors" && computerSelection === "Paper") {
            console.log("You Win!")
            roundResultEl.textContent = "Result: You Win!" 
            playerScore += 1
            return "You Win!"
        }
      
        if (playerSelection === "paper" && computerSelection === "Paper") {
            console.log("Tie!")
            roundResultEl.textContent = "Result: Tie!" 
            return "Tie!"
        }   else if (playerSelection === "paper" && computerSelection === "Scissors") {
            console.log("You Lose!")
            roundResultEl.textContent = "Result: You Lose!" 
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "paper" && computerSelection === "Rock") {
            console.log("You Win!")
            roundResultEl.textContent = "Result: You Win!" 
            playerScore += 1
            return "You Win!"
        }   
    }


    function playGame() {
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

    function playerChoiceRock() {
        playerSelection = "Rock"
        playGame()
    }
    
    function playerChoicePaper() {
        playerSelection = "Paper"
        playGame()
    }

    function playerChoiceScissors() {
        playerSelection = "Scissors"
        playGame()
    }

   // rockButton.onclick = function() {
    //    playerChoice("rock")
    //}
    



   





