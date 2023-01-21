function getComputerChoice(){  
    let computerChoice;
    let randomNumber;
    randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber === 1){
        computerChoice = 'Rock';
    }else if(randomNumber === 2){
        computerChoice = 'Paper';
    }else{
        computerChoice = 'Scissors';
    }

    return computerChoice
}

function playRound(playerChoice){
    const computerChoice = getComputerChoice();
    let result;
    if(playerChoice === computerChoice){
        result = 'It\s a tie'
    }else if(playerChoice === 'Rock' && computerChoice === 'Paper' || playerChoice === 'Paper' && computerChoice === 'Scissors' || playerChoice === 'Scissors' && computerChoice === 'Rock' ){
        result = `You lose, ${computerChoice} beats ${playerChoice}`;
    }else if(playerChoice === 'Rock' && computerChoice === 'Scissors' || playerChoice === 'Paper' && computerChoice === 'Rock' || playerChoice === 'Scissors' && computerChoice === 'Paper' ){
        result = `You win, ${playerChoice} beats ${computerChoice}`;
    }

    console.log(result);
    return result;
}

function game(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.textContent;
        playRound(playerChoice);
    });
});
}

game();

/*function game(){
    let result;
    let playerScore = 0;
    let computerScore = 0;
    let winner;
    for(let i = 0; i < 5; i++){
        result = playRound();
        console.log(result);
        if(result.slice(4,5) === 'w'){
            playerScore++;
        }else if(result.slice(4,5) === 'l'){
            computerScore++;
        }
    }
    if(playerScore > computerScore){
        winner = `Player wins ${playerScore} to ${computerScore}`;
    }else if(computerScore > playerScore){
        winner = `Computer wins ${computerScore} to ${playerScore}`; 
    }else{
        winner = 'Neither machine nor man';
    }
    console.log(winner);
}*/


