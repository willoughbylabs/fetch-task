// add.value to local store data-tasks array for holding tasks
// retrive data-tasks[]
// for loop every element and print tasks
// on tasks delete, remove element from data-tasks array

// load stored tasks from local storage
let storedTasks = JSON.parse(localStorage.getItem("stored-tasks"));
if (storedTasks === null) {
    storedTasks = [];
    localStorage.setItem("stored-tasks", JSON.stringify(storedTasks));
}

// add new tasks
let addTaskForm = document.querySelector("#addTaskForm");
let toDoSection = document.querySelector("#toDos ul")
let add = document.querySelector("#add");

function addTask(e) {
    e.preventDefault();
    // create to-do elements
    let toDo = document.createElement("li");
    let checkbox = document.createElement("input");
    let deleteTask = document.createElement("input");
    // set attributes on elements
    toDo.classList.add("task");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("markDone");
    deleteTask.setAttribute("type", "button");
    deleteTask.classList.add("delete");
    // save to local storage
    let dataTask = {
        id: (storedTasks.length),
        task: add.value
    }
    storedTasks.push(dataTask);
    localStorage.setItem("stored-tasks", JSON.stringify(storedTasks));
    // append to ToDos section
    toDoSection.append(toDo);
    toDo.innerText = add.value;
    toDo.prepend(checkbox);
    toDo.append(deleteTask);
}

// add task on submit
addTaskForm.addEventListener("submit", addTask);

// task options
toDoSection.addEventListener("click", function(e) {
    let target = e.target;
    console.log(target);
    // delete task
    if (target.className === "delete") {
        console.log("delete");
    }
    // mark task complete
    if (target.className === "markDone") {
        console.log("done");
    }
});