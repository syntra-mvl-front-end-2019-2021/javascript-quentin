const baseUrl = "https://api.exchangeratesapi.io/";
const $container = document.getElementById('container');

const $submit = document.querySelector('#submit');
const $currencyFrom = document.querySelector('#currencyFrom');
const $currencyTo = document.querySelector('#currencyTo');
const $resultContainer = document.querySelector('#result');

function printCurrency(currencyFrom,currecyTo,date,rate){
  $resultContainer.innerHTML = `<p> ${currencyFrom} = ${rate}${currecyTo} (${date})`;
}

function formSubmit(event){
  const currencyFrom = $currencyFrom.value;
  const currencyTo = $currencyTo.value;
  fetch(baseUrl + "latest?base=" + currencyFrom + '&symbols=' + currencyTo)
  .then(response => response.json())
  .then(response => {
    const rate = response.rates[currencyTo];
    const date = response.date;
    printCurrency(currencyFrom,currencyTo,date,rate);
  })
  .catch(function(error){
    console.log(error)
  })
}

document.forms.currency.addEventListener('submit',formSubmit());