let computerScore = 0
let playerScore = 0
let playerSelectionEl = document.getElementById("playerSelection-el")
let computerSelectionEl = document.getElementById("computerSelection-el")
let roundResultEl = document.getElementById("roundResult-el")
let scoreEl = document.getElementById("score-el")
let winnerEl = document.getElementById("winner-el")



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


    function playRound() {
        playerSelection = playerSelection.toUpperCase()
        let computerSelection = getComputerChoice()
        computerSelection = computerSelection.toUpperCase()
        
       
        
        playerSelectionEl.textContent = "You Selected: " + playerSelection
        
        computerSelectionEl.textContent = "The Computer Selected: " + computerSelection
        
        if (playerSelection === "ROCK" && computerSelection === "ROCK") {
            
            roundResultEl.textContent = "Result: Tie!" 
            return "Tie!"
        }   else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
            
            roundResultEl.textContent = "Result: You Lose!" 
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
            
            roundResultEl.textContent = "Result: You Win!" 
            playerScore += 1
            return "You Win!"
        }
        
        if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
            
            roundResultEl.textContent = "Result: Tie!" 
            return "Tie!"
        }   else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            
            roundResultEl.textContent = "Result: You Lose!" 
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            
            roundResultEl.textContent = "Result: You Win!" 
            playerScore += 1
            return "You Win!"
        }
      
        if (playerSelection === "PAPER" && computerSelection === "PAPER") {
            
            roundResultEl.textContent = "Result: Tie!" 
            return "Tie!"
        }   else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
            
            roundResultEl.textContent = "Result: You Lose!" 
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
            
            roundResultEl.textContent = "Result: You Win!" 
            playerScore += 1
            return "You Win!"
        }   
    }


    function playGame() {
        playRound()
        
        scoreEl.textContent = "Your Score: " + playerScore + " " + "----- " + "Computer Score: " + computerScore
        if (playerScore === 5 && computerScore < 5) {
           
            winnerEl.textContent = "You Win The Game!"
            return "You Win The Game!"
        } else if (playerScore < 5 && computerScore === 5) {
            
            winnerEl.textContent = "You Lose The Game! The Computer Beat You!"
            return "You Lose The Game! The Computer Beat You!"
        }
        
        
    }



  



   





