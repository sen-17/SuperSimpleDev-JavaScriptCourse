const toDoList = [{
  name :'make dinner', 
  dueDate :'2024-07-26'
  }, {
  name :'wash dishes',
  dueDate : '2024-07-26'
}];

  

renderToDoList()

function renderToDoList(){


  let toDoListHTML = '';

  toDoList.forEach(function(toDoObject, index){
        const {name, dueDate} = toDoObject
        const html = 
        `<div>${name}</div>
          <div>${dueDate} </div>
          <button onclick="
            toDoList.splice(${index},1);
            renderToDoList();
          " class="delete-button">Delete</button>
        `
    toDoListHTML += html;
  })

 
    
  

  document.querySelector('.js-todo-list')
  .innerHTML = toDoListHTML;
  }


function addToDo (){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value

  const dateInputElement = document.querySelector('.due-date-input');
  const dueDate = dateInputElement.value

  toDoList.push({
    //name : name,
    //dueDate : dueDate
    name,
    dueDate
  });

  inputElement.value =''

  renderToDoList();
}

