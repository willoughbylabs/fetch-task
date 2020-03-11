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
    // append to ToDos section
    toDoSection.append(toDo);
    toDo.innerText = add.value;
    toDo.prepend(checkbox);
    toDo.append(deleteTask);
}

// add new task on submit
addTaskForm.addEventListener("submit", addTask);


toDoSection.addEventListener("click", function(e) {
    let target = e.target;
    console.log(target);
    // delete a task
    if (target.className === "delete") {
        console.log("delete");
    }
    // mark a task complete
    if (target.className === "markDone") {
        console.log("done");
    }
});

