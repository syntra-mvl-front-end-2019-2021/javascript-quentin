const $listContainer = document.querySelector('.content-list');
const $buttonAddTodo = document.querySelector('.button-add');
const $modal = document.getElementById('myModal');
const $modalResetBtn = document.querySelector('.reset-btn');
const $todoForm = document.forms['todo-form'];

let allTodoItems = {};

function fetchAllTodos() {

  $listContainer.classList.add('loading');

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
      console.log(result.data);
      saveTodoList(result.data);
      printAllTodos(result.data,true);
      $listContainer.classList.remove('loading');
    })
    .catch(function(error){
      console.error(error);
      $listContainer.classList.remove('loading');
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

function postNewTodo(body) {

  $modal.classList.add('loading');

  fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
    method: 'POST',
    headers: {
      Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((result) => {
      if (!result.ok) {
        throw new Error('No luck');
      }

      return result.json(); // JSON.parse
    })
    .then(function (result) {
      console.log(result);
      fetchAllTodos();
      $todoForm.reset();
      $modal.classList.remove('loading');
    })
    .catch(function (error) {
      console.error(error);
      $modal.classList.remove('loading');
    });
}

function updateTodo(id,body){
  
  fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id, {
    method: 'PATCH',
    headers: {
      'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(result => {
    if (!result.ok) {
      throw new Error('No luck');
      }
      return result.json(); // JSON.parse
    })
  .then(function(result) {
    console.log(result)
    fetchAllTodos();
    $todoForm.reset();
  })
  .catch(function(error){
    console.error(error)
  });

}

function todoItemFromForm(){
  return{
    description: $todoForm.elements.description.value,
  }
}

function saveTodoList(todoItems,clear){
  if(clear){
    todoItems = {};
  }
  todoItems.forEach(function(todoItem){
    allTodoItems[todoItem.id] = todoItem;
  })
}


function openModal(todoItem){
  $modal.style.display = 'block';
  console.log($todoForm.elements);
  if(todoItem){
    $todoForm.elements.id.value = todoItem.id;
    $todoForm.elements.description.value = todoItem.description;
  }

}

function closeModal(){
  $modal.style.display = 'none';
}


function deleteBtnOnClick(event){
  const $listItem = event.target.closest('.content-list__item');
  const id = $listItem.dataset.id;
  deleteTodo(id);
}

function updateBtnClick(event){
  const $listItem = event.target.closest('.content-list__item');
  const id = parseInt($listItem.dataset.id);
  openModal(allTodoItems[id]);
}

function listContainerClick(event){
  if(event.target.matches('.button-delete')){
    deleteBtnOnClick(event);
  }
  if(event.target.matches('.button-update')){
    updateBtnClick(event);
  }
}

function submitTodoForm(event){
  event.preventDefault(event);
  const id = $todoForm.elements.id.value;
  const body = todoItemFromForm();

  if(id){
    updateTodo(id,body);
  }else{
    postNewTodo(body);
  }

  closeModal();
}

function addBtnCLick(){
  openModal();
}

fetchAllTodos();

$listContainer.addEventListener('click',listContainerClick);
$buttonAddTodo.addEventListener('click',addBtnCLick);
document.forms['todo-form'].addEventListener('submit',submitTodoForm);
$modalResetBtn.addEventListener('click',closeModal);
