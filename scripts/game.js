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
    let resultMessage
    if(playerChoice === computerChoice){
        resultMessage = 'It\s a tie'
    }else if(playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'rock' ){
        resultMessage = `You lose, ${computerChoice} beats ${playerChoice}`
    }else if(playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper' ){
        resultMessage = `You win, ${playerChoice} beats ${computerChoice}`
    }

    return resultMessage
}

console.log(playRound())


