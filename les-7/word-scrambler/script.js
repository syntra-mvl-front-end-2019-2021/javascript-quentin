const buttonScramble = document.getElementById('submit-btn');
let userInput = document.getElementById('user-input');
let resultContainer = document.getElementById('result-container');
let wordCount = document.getElementById('word-count');
let lettreCount = document.getElementById('letter-count');

let inputValue = userInput.value;

function wordCounter(){
    let arrayOfWords = inputValue.split(' ');
    for ( let i = 0; i < arrayOfWords.length; i++) {
        wordCount.innerText = arrayOfWords.length;
    }
}

function lettreCounter() {
    let arrayOfLettres = inputValue.split('');
    for ( let i = 0; i < arrayOfLettres.length; i++) {
        lettreCount.innerText = arrayOfLettres.length;
    }
}

function scramble(){
    
    let arrayOfWords = inputValue.split(' ');
    console.log(arrayOfWords);

    let newArray = [];

    for (  let i = 0; i < arrayOfWords.length; i++) {
        let word = Math.floor(Math.random() * arrayOfWords.length);
        let randomWord = arrayOfWords[i];
        arrayOfWords[i] = arrayOfWords[word];
        arrayOfWords[word] = randomWord;

        newArray.push(randomWord);
    }

    resultContainer.innerText =  newArray.join(' ');

}


buttonScramble.addEventListener('click',scramble);
buttonScramble.addEventListener('click',wordCounter);
buttonScramble.addEventListener('click',lettreCounter);

function realtime() {
    wordCounter();
    lettreCounter();
    scramble();
    resultContainer.innerText = inputValue;
}

userInput.addEventListener('input', realtime);

