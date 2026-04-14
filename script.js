const submitButton = document.querySelector('#submitButton');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

console.log(submitButton);
console.log(todoInput);
console.log(todoList);

submitButton.addEventListener('click', function () {
  const taskObject = document.createElement('li');
  taskObject.textContent = todoInput.value;
  taskObject.classList.add('todoItem');

  todoList.appendChild(taskObject);
  console.log(todoInput.value);
  event.preventDefault();
});
