/*
function resolve(val){
  newPromise.state = 'resolved';
  newPromise.result = val;
}
*/
/*
function newPromiseCallback(resolve, reject){
  resolve('hello promise');
}

let newPromise = new Promise(newPromiseCallback);

console.log(newPromise.result);

function newPromiseResolved(result){
  console.log(result);
}

function newPromiseError(error){
  console.log(error);
}

newPromise.catch(newPromiseResolved, newPromiseError);
newPromise.finally();*/

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

