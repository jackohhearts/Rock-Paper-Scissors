



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
            return "You Lose!"
        }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            console.log("You Win!")
            return "You Win!"
        }
        
        if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            console.log("Tie!")
            return "Tie!"
        }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            console.log("You Lose!")
            return "You Lose!"
        }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            console.log("You Win!")
            return "You Win!"
        }
      
        if (playerSelection === "Paper" && computerSelection === "Paper") {
            console.log("Tie!")
            return "Tie!"
        }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            console.log("You Lose!")
            return "You Lose!"
        }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
            console.log("You Win!")
            return "You Win!"
        }

console.log(playRound())

        
    }
    function playGame() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    }

    playGame()





