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
    }else if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            result = 'You lose! Rock beats Paper'
        }else{
            result = 'You win! Rock beats Scissors'
        }
    }else if(playerChoice === 'paper'){
        if(computerChoice === 'rock'){
            result = 'You win! Rock beats Paper'
        }else{
            result = 'You lose! Scissors beats Paper'
        }
    }else if(playerChoice === 'scissors'){
        if(computerChoice === 'paper'){
            result = 'You win! Scissors beats Paper'
        }else{
            result = 'You lose! Rock beats Scissors'
        }
    }

    return result
}
