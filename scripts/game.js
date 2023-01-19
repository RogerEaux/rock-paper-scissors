function getComputerChoice(){  
    let computerChoice
    let randomNumber
    randomNumber = Math.floor(Math.random()*3) + 1
    if (randomNumber === 1){
        computerChoice = 'Rock'
    }else if (randomNumber === 2){
        computerChoice = 'Paper'
    }else{
        computerChoice = 'Scissors'
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

console.log(getPlayerChoice())