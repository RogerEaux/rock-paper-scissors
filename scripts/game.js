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

function getComputerChoice(){  
    let computerChoice;
    let randomNumber;
    randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber === 1){
        computerChoice = 'rock';
    }else if(randomNumber === 2){
        computerChoice = 'paper';
    }else{
        computerChoice = 'scissors';
    }

    return computerChoice
}

function playRound(){
    playerChoice = this.id
    const computerChoice = getComputerChoice();
    const result = document.querySelector('#result');
    if(playerChoice === computerChoice){
        result.textContent = 'It\s a tie'
    }else if(playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'rock' ){
        result.textContent = `You lose, ${computerChoice} beats ${playerChoice}`;
    }else if(playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper' ){
        result.textContent = `You win, ${playerChoice} beats ${computerChoice}`;
    }
}

function adjustScores(){
    const playerScore = document.querySelector('#player');
    const computerScore = document.querySelector('#computer');
}

function play(){
    const start = document.querySelector('#start');
    start.addEventListener('click', startGame);

    const images = document.querySelectorAll('img');
    images.forEach((image) =>{
        image.addEventListener('click', playRound);
    });
}

play();

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


