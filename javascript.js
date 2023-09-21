function game(){
    for(let i = 0; i < 4; i++) {
        function getComputerChoice() {
        let some = Math.floor(Math.random() * 3)
        if (some===0){
            return "rock";
        }
        else if (some===1){
            return "scissors";
        }
        else if (some===2){
            return "paper";
        }
    }

    function caseInsensitive(something = "") {
        return something.toLowerCase();
    }
    
    const computerSelection = getComputerChoice();
    const playerSelection = caseInsensitive(prompt("Rock, Paper, or Scissors?"));
    
    function playRound(playerSelection, getComputerChoice) {
        if (playerSelection==="rock" && getComputerChoice==="paper") {
            return "You've lost! Paper beats rock.";
        }
        else if (playerSelection==="paper" && getComputerChoice==="rock") {
            return "You've won! Paper beats rock.";
        }
        else if (playerSelection==="rock" && getComputerChoice==="scissors") {
            return "You've won! Rock beats scissors.";
        }
        else if (playerSelection==="scissors" && getComputerChoice==="rock") {
            return "You've lost! Rock beats scissors.";
        }
        else if (playerSelection==="paper" && getComputerChoice==="scissors") {
            return "You've lost! Scissors beat paper.";
        }
        else if (playerSelection==="scissors" && getComputerChoice==="paper") {
            return "You've won! Scissors beat paper."
        }
        else if (playerSelection==="paper" && getComputerChoice==="scissors") {
            return "You've lost! Scissors beat paper."
        }
        else if ((playerSelection==="paper" && getComputerChoice==="paper") || (playerSelection==="rock" && getComputerChoice==="rock") || (playerSelection==="scissors" && getComputerChoice==="scissors")) {
            return "Tie!"
        }
        else {
            return "Invalid option.";
        }
    }

    console.log(playRound(playerSelection, computerSelection))

}
}

game();