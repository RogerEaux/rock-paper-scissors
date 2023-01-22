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

function getPlayerChoice(){
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.addEventListener('click', () => {
            let playerChoice;
            if(image.id === 'rock'){
                playerChoice = 'Rock';
            }else if(image.id === 'paper'){
                playerChoice = 'Paper';
            }else{
                playerChoice = 'Scissors';
            }
        playRound(playerChoice);
    });
});
}

function changeHeader(){
    const content = document.querySelector('#content');
    content.removeChild(start);
    const header = document.querySelector('h1');
    header.textContent = 'Choose your fighter. First to 5 wins.';
}

function addImages(){
    const scissorsImg = document.querySelector('#scissors');
    scissorsImg.setAttribute('src', './images/scissors.gif');
    const rockImg = document.querySelector('#rock');
    rockImg.setAttribute('src', './images/rock.gif');
    const paperImg = document.querySelector('#paper');
    paperImg.setAttribute('src', './images/paper.gif');
}

function addScoreboard(){
    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');
    
    const divPlayer = document.createElement('div');
    const divComputer = document.createElement('div');
    divPlayer.setAttribute('class', 'score flex');
    divComputer.setAttribute('class', 'score flex');

    const paraPlayer = document.createElement('p');
    const paraComputer = document.createElement('p');
    paraPlayer.textContent = 'Player';
    paraComputer.textContent = 'Computer';
    player.appendChild(paraPlayer);
    computer.appendChild(paraComputer);

    const paraPlayerScore = document.createElement('p');
    const paraComputerScore = document.createElement('p');
    paraPlayerScore.textContent = 0;
    paraComputerScore.textContent = 0;
    divPlayer.appendChild(paraPlayerScore);
    divComputer.appendChild(paraComputerScore);

    player.appendChild(divPlayer);
    computer.appendChild(divComputer);
}

function startGame(){
    changeHeader();
    addScoreboard();
    addImages();
}

function game(){
    const start = document.querySelector('#start');
    start.addEventListener('click', startGame);
    getPlayerChoice();

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


