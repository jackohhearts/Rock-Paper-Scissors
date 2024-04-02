let computerScore = 0
let playerScore = 0
let roundNumber = 0
let playerSelectionEl = document.getElementById("playerSelection-el")
let computerSelectionEl = document.getElementById("computerSelection-el")
let roundResultEl = document.getElementById("roundResult-el")
let scoreEl = document.getElementById("score-el")
let winnerEl = document.getElementById("winner-el")
let playAgainEl = document.getElementById("playAgain-el")
let computerSelection = ""
let roundNumberEl = document.getElementById("roundNumber-el")



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
        computerSelection = getComputerChoice()
        playGame()
    }
    
function playerChoicePaper() {
        playerSelection = "Paper"
        computerSelection = getComputerChoice()
        playGame()
    }

function playerChoiceScissors() {
        playerSelection = "Scissors"
        computerSelection = getComputerChoice()
        playGame()
    }


    function playRound() {
        roundNumber += 1
        playerSelection = playerSelection.toUpperCase()
        
        computerSelection = computerSelection.toUpperCase()
        
       
        
        playerSelectionEl.textContent = "You Selected: " + playerSelection
        
        computerSelectionEl.textContent = "The Computer Selected: " + computerSelection
        
        if (playerSelection === "ROCK" && computerSelection === "ROCK") {
            
            roundResultEl.textContent = "Tie!" 
            return "Tie!"
        }   else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
            
            roundResultEl.textContent = "You Lose!" 
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
            
            roundResultEl.textContent = "You Win!" 
            playerScore += 1
            return "You Win!"
        }
        
        if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
            
            roundResultEl.textContent = "Tie!" 
            return "Tie!"
        }   else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            
            roundResultEl.textContent = "You Lose!" 
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            
            roundResultEl.textContent = "You Win!" 
            playerScore += 1
            return "You Win!"
        }
      
        if (playerSelection === "PAPER" && computerSelection === "PAPER") {
            
            roundResultEl.textContent = "Tie!" 
            return "Tie!"
        }   else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
            
            roundResultEl.textContent = "You Lose!" 
            computerScore += 1
            return "You Lose!"
        }   else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
            
            roundResultEl.textContent = "You Win!" 
            playerScore += 1
            return "You Win!"
        }   
    }


    function playGame() {
        playRound()
        
        roundNumberEl.textContent = "Round Number: " + roundNumber
        scoreEl.textContent = "Your Score: " + playerScore + " " + "-- " + "Computer Score: " + computerScore
        if (playerScore === 5 && computerScore < 5) {
            rockButton.setAttribute("disabled", 1)
            paperButton.setAttribute("disabled", 1)
            scissorsButton.setAttribute("disabled", 1)
            winnerEl.textContent = "You Won The Game!"
            playAgainEl.innerHTML = '<button onclick="newGame()">Play Again?</button>'
            
            return "You Win The Game!"

        } else if (playerScore < 5 && computerScore === 5) {
            rockButton.setAttribute("disabled", 1)
            paperButton.setAttribute("disabled", 1)
            scissorsButton.setAttribute("disabled", 1)
            winnerEl.textContent = "You Lost The Game!"
            playAgainEl.innerHTML = '<button onclick="newGame()">Play Again?</button>'
            return "You Lost The Game!"
        } 
        
    }

    function newGame() {
        roundNumber = -1
        playerScore = 0
        playerSelection = ""
        computerSelection = ""
        computerScore = 0
        winnerEl.textContent = ""
        playAgainEl.innerHTML = ""
        roundResultEl.textContent = ""
        rockButton.removeAttribute("disabled", 0)
        paperButton.removeAttribute("disabled", 0)
        scissorsButton.removeAttribute("disabled", 0)
        playGame()
    }



  



   





