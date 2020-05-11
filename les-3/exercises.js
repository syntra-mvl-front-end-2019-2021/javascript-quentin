// Return the largest element of array (all elements will be numbers), e.g. [1,2,3] → 3
function getLargestItemInArray(array) {

    let firstValue = array[0] ;

    for( let i = 0; i <= array.length; i++){
        if ( i >= firstValue){
            firstValue = i;
        }
    }

    return firstValue;
}

// Reverse order of array, e.g. [1,2,3] → [3,2,1]
function reverseArray(anArray) {
    let newArray = anArray.reverse();
    return newArray;
}

// Make a sum of all elements, e.g. [1,2,3] → 6
function arraySum(anArray) {
    let sum = 0;
    for (let i = 0; i < anArray.length; i++) {
        sum = sum + anArray[i];
    };
    return sum;
}

// Make a string of the first letter of each element of array, e.g. ['Dog', 'cat', 'snake'] → 'Dcs'
function stringOfFirstLetters(anArray) {
    let firstLetterArray = [];

    for (let i = 0; i < anArray.length; i++) {
        firstLetter = anArray[i].charAt(0);
        firstLetterArray.push(firstLetter);
    }

    return firstLetterArray.join('');
}

// Combines two arrays by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
function combineArrays(arrayOne, arrayTwo) {
    
    let ArraysCombined = [];

    for (let i = 0; i < arrayOne.Length; i++ ){
        ArraysCombined.push( arrayOne[i] , arrayTwo[i] );
    }
    return ArraysCombined;
}

// Takes a number and returns a list of its digits. e.g. 2342 → [2,3,4,2]
function numberToDigitArray(aNumber) {

    var digits = aNumber.toString().split('');
    var realDigits = digits.map(Number)
    return realDigits;

}

// Translates a text to Pig Latin.
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
// e.g. “The quick brown fox” → “Hetay uickqay rownbay oxfay”.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
function translateToPigLating(aString) {

    
}

// Converts English text to Morse code.
// https://en.wikipedia.org/wiki/Morse_code#/media/File:International_Morse_Code.svg
// e.g. 'Hello World' → '****|*|*_**|*_**|___| *__|___|*_*|*_**|_**|'
function translateToMorse(aString) {
    /*
    if (iets = 'h'){

    }...
    
    switch(iets){
        case 'H':
        case 'h':
            console.log('h');
            break;
        case 'e' : 
            console.log('e');
            break;
        default:
            console.log('idk');
            break;
    }
    */
}

// Write a more advanced version of the previous function
// Where the unnecessary | is omitted
// e.g. 'Hello World' → '****|*|*_**|*_**|___ *__|___|*_*|*_**|_**'\
function translateToMorseFancy(aString) {

}