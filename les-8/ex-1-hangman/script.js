let randomWords = [
  'condition',
  'bottom',
  'lineage',
  'trip',
  'reporter',
  'paper',
  'colorful',
  'agent',
  'justify',
  'torture',
  'cap',
  'earthflax',
  'payment',
  'research',
  'picture',
  'garage',
  'honor',
  'memorial',
  'planet',
  'biography',
  'profound',
  'rumor',
  'gear',
  'bedroom',
  'orthodox',
  'penalty',
  'grief',
  'promote',
  'roof',
  'suite',
  'moving',
  'killer',
  'museum',
  'essay',
  'fever',
  'dignity',
  'shadow',
  'enjoy',
  'kill',
  'shy',
  'counter',
  'pawn',
  'button',
  'bullet',
  'skin',
  'rate',
  'shop',
  'consider',
  'other',
  'prospect',
];
randomWords = randomWords.map(w => w.toUpperCase());
const hangManImage = document.querySelector('#image');
const solutionContainer = document.querySelector('#solution-container');
const winOrLoseContainer = document.querySelector('#win-lose-container');
const letterContainer = document.querySelector('#letter-container');
const letter = document.querySelectorAll('.letter');
let arrayOfLetters = [];

let gameState = {
  word: [],
  hangman: 1,
  turn: 1,
  lettersFound: 0,
  won: false,
  lost: false,
};

let gameTurn = gameState['turn'];
let gameHangman = gameState['hangman'];
let gameLettersFound = gameState['lettersFound'];

function getRandomWord(){
  return randomWords[Math.floor(Math.random() * randomWords.length)];
}

function length(word){
  return word.length;
}

function solutionLetters(number){
  
  for( let i = 1 ; i < number ; i++){
    let solutionLetter = document.createElement('div');
    solutionLetter.classList.add('solution-letter');
    solutionContainer.appendChild(solutionLetter);
  };

}


function displayNone(element){
  element.style.display = 'none';
}


function resetClasses(){
  letter.forEach(element => {
    element.classList.remove('succes');
    element.classList.remove('failed');
  });
}

let randomWord = getRandomWord().split('');

function initGame() {
  // choose a random word > save in gamestate
  // reset gamestate
  let gameState = {
    word: randomWord,
    hangman: 1,
    turn: 1,
    lettersFound: 0,
    won: false,
    lost: false,
  };
  

  // update solutionContainer > insert div.solution-letter per letter
  let wordLength = randomWord.length;
  solutionLetters(wordLength);
  // empty winOrLoseContainer.innerHTML
  displayNone(winOrLoseContainer);
  // remove success and failed classes from .letter
  resetClasses();
  console.log(randomWord);
}

//letter.forEach(letter => letter.addEventListener('click', getLetterValue));
function getLetterValue(element) {
  return element.innerText;
}

function pushToArray(letter){
  arrayOfLetters.push(letter);
}
/*
function updateGameState(element,target){

  gameTurn + 1; 

  for(let i = 0; i < randomWord.length; i++){

    console.log(gameTurn);
  }

}

*/

function checkSameLetter(element,target){
  let wordLength = randomWord.length;
  
      for(let i = 0; i < wordLength ; i++){
        if (element == target.innerText){
          let index = randomWord.indexOf(element);
          console.log(index);
          target.classList.add('success');
        }else if(element !== target.innerText){
          target.classList.add('failed');
        }
      }
    
}

function checkIfLetter(){
  let targetLetter = event.target;
  // check if event.target is .letter
  if (targetLetter.matches('.letter')){

    pushToArray(targetLetter.value);
    //updateGameState(letterValue,targetLetter);
    for(let i = 0; i < randomWord.length; i++){
      checkSameLetter(randomWord[i],targetLetter);
    }
    
;
  };  
}



function clickLetter(event) {
  
  checkIfLetter();

}
letterContainer.addEventListener('click',clickLetter);

// hangManImage.setAttribute('src', 'images/hangman02.png');

initGame();