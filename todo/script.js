const todos = [];

let todoInput = document.getElementById("todoInput");

function addTodo() {
  if (todoInput.value !== "") {
    todos.push(todoInput.value);
    todoInput.value = "";
    displayTodo();
  }
}

function displayTodo() {
  let todosUL = document.querySelector("ul");
  let lastTodo = todos[todos.length - 1];
  let todoLi = document.createElement("li");
  todoLi.textContent = lastTodo;
  todoLi.id = "todo" + (todos.length - 1);
  let rmBtn = createRemoveButton(todos.length - 1);
  todoLi.appendChild(rmBtn);
  todosUL.appendChild(todoLi);

  // let allLi = document.querySelectorAll("li");
  // allLi.forEach(function (li) {
  //   li.remove();
  // });

  // todos.forEach(function (todo) {
  //   let todoLi = document.createElement("li");
  //   todoLi.textContent = todo;
  //   todosUL.appendChild(todoLi);
  // });
}

function createRemoveButton(id) {
  let removeButton = document.createElement("button");
  removeButton.textContent = "Delete";
  removeButton.id = id;
  removeButton.addEventListener("click", function (event) {
    todos.splice(id, 1);
    let parentLi = document.getElementById("todo" + id);
    parentLi.remove();
  });
  return removeButton;
}

todoInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// (function eventListenerRemoveButton() {
//   let todosLi = document.querySelector("li");
//   todosLi.addEventListener("click", function (event) {
//     console.log(event);
//   });
// })();
