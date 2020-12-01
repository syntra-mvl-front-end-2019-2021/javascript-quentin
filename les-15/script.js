const baseUrl = "https://api.exchangeratesapi.io/";
const $container = document.getElementById('container');


function writeExchangeRate(rates){
  const $dateTag = document.createElement('p');
  $dateTag.textContent = rates.date;

  const $baseTag = document.createElement('h4');
  $baseTag.textContent = rates.base;

  const $ulTage = document.createElement('ul');
  Object.keys(rates.rates).forEach(function(key){
    const $liTag = document.createElement('li');
    $liTag.textContent = key + ':' + rates.rates[key];
    $ulTage.append($liTag);
  })

  $container.append($dateTag,$baseTag,$ulTage);
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
  writeExchangeRate(jsonData)

}).catch(function(error){

  console.log(error);

})