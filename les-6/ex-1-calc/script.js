const numberInputContainer = document.querySelector('#input-container');

let inputField1 = document.getElementById('input-field-1');
let inputField2 = document.getElementById('input-field-2');

let teller = 2;

function addInput(event){

    const newInputGroup = document.createElement('div');
    newInputGroup.classList.add('field', 'has-addons', 'number-input-group');
    newInputGroup.innerHTML += `
    <div class="control">
      <input class="input number-input" type="number" step="1" value="0">
    </div>
    <div class="control">
      <a class="button is-danger delete-number-input">
        X
      </a>
    </div>
  `;
  numberInputContainer.appendChild(newInputGroup);

    /*let InputFieldContainer = document.createElement('div');
    InputFieldContainer.setAttribute('class','field has-addons number-input-group' )
    let Control = document.createElement('div');
    Control.setAttribute('class', 'control');
    let Control2 = document.createElement('div');
    Control2.setAttribute('class', 'control');
    let InputField = document.createElement('input');
    InputField.setAttribute('class','input number-input');
    InputField.setAttribute('type','number');
    InputField.setAttribute('step',1);
    InputField.setAttribute('value',0);
    let DeleteButton = document.createElement('a');
    DeleteButton.setAttribute('class', 'button is-danger delete-number-input');
    DeleteButton.innerHTML = 'X';

    document.getElementById('input-container').appendChild(InputFieldContainer);
    InputFieldContainer.appendChild(Control);
    Control.appendChild(InputField);
    InputFieldContainer.appendChild(Control2);
    Control2.appendChild(DeleteButton);
 */
    let count = document.getElementById('number-count-container');
    count.innerHTML = ++teller;

    function deleteInput(){
        count.innerHTML = --teller;
        InputFieldContainer.remove();
    }

    DeleteButton.addEventListener('click',deleteInput);
    
}

let buttonAddInput = document.getElementById('add-input-btn');
buttonAddInput.addEventListener('click',addInput);


function realTimeSum(event){
    
    inputField1 = parseInt(document.getElementById('input-field-1').value);
    inputField2 = parseInt(document.getElementById('input-field-2').value);
    console.log(inputField1,inputField2);
    
    let result = inputField1 + inputField2;
    let resultField = document.getElementById('sum-result-container');
    
    resultField.innerText = result;
    
    function sum(event){
        result = inputField1 + inputField2;
        resultField = document.getElementById('sum-result-container');
    
        resultField.innerText = result;
    }
    
    let buttonSum = document.getElementById('sum-submit-btn');
    buttonSum.addEventListener('click',sum);
    
}

/*
function realTimeSum(event){
    inputField1 = parseInt(document.getElementById('input-field-1').value);
    inputField2 = parseInt(document.getElementById('input-field-2').value);
    console.log(inputField1,inputField2);

    let result = inputField1 + inputField2;
    let resultField = document.getElementById('sum-result-container');
    
    resultField.innerText = result;
    /*
    function sum(event){
        result = inputField1 + inputField2;
        resultField = document.getElementById('sum-result-container');
    
        resultField.innerText = result;
    }
    
    let buttonSum = document.getElementById('sum-submit-btn');
    buttonSum.addEventListener('click',sum);
    
}
*/
inputField1.addEventListener('input',realTimeSum);
inputField2.addEventListener('input',realTimeSum);

function realTimeProduct(event){

    inputField1 = parseInt(document.getElementById('input-field-1').value);
    inputField2 = parseInt(document.getElementById('input-field-2').value);
    console.log(inputField1,inputField2);

    let result = inputField1 * inputField2;
    let resultField = document.getElementById('product-result-container');
    
    resultField.innerText = result;

    /*
    function product(event){
        inputField1 = parseInt(document.getElementById('input-field-1').value);
        inputField2 = parseInt(document.getElementById('input-field-2').value);
        let result = inputField1 * inputField2;
        let resultField = document.getElementById('product-result-container');

        resultField.innerText = result;
        //console.log(result);
    }

    let buttonProduct = document.getElementById('product-submit-btn');
    buttonProduct.addEventListener('click',product);
    */
}

inputField1.addEventListener('input',realTimeProduct);
inputField2.addEventListener('input',realTimeProduct);





