const userZone = document.getElementById('play-zone-user');
const computerZone = document.getElementById('play-zone-ai');
const nweGameButton = document.getElementById('new-game-btn');
const gameMessage = document.querySelector('.game-message-container');
const userWon = document.getElementById('user-won-message');
const computerWon = document.getElementById('ai-won-message');
const draw = document.getElementById('draw-message');

let userCounterContainer = document.getElementById('play-zone-user-counter');
let userCounter = parseInt(userCounterContainer.innerHTML);
let computerCounterContainer = document.getElementById('play-zone-ai-counter');
let computerCounter = parseInt(computerCounterContainer.innerHTML);

let selectionContainer = document.querySelector('.selection-container');
let selection = document.querySelector('.selection');


let imageComputer = document.querySelector('#play-zone-ai img');
let imageUser = document.querySelector('#play-zone-user img');
let intervalHandle;

function loopImages(){

    let myImages = [ 'images/paper.png','images/rock.png','images/scissors.png'];

    let randomNumber = Math.floor(Math.random() * myImages.length);
    imageComputer.setAttribute('src', myImages[randomNumber] );

}

function showRandomImages(){

    intervalHandle = setInterval(loopImages,200);

}

function getWinner(player,computer){

    gameMessage.classList.remove('hide');

    if (player === computer){
        draw.classList.remove('hide');
        
    }else if(player === 'Paper'){
        if(computer === 'Rock'){

            userCounterContainer.innerHTML = ++userCounter ;
            userWon.classList.remove('hide');

        }else{
            
            computerCounterContainer.innerHTML = ++computerCounter ;
            computerWon.classList.remove('hide');

        }
    }else if(player === 'Rock'){
        if(computer === 'Scissors'){

            userCounterContainer.innerHTML = ++userCounter ;
            userWon.classList.remove('hide');

        }else{

            computerCounterContainer.innerHTML = ++computerCounter ;
            computerWon.classList.remove('hide');

        }
    }else if(player === 'Scissors'){
        if(computer === 'Paper'){

            userCounterContainer.innerHTML = ++userCounter ;
            userWon.classList.remove('hide');

        }else{

            computerCounterContainer.innerHTML = ++computerCounter ;
            computerWon.classList.remove('hide');
        }
    }
}


function checkElement(){
    clearInterval(intervalHandle);

    let myImages = [ 'images/paper.png','images/rock.png','images/scissors.png'];

    let randomNumber = Math.floor(Math.random() * myImages.length);
    let newImage = myImages[randomNumber]
    imageComputer.setAttribute('src', newImage );

    function getComputersChoice(){

        if(randomNumber < 1){

            return 'Paper';

        }else if(randomNumber < 2){

            return 'Rock';

        }else{

            return 'Scissors';
        }

    }

    function showUserChoice(el){

        imageUser.setAttribute('src', 'images/' + el + '.png');

    }

    let computerChoice = getComputersChoice();
    
    let userChoice = event.target;

    if (userChoice.matches('.selection')){

        userChoice = userChoice.innerHTML;
        showUserChoice(userChoice);
        getWinner(userChoice,computerChoice);

        selectionContainer.classList.remove('hide');
        nweGameButton.classList.add('hide');

        selectionContainer.classList.add('hide');
        nweGameButton.classList.remove('hide');
    }

}

function startNewGame(){
    selectionContainer.classList.remove('hide');
    nweGameButton.classList.add('hide');
    imageUser.setAttribute('src', '');
    imageComputer.setAttribute('src', '');
    gameMessage.classList.add('hide');
    userWon.classList.add('hide');
    draw.classList.add('hide');
    computerWon.classList.add('hide');

    showRandomImages();

    selectionContainer.addEventListener('click', checkElement);

}


nweGameButton.addEventListener('click',startNewGame);