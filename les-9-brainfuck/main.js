function initArray(arrayLength) {
    const array = [];

    for (let i = 0; i < arrayLength; i++) {
        array.push(0);
    }

    return array;
}

function isBrainFuckInstruction(char) {
    const brainFuckInstr = '+-><.,[]';
    return brainFuckInstr.includes(char);
}

/**
 * cleanProgram
 * @param {string} program
 * @returns {string[]}
 */
function cleanProgram(program) {
    const cleanProg = program.split('');

    return cleanProg.filter(isBrainFuckInstruction);
}

// opdracht: deze code omzetten naar eigen code
// genBracketPairs neemt de index weer van bijhorende bracket
// result array van paren (2 indexen)
// openBracket + closedBracket
// loop doorheen de string 
// if i = '[' => push indexOf naar resultArray
// dan op zoek naar closedBracket en deze ook pushen 

// Findbrother !! HOW TO

function genBracketPairs(code) {
    console.log(code);
    
    const bracketPairs = code.reduce(
        function (result, val, index) {
            // index = 11 val = ']' result = { valid: true, pairs: [[5,8], [2,11]] }
            if (result.valid) {
                if (val === '[') {
                    result.pairs.push([index]);
                }
                if (val === ']') { //zoeken naaar indexOf, daar loop eindigen, alles wat ertussen staat word nieuwe value 
                    result = result.pairs.reduceRight(
                        function (pairResult, pair) {
                            // pairResult = { valid: true, pairs: [[5,8], [2,11]] } pair = [2,11]
                            if (!pairResult.valid && pair.length === 1) {
                                pair.push(index);
                                pairResult.valid = true;
                            }
                            pairResult.pairs.push(pair);
                            return pairResult;
                        },
                        { valid: false, pairs: [] }
                    );
                }
            }
            return result;
        },
        { valid: true, pairs: [] }
    );

    bracketPairs.valid = bracketPairs.valid && bracketPairs.pairs.filter(function (pair) {
            return pair.length === 1;
        }).length === 0;

    return bracketPairs;
}

function findBrotherIndex(bracketPairs, curIndex) {
    // bracketPairs = {valid: true, pairs: [[1,2],[4,5]]} curIndex = 4
    return bracketPairs.pairs.reduce((result, pair) => {
        // result = -1 pair = [4,5]
        let foundIndex = pair.indexOf(curIndex); // 0
        if (foundIndex === -1) {
            return result;
        }
        return pair[1 - foundIndex]; // if foundIndex = 1 -> 0 else if foundIndex = 0 -> 1
    }, -1);
}

/**
 * interpretBrainfuck
 * @param {string} program
 * @param {number[]}inputArray
 * @param {number} arrayLength
 * @returns {string}
 */
function interpretBrainFuck(program, inputArray, arrayLength) {
    const array = initArray(arrayLength);
    let result = '';
    let pointer = 0;
    const cleanProg = cleanProgram(program);
    let instrIndex = 0;
    const bracketPairs = genBracketPairs(cleanProg);

    if (!bracketPairs.valid) {
        return 'SYNTAX ERROR';
    }

    console.log(bracketPairs);

    while (instrIndex < cleanProg.length) {
        const instruction = cleanProg[instrIndex];

        switch (instruction) {
            case '+':
                if (array[pointer] === 255) {
                    return 'INCORRECT VALUE';
                }
                array[pointer]++;
                instrIndex++;
                break;
            case '-':
                if (array[pointer] === 0) {
                    return 'INCORRECT VALUE';
                }
                array[pointer]--;
                instrIndex++;
                break;
            case '>':
                if (pointer === arrayLength - 1) {
                    return 'POINTER OUT OF BOUNDS';
                }
                pointer++;
                instrIndex++;
                break;
            case '<':
                if (pointer === 0) {
                    return 'POINTER OUT OF BOUNDS';
                }
                pointer--;
                instrIndex++;
                break;
            case '.':
                result += String.fromCharCode(array[pointer]);
                instrIndex++;
                break;
            case ',':
                array[pointer] = inputArray.shift();
                instrIndex++;
                break;
            case '[':
                if (array[pointer] === 0) {
                    instrIndex = findBrotherIndex(bracketPairs, instrIndex) + 1;
                } else {
                    instrIndex++;
                }
                break;
            case ']':
                instrIndex = findBrotherIndex(bracketPairs, instrIndex);
                break;
        }
    }

    return result;
}
