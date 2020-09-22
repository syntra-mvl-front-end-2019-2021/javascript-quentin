
function higherThanFive(num){
    return num > 5;
}
Array.prototype.myFilter = function(callbackFunction){

    const newArray = [];

   for (let i = 0; i < this.length; i++){
       const result = callbackFunction(this[i]);
       if (result){
           newArray.push(this[i]);
       }
   }

   return newArray;
    
};


const testArray = [1,2,3,4,5,6];

/*
console.log('myFilter', testArray.myFilter(higherThanFive));
console.log('filter', testArray.myFilter(higherThanFive));
*/

/*
function doSomething(val){
    console.log('val is: ' + val);
}

const forEachTest = ['test', 'test2', 'test3'];

Array.prototype.myForEach = function (callbackFunction){
    for (let i = 0; i < this.length; i++){
        callbackFunction(this[i]);
    }
};


forEachTest.myForEach(doSomething);
forEachTest.forEach(doSomething);
*/
function timesTwo(num){
    return num * 2;
}

const mapTestArray = [1,2,3,4,5,6];

Array.prototype.myMap = function(callbackFunction){
    let newArray =  [];
    for (let i = 0; i < this.length; i++){
        newArray.push(callbackFunction(this[i]));
    }
    return newArray;
}

//console.log('map', mapTestArray.map(timesTwo));
//console.log('myMap', mapTestArray.myMap(timesTwo));

function sumAllNumbers(sum, num){
    return sum + num;
}

const reduceTestArray = [1,2,3,4,5,6];

Array.prototype.myReduce = function(callbackFunction, initial){
    
    for (let i = 0; i < this.length; i++){
        let newValue = callbackFunction(this[i]) ;
        initial = newValue + initial;
        return initial;
    }
}


console.log(reduceTestArray.reduce(sumAllNumbers,0));
console.log('myReduce ' + reduceTestArray.myReduce(sumAllNumbers,0));