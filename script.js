
//input field
const inputTask = document.querySelector("#task-input");
//input button
const taskBtn = document.querySelector("#add-task-btn");
//unordered list
const todoList = document.querySelector("#todo-list");

const tasks = [];

function addingNewTodo() {
  const newTask = inputTask.value.trim();
  if (newTask !== "") {
    tasks.push(newTask);
    console.log(tasks);
    renderTask();
    inputTask.value = "";
  }
}

taskBtn.addEventListener("click", addingNewTodo);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addingNewTodo();
  }
});

function renderTask() {
  //clearing a todolist before rendering
  todoList.innerHTML = "";
  tasks.forEach(function (task, index) {
    //creating list element
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${task}`;
    //creating a remove btn in list
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    //appending elements to the ul
    li.appendChild(removeBtn);
    todoList.appendChild(li);
    console.log(todoList);

    //removing element
    removeBtn.addEventListener("click", function () {
      removeList(index);
    });
  });
}

function removeList(index) {
  tasks.splice(index, 1);
  renderTask();
  console.log(index);
}
