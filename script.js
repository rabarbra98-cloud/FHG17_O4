const submitButton = document.querySelector('#submitButton');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

console.log(submitButton);
console.log(todoInput);
console.log(todoList);


function deleteTaskButton (event) {
  // console.log("Button pressed")
  // console.log(event)
  event.target.parentElement.parentElement.classList.add("slideOut")
  setTimeout(function(){event.target.parentElement.parentElement.remove()},1000)
}

function doneTaskButton (event) {
  event.target.parentElement.parentElement.classList.toggle("strikethrough")
}

submitButton.addEventListener('click', function () {
  if (todoInput.value == "") {console.log("empty");}
  else{
  const taskObject = document.createElement('li');
  const taskButtonDone = document.createElement("button");  //Kunne spart mange linjer med kode her hvis jeg visste
  const taskButtonDelete = document.createElement("button");//hvordan man genererer et objekt med spesifikke egenskaper
  const taskButtonContainer = document.createElement("span")
  taskButtonDone.textContent = "Ferdig"
  taskButtonDone.classList.add("doneButton")
  taskButtonDelete.textContent = "Slett"
  taskButtonDelete.classList.add("deleteButton")
  taskButtonContainer.appendChild(taskButtonDone)
  taskButtonContainer.appendChild(taskButtonDelete)
  // console.log(taskButtonContainer)
  
  taskObject.textContent = todoInput.value;
  taskObject.classList.add('todoItem', 'growIn');
  taskObject.appendChild(taskButtonContainer)
  todoList.appendChild(taskObject);
  // console.log(todoInput.value);

  taskButtonDelete.addEventListener("click", deleteTaskButton)
  taskButtonDone.addEventListener("click",doneTaskButton)
}
  event.preventDefault();
});
