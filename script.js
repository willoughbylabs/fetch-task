// declare global variabes
let addTaskForm = document.querySelector("#addTaskForm");
let toDoSection = document.querySelector("#toDos ul")
let add = document.querySelector("#add");

// load and print tasks from local storage
let storedTasks = JSON.parse(localStorage.getItem("stored-tasks"));
if (storedTasks === null) {
    storedTasks = [];
    localStorage.setItem("stored-tasks", JSON.stringify(storedTasks));
}
else {
    for (let i = 0; i < storedTasks.length; i++) {
        function printTask() {
            let toDo = document.createElement("li");
            let checkbox = document.createElement("input");
            let deleteTask = document.createElement("input");
            toDo.classList.add("task");
            checkbox.setAttribute("type", "checkbox");
            checkbox.classList.add("markDone");
            deleteTask.setAttribute("type", "button");
            deleteTask.classList.add("delete");
            toDoSection.append(toDo);
            toDo.innerText = storedTasks[i].task;
            toDo.setAttribute("data-id", storedTasks[i].id);
            toDo.prepend(checkbox);
            toDo.append(deleteTask);
            if (storedTasks[i].status === "completed") {
                toDo.classList.add("completed");
                checkbox.checked = true;
            }
        }
        printTask();
    }
}

// add new tasks
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
    toDo.setAttribute("data-id", dataTask.id);
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
    // delete task
    if (target.className === "delete") {
        let id = target.parentElement.getAttribute("data-id");
        storedTasks = JSON.parse(localStorage.getItem("stored-tasks"));
        let index = storedTasks.findIndex(task => task.id == id);
        storedTasks.splice(index, 1);
        localStorage.setItem("stored-tasks", JSON.stringify(storedTasks));
        target.parentElement.remove();
    }
    // mark task complete
    if (target.className === "markDone") {
        let id = target.parentElement.getAttribute("data-id");
        if (target.parentElement.classList.contains("completed")) {
            storedTasks = JSON.parse(localStorage.getItem("stored-tasks"));
            let index = storedTasks.findIndex(task => task.id == id);
            delete storedTasks[index].status;
            localStorage.setItem("stored-tasks", JSON.stringify(storedTasks));
            target.parentElement.classList.toggle("completed");
        }
        else {
            target.parentElement.classList.toggle("completed");
            storedTasks = JSON.parse(localStorage.getItem("stored-tasks"));
            let index = storedTasks.findIndex(task => task.id == id);
            storedTasks[index].status = "completed";
            localStorage.setItem("stored-tasks", JSON.stringify(storedTasks));
        } 
    }
});