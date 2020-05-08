let anArray = [4,7,3];
console.log(anArray.length);

let anotherArray = new Array(3,4,5);
console.log(anotherArray);

console.log(anArray[1]);

anArray[2]= 10;
console.log(anArray);

console.log("join");
console.log(anArray.join(' - '));

console.log("push 2 into array");
anArray.push(2);
console.log(anArray);


console.log("pop");
anArray.pop();


console.log("unshift");
anArray.unshift(3, 4, 9);

console.log(anArray);

anArray.shift(); // pop maar waarde vanvoor verwijderen

let concatArray = anArray.concat(anotherArray);
console.log(concatArray);

let subArray = concatArray.slice(2);
console.log(subArray);

let splicedArray = concatArray.splice(2, 3,11,12,13);
console.log(concatArray);
console.log(splicedArray);