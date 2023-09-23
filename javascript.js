const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const result = document.querySelector('.result');
const score = document.querySelector('.score');

const playerScore = document.createElement('p');
const computerScore = document.createElement('p');

let pScore = 0;
let cScore = 0;

function selectRock() {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerScore.textContent = `Player's Score: ${pScore}`;
    computerScore.textContent = `Computer's Score: ${cScore}`;
}
function selectPaper() {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerScore.textContent = `Player's Score: ${pScore}`;
    computerScore.textContent = `Computer's Score: ${cScore}`;
}
function selectScissors() {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerScore.textContent = `Player's Score: ${pScore}`;
    computerScore.textContent = `Computer's Score: ${cScore}`;
}

playerScore.textContent = `Player's Score: ${pScore}`;
computerScore.textContent = `Computer's Score: ${cScore}`;

score.appendChild(playerScore);
score.appendChild(computerScore);

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
    function playRound(playerSelection, computerSelection) {
        console.log(pScore, cScore);
        if (playerSelection==="rock" && computerSelection==="paper") {
            const p = document.createElement('p');
            p.textContent = "You've lost! Paper beats rock.";
            cScore++;
            result.appendChild(p);

        }
        else if (playerSelection==="paper" && computerSelection==="rock") {
            const p = document.createElement('p');
            p.textContent = "You've won! Paper beats rock.";
            pScore++;
            result.appendChild(p);
        }
        else if (playerSelection==="rock" && computerSelection==="scissors") {
            const p = document.createElement('p');
            p.textContent = "You've won! Rock beats scissors.";
            pScore++;
            result.appendChild(p);
        }
        else if (playerSelection==="scissors" && computerSelection==="rock") {
            const p = document.createElement('p');
            p.textContent = "You've lost! Rock beats scissors.";
            cScore++;
            result.appendChild(p);
        }
        else if (playerSelection==="paper" && computerSelection==="scissors") {
            const p = document.createElement('p');
            p.textContent = "You've lost! Scissors beat paper.";
            cScore++;
            result.appendChild(p);
        }
        else if (playerSelection==="scissors" && computerSelection==="paper") {
            const p = document.createElement('p');
            p.textContent = "You've won! Scissors beat paper.";
            pScore++;
            result.appendChild(p);
        }
        else if (playerSelection==="paper" && computerSelection==="scissors") {
            const p = document.createElement('p');
            p.textContent = "You've lost! Scissors beat paper.";
            cScore++;
            result.appendChild(p);
        }
        else if ((playerSelection==="paper" && computerSelection==="paper") || (playerSelection==="rock" && computerSelection==="rock") || (playerSelection==="scissors" && computerSelection==="scissors")) {
            const p = document.createElement('p');
            p.textContent = "Tie!";
            result.appendChild(p);
        }
        else {
            return "Invalid option.";
        }
        if(pScore === 5 || cScore === 5) {
            if (pScore > cScore) {
                const h2 = document.createElement('h2');
                h2.textContent = "You have won!";
                result.appendChild(h2);
            }
            else if (cScore>pScore) {
                const h2 = document.createElement('h2');
                h2.textContent = "You have lost.";
                result.appendChild(h2);
            }
            else if (cScore === pScore) {
                const h2 = document.createElement('h2');
                h2.textContent = "It's a tie.";
                result.appendChild(h2);
            }
        }
    }
    rockButton.addEventListener('click', selectRock);
    paperButton.addEventListener('click', selectPaper);
    scissorsButton.addEventListener('click', selectScissors);