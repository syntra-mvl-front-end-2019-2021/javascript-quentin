
/*
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

///////////////////////////////////////////////////////////////
*/
let userInput = document.getElementById('user-input');
let resultContainer = document.getElementById('result-container');
let wordCountContainer = document.getElementById('word-count');
let letterCountContainer = document.getElementById('letter-count');
let submitBtn = document.getElementById('submit-btn');

function getUserInput(){
    return userInput.value;
}

function textToWordArray(text){
    return text.split(" ");
}

function arrayToText(array){
    return array.join(' ');
}

function getRandomNumber(max){
    return Math.floor(Math.random() * (max));
}


function updateLetterCount(text){
    letterCountContainer.innerHTML = text.length;
}

function updateWordCount(array){
    wordCountContainer.innerHTML = array.length;
}


function scrambleArray(oldArray){
    /*
    for (let i = oldArray.length - 1; i >= 0; i--){
        let randomIndex = getRandomNumber(i);
        let randomValue = oldArray[randomIndex];
        let arrayvalue = oldArray[i];
        oldArray[i] = randomValue;
        oldArray[randomIndex] = arrayvalue;
    }
    */
    const scrambledArray = [];
    while(oldArray > 0){
        const randomIndex = getRandomNumber(oldArray.length);
        const randomValue = oldArray.splice(randomIndex, 1);
        scrambleArray.push(randomValue[0]);
    }
    return scrambleArray;
}

function scrambleText(text){
    let array = textToWordArray(text);
    updateWordCount(array);
    let scrambled = scrambleArray(array);
    return arrayToText(scrambled);
}

function scramble(){
    let text = getUserInput();
    let scrambledText = scrambleText(text);
    resultContainer.innerHTML = scrambledText;

    updateLetterCount(text);
}


submitBtn.addEventListener('click', scramble);
userInput.addEventListener('input', scramble);


