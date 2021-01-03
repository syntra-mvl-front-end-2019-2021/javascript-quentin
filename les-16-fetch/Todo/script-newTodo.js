const $listContainer = document.querySelector('.content-list');
const $buttonAddTodo = document.querySelector('.button-add');
const $modal = document.getElementById('myModal');
const $modalCloseBtn = document.querySelector('.modal-close');

function fetchAllTodos() {
  fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
    method: 'GET',
    headers: {
      'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
    }
  })
    .then(result => {
      if (!result.ok) {
        throw new Error('No luck');
      }
      return result.json();
    })
    .then(function(result) {
      console.log(result.data)
      printAllTodos(result.data,true);
    })
    .catch(function(error){
      console.error(error)
    });
}

function printAllTodos(allItems,clear){

  if(clear){
    $listContainer.innerHTML = '';
  }

  let allTodoItems = '';
  allItems.forEach(element => {
    allTodoItems += `
    <li class = "content-list__item" data-id = " ${element.id} "> 
      <p> ${element.description} </p> 
      <button class="button-update">Update</button> 
      <button class="button-delete"> Delete</button> 
    </li>
    `
  });

  $listContainer.insertAdjacentHTML('beforeend',allTodoItems); 
}

function deleteTodo(id) {
  fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id, {
    method: 'DELETE',
    headers: {
      'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
    },
  })
    .then(result => {
      if (!result.ok) {
        throw new Error('No luck');
      }
      fetchAllTodos();
    })
    .catch(function(error){
      console.error(error)
    });
}

function deleteBtnOnClick(event){
  if(event.target.matches('.button-delete')){
    const $listItem = event.target.closest('.content-list__item');
    const id = $listItem.dataset.id;
    deleteTodo(id);
  }

  if(event.target.matches('.button-update')){
    const $listItem = event.target.closest('.content-list__item');
    const id = $listItem.dataset.id;
    openModal();
  }
}

function openModal(){
  $modal.style.display = 'block';
}

function closeModal(){
  $modal.style.display = 'none';
}

$buttonAddTodo.addEventListener('click',openModal);
$modalCloseBtn.addEventListener('click',closeModal);
$listContainer.addEventListener('click',deleteBtnOnClick);

fetchAllTodos();

