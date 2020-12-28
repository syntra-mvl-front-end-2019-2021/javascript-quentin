// ABcEHA2kcrKY4a6ipUA3
// https://phpstack-224488-1624928.cloudwaysapps.com/_/

//https://docs.directus.io/api/items.html#the-item-object

const $container = document.querySelector('.container');

function resetContent(el){
  el.innerHTML = "";
}

function printAddPostButton(){
  const $newPostBtn = document.createElement('button');
  $newPostBtn.classList.add('post__button-add');
  const $span1 = document.createElement('span');
  const $span2 = document.createElement('span');
  
  $newPostBtn.append($span1,$span2);
  $container.appendChild($newPostBtn);

  $newPostBtn.addEventListener('click',addNewPostField);
}

function addNewPostField(){
  const $newPost = document.createElement('div');
  const $newPostInputSubject = document.createElement('input');
  $newPostInputSubject.placeholder = "Nieuwe post";
  $newPost.classList.add('post_wrapper');
  const $buttonSubmit = document.createElement('button');
  $buttonSubmit.innerHTML = "Verzenden";

  $newPost.append($newPostInputSubject,$buttonSubmit)
  $container.append($newPost);
  let addNewPostBtn = document.querySelector('.post__button-add');
  addNewPostBtn.remove();

  function postNewTodo() {
    const body = {
      description: $newPostInputSubject.value,
      done: false,
    };
  
    fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
      method: 'POST',
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
        fetchAllTodos();
      })
      .catch(function(error){
        console.error(error)
      });
  }

  $buttonSubmit.addEventListener('click',postNewTodo);

}

function printPost(id,name,bodytext,date){

  function deleteTodo() {
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
        this.parentElement.hidden = true;
      })
      .catch(function(error){
        console.error(error)
      });
  }

  function updateTodo(){
    console.log($postBodyText);
    let $inputNewValue = document.createElement('input');
    let $inputNewValueBtn = document.createElement('button');
    $inputNewValueBtn.innerHTML = "UPDATE";

    $wrapper.append($inputNewValue,$inputNewValueBtn);
    $updateBtn.remove();

    $inputNewValueBtn.addEventListener('click',update);
    
    function getValue(){
      console.log($inputNewValue.value);
    }

    function update() {
      const body = {
        description: $inputNewValue.value,
        done: true,
      };
    
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
        })
        .catch(function(error){
          console.error(error)
        });
    }

  }

  let $postBodyName = document.createElement('h1');
  let $postBodyText = document.createElement('p');
  let $postBodyDate = document.createElement('h3');

  $postBodyName.innerHTML = name;
  $postBodyText.innerHTML = bodytext;
  $postBodyDate.innerHTML = date;

  const $deleteBtn = document.createElement('div');
  $deleteBtn.classList.add('post__button-delete');
  const $span = document.createElement('span');
  $deleteBtn.append($span);
  $deleteBtn.addEventListener('click',deleteTodo);

  const $updateBtn = document.createElement('img');
  $updateBtn.src = "update.svg";
  $updateBtn.addEventListener('click', updateTodo);

  const $wrapper = document.createElement('div');
  $wrapper.classList.add('post_wrapper');

  $wrapper.append($postBodyName,$postBodyText,$postBodyDate,$deleteBtn,$updateBtn);
  $container.appendChild($wrapper);
}

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
      resetContent($container);
      result.data.forEach(element => {
        printPost(element.id,element.owner,element.description,element.created_on);
      });

      printAddPostButton();

    })
    .catch(function(error){
      console.error(error)
    });
}

//postNewTodo(1);
// updateTodo(2);
// deleteTodo(3);
fetchAllTodos();