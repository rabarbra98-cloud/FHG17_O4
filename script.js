const submitButton = document.querySelector('#submitButton');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

console.log(submitButton);
console.log(todoInput);
console.log(todoList);


function deleteTaskButton (event) {
  // console.log("Button pressed")
  // console.log(event)
  event.target.parentElement.parentElement.remove()
}

function doneTaskButton (event) {
  console.log(event.target.parentElement.parentElement.classList.toggle("strikethrough"))
}

submitButton.addEventListener('click', function () {
  const taskObject = document.createElement('li');
  const taskButtonDone = document.createElement("button");
  const taskButtonDelete = document.createElement("button");
  const taskButtonContainer = document.createElement("span")
  taskButtonDone.textContent = "Ferdig"
  taskButtonDone.classList.add("doneButton")
  taskButtonDelete.textContent = "Slett"
  taskButtonDelete.classList.add("deleteButton")
  taskButtonContainer.appendChild(taskButtonDone)
  taskButtonContainer.appendChild(taskButtonDelete)
  console.log(taskButtonContainer)
  
  taskObject.textContent = todoInput.value;
  taskObject.classList.add('todoItem');
  taskObject.appendChild(taskButtonContainer)
  todoList.appendChild(taskObject);
  console.log(todoInput.value);

  taskButtonDelete.addEventListener("click", deleteTaskButton)
  taskButtonDone.addEventListener("click",doneTaskButton)
  event.preventDefault();
});
