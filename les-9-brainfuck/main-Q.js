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

function cleanProgram(program) {
    const cleanProg = program.split('');

    return cleanProg.filter(isBrainFuckInstruction);
}

function genBracketPairs(code){
    const bracketPairs = code.reduce(
        function (result, val ,index){
            if( result.valid){
                if(val === '['){
                    result.pairs.push([index]);
                }
                if(val === ']'){
                    result = result.pairs.reduceRight(
                        function(pairResult,pair){
                            if(!pairResult.valid && pair.length === 1){
                                pair.push(index);
                                pairResult.valid = true;
                            }
                            pairResult.pairs.push(pair);
                            return pairResult;
                        },
                        { valid: false, pairs:[]}
                    );
                }
            }
            return result;
        },
        {valid: true, pairs:[]}
    );
    bracketPairs.valid =
    bracketPairs.valid &&
    bracketPairs.pairs.filter(function (pair) {
        return pair.length === 1;
    }).length === 0;

return bracketPairs;
}

function findBrotherIndex(bracketPairs, curIndex) { // bracketPairs = {valid:true, pairs [[1,2],[4,5]]} curIndex = 4
    return bracketPairs.pairs.reduce((result, pair) => { // result = -1 pair = [1,2]
        let foundIndex = pair.indexOf(curIndex); // -1
        if (foundIndex < 0) {
            return result
        };
        return pair[1 - foundIndex];
    }, -1);
}


function interpretBrainFuck(program, inputArray, arrayLength) {
    const array = initArray(arrayLength);
    let result = '';
    let pointer = 0;
    const cleanProg = cleanProgram(program);
    let instrIndex = 0;
    const bracketPairs = genBracketPairs(cleanProg) ;

    if(!bracketPairs.valid){
        return 'SYNTAX ERROR';
    }
    console.log(bracketPairs);

    while (instrIndex < cleanProg.length) {
        const instruction = cleanProg[instrIndex];

        switch (instruction) {
            case '+':
                if (array[pointer] === 255){
                    return 'error';
                }
                array[pointer]++;
                instrIndex++;
                break;
            case '-':
                if (array[pointer] === 0){
                    return 'INCORRECT VALUE';
                }
                array[pointer]--;
                instrIndex++;
                break;
            case '>':
                if (pointer === arrayLength - 1){
                    return 'error';
                }
                pointer++;
                instrIndex++;
                break;
            case '<':
                if (pointer === 0 ){
                    return 'error';
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
                    const activeCell = array[pointer];
                    if (activeCell === 0) {
                        const closingBracketIndex = cleanProg.indexOf(
                            ']',
                            instrIndex
                        );
                        instrIndex = closingBracketIndex + 1;
                    } else {
                        instrIndex++;
                    }
                    break;
                case ']':
                    const openingBracketIndex = cleanProg.lastIndexOf(
                        '[',
                        instrIndex
                    );
                    instrIndex = openingBracketIndex;
                    break;
        }
    }

    return result;
}