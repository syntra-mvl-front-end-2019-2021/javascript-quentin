let aVariable = 3;
let anotherVariable = 5;

aVariable = anotherVariable + 1;

console.log(aVariable);

function sum(a, b){
    return a + b;
}

aVariable = sum(5,6);
console.log(aVariable); // 11

aVariable = aVariable + 1; // 12

aVariable += 2 ; 
console.log(aVariable) // 14

aVariable++; // aVariable += 1 == aVariable = aVariable + 1

let newVar = 5;
let otherNewVar = 5;

console.log('increment: ');
console.log(++newVar);
console.log(otherNewVar++)
console.log(otherNewVar);

let a = 10 + 10;
let b = 5 * 5;
let c = 12 - 6;
let d = 20 / 5;

if ('' ) {
    console.log('true');
} else if(!c){
    console.log('false')
} else{
    console.log('helemaal niet')
}

if (true && true) {
    console.log('alletwee true');
}

if (true || false) {
    console.log('eentje is genoeg');
}

if ( true && ( true || false)){
    console.log('hoe meer zielen hoe meer vreugde');
}

let aString; 
if (d > 5 ){
    aString = 'groter dan 5';
} else {
    aString = 'kleiner of gelijk aan 5';
}

let Bstring = d >5 ? 'groter dan 5' : 'kleiner of gelijk aan 5'