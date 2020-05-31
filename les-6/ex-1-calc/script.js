
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


function addInput(){

    let newInputFieldContainer = document.createElement('div');
    newInputFieldContainer.setAttribute('class','field has-addons number-input-group' )
    let newControl = document.createElement('div');
    newControl.setAttribute('class', 'control');
    let newControl2 = document.createElement('div');
    newControl2.setAttribute('class', 'control');
    let newInputField = document.createElement('input');
    newInputField.setAttribute('class','input number-input');
    newInputField.setAttribute('type','number');
    newInputField.setAttribute('step',1);
    newInputField.setAttribute('value',0);
    let newDeleteButton = document.createElement('a');
    newDeleteButton.setAttribute('class', 'button is-danger delete-number-input');
    newDeleteButton.innerHTML = 'X';
    
    document.getElementById('input-container').appendChild(newInputFieldContainer);
    newInputFieldContainer.appendChild(newControl);
    newControl.appendChild(newInputField);
    newInputFieldContainer.appendChild(newControl2);
    newControl2.appendChild(newDeleteButton);

    
}

let buttonAddInput = document.getElementById('add-input-btn');
buttonAddInput.addEventListener('click',addInput);

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
