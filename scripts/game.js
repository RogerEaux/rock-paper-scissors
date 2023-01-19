function getComputerChoice(){  
    let computerChoice = ''
    let randomNumber = 0
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
