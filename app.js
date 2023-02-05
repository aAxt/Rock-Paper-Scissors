const value = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;


function getComputerChoice(choice) {
    let random = Math.floor(Math.random() * 3) 
    if (random === 0) {
        return value[0];
    } else if (random === 1) {
        return value[1];
    } else {
        return value[2];
    }    
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection=== 'rock') {
            if( computerSelection === value[0] ){
                return 'Tie Game!';
            } else if (computerSelection === value[1]) {
                computerScore++
                return 'You Lose!';
            } else {
                playerScore++
                return 'You Win';
            }
        };
        if (playerSelection === 'paper') {
            if (computerSelection ===  value[0]) {
                playerScore++
                return 'You Win!!';
            } else if (computerSelection === value[1]) {
                return 'Tie Game!!';
            } else {
                computerScore++
                return 'You Lose HaHaHa';
            }
        }; 
        if (playerSelection === 'scissors') {
            if (computerSelection === value[0]) {
                computerScore++
                return 'You Lose';
            } else if(computerSelection === value[1]) {
                playerScore++
                return 'You Win!Good job';
            } else {
                return 'Tie Game';
            }
        };
    
}
 function game() {
     for ( let i = 0; i < 5; i++) {
         const playerSelection = prompt("Chose between rock, paper and scissors");
         const computerSelection = getComputerChoice();
         console.log(playRound(playerSelection, computerSelection))
    }
 }
game()
console.log('Your score is:' + playerScore, 'Computer score is:' + computerScore)
 