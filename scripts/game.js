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
    const result = document.querySelector('#content p');
    result.setAttribute('id', 'result')

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

function adjustScores(){
    const playerScore = document.querySelector('#player .score p');
    const computerScore = document.querySelector('#computer .score p');
    const result = document.querySelector('#result');
    if(result.textContent.slice(4,5) === 'w'){
        playerScore.textContent++;
    }else if(result.textContent.slice(4,5) === 'l'){
        computerScore.textContent++;
    }
    if(playerScore.textContent >= 5 || computerScore.textContent >= 5){
        const images = document.querySelectorAll('img');
        images.forEach((image) =>{
            image.removeEventListener('click', playRound);
        });
        if(playerScore.textContent >= 5){
            result.textContent = `Player wins ${playerScore.textContent} to ${computerScore.textContent}`;
        }else{
            result.textContent = `Computer wins ${computerScore.textContent} to ${playerScore.textContent}`;
        }
    }
}

function playRound(){
    this.classList.add('selected')
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

    adjustScores();
}

function play(){
    const start = document.querySelector('#start');
    start.addEventListener('click', startGame);

    const images = document.querySelectorAll('img');
    images.forEach((image) =>{
        image.addEventListener('click', playRound);
        image.addEventListener('transitionend', () => image.classList.remove('selected'));
    });
}

play();
