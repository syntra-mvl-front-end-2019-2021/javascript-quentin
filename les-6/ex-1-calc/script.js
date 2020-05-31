
function sum(){
    let inputField1 = parseInt(document.getElementById('input-field-1').value);
    let inputField2 = parseInt(document.getElementById('input-field-2').value);
    let result = inputField1 + inputField2;
    let resultField = document.getElementById('sum-result-container');

    resultField.innerText = result;
}

let buttonSum = document.getElementById('sum-submit-btn');
buttonSum.addEventListener('click',sum);

function product(){
    let inputField1 = parseInt(document.getElementById('input-field-1').value);
    let inputField2 = parseInt(document.getElementById('input-field-2').value);
    let result = inputField1 * inputField2;
    let resultField = document.getElementById('product-result-container');

    resultField.innerText = result;
    //console.log(result);
}

let buttonProduct = document.getElementById('product-submit-btn');
buttonProduct.addEventListener('click',product);



/*
let inputField = document.getElementById('input-field');
console.log(inputField);
let inputContainer = document.getElementById('input-container');
console.log(inputContainer);

function addInput(inputContainer,inputField){
    console.log(inputContainer);
    inputContainer.innerHTML = inputContainer + inputField;
    console.log(inputContainer);
}

let buttonAddInput = document.getElementById('add-input-btn');
buttonAddInput.addEventListener('click',addInput);

*/
