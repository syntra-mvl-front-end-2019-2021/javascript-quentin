const randomWords = [
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
const hangManImage = document.querySelector('#image');
const solutionContainer = document.querySelector('#solution-container');
const winOrLoseContainer = document.querySelector('#win-lose-container');
const letterContainer = document.querySelector('#letter-container');
const letter = document.querySelectorAll('.letter');
const arrayFromLetters = Array.from(letter);

let gameState = {
  word: [],
  hangman: 1,
  turn: 1,
  lettersFound: 0,
  won: false,
  lost: false,
};


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
  arrayFromLetters.forEach(element => {
    element.classList.remove('succes');
    element.classList.remove('failed');
  });
}

function initGame() {
  // choose a random word > save in gamestate
  // reset gamestate
  let randomWord = getRandomWord().split('');
  gameState['word'] = randomWord;
  // update solutionContainer > insert div.solution-letter per letter
  let wordLength = gameState['word'].length;
  solutionLetters(wordLength);
  // empty winOrLoseContainer.innerHTML
  displayNone(winOrLoseContainer);
  // remove success and failed classes from .letter
  resetClasses();
}

function getValue(el){
  event.target.value;
}

function clickLetter(event) {
  // check if event.target is .letter
  if (event.target.classList.contains('letter')) {
    console.log(event.target.value);
  }else{
    console.log('hey');
  }


  // check if event.target has success or failed class
  // ---


};

letterContainer.addEventListener('click',clickLetter);

// hangManImage.setAttribute('src', 'images/hangman02.png');

initGame();