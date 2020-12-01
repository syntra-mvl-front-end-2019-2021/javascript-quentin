const baseUrl = "https://api.exchangeratesapi.io/";


const $select = document.querySelector('#currency');
const $secSelect = document.querySelector('#currency-2');
const $content = document.getElementById('content')
const $btn = document.createElement('button');
$btn.innerText = "COMPARE";
const $result = document.createElement('div');
$result.innerText = "RESULT";


function selectRates(rates){
  
  const $selectTag = document.createElement('select');
  const $selectTag2 =document.createElement('select');
  $selectTag.classList.add('select1');
  $selectTag2.classList.add('select2');

  Object.keys(rates.rates).forEach(function(key){
    const $optionTag = document.createElement('option');
    $optionTag.textContent = key;
    $selectTag.append($optionTag);
  })

  Object.keys(rates.rates).forEach(function(key){
    const $optionTag = document.createElement('option');
    $optionTag.textContent = key;
    $selectTag2.append($optionTag);
  })

  $content.append($selectTag,$selectTag2,$btn,$result);
}

function compareRates(rates){
  const $selectedVal1 = document.querySelector('.select1');
  const $selectedVal2 = document.querySelector('.select2');
  //return rate of the value from database
  function multiples(val1,val2){
    //console.log(val1 * val2);
  }
  $selectedVal1.addEventListener('change', function(){
    return $selectedVal1.value;
  })
  $selectedVal2.addEventListener('change', function(){
    return $selectedVal2.value;
  })
  multiples($selectedVal1,$selectedVal2);
}


const latest = fetch(baseUrl + 'latest', {
  method :'GET',
})



latest.then(function(response){

  if(!response.ok){
    throw new Error('Fetch Failed');
  }
  return response.json();

}).then(function(jsonData){

  console.log(jsonData);
  selectRates(jsonData);

}).then(function(jsonData){
  $btn.addEventListener('click',compareRates(jsonData));
  
}).catch(function(error){

  console.log(error);

})