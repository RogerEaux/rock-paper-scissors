function getComputerChoice(){  
    let computerChoice
    let randomNumber
    randomNumber = Math.floor(Math.random()*3) + 1
    if(randomNumber === 1){
        computerChoice = 'rock'
    }else if(randomNumber === 2){
        computerChoice = 'paper'
    }else{
        computerChoice = 'scissors'
    }

    return computerChoice
}

function getPlayerChoice(){
    let playerChoice
    while(playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors'){
        playerChoice = prompt('Rock, paper, scissors, shoot!').toLowerCase()
    }

    return playerChoice
}

function playRound(){
    const playerChoice = getPlayerChoice()
    const computerChoice = getComputerChoice()
    let result
    if(playerChoice === computerChoice){
        result = 'It\s a tie'
    }else if(playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'rock' ){
        result = `You lose, ${computerChoice} beats ${playerChoice}`
    }else if(playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper' ){
        result = `You win, ${playerChoice} beats ${computerChoice}`
    }

    return result
}

function game(){
    let result
    let playerScore = 0
    let computerScore = 0
    let winner
    for(let i = 0; i < 5; i++){
        result = playRound()
        console.log(result)
        if(result.slice(4,5) === 'w'){
            playerScore++
        }else if(result.slice(4,5) === 'l'){
            computerScore++
        }
    }
    if(playerScore > computerScore){
        winner = `Player wins ${playerScore} to ${computerScore}` 
    }else if(computerScore > playerScore){
        winner = `Computer wins ${computerScore} to ${playerScore}` 
    }else{
        winner = 'Neither machine nor man'
    }
    console.log(winner)
}

game()
