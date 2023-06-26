const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const todoContainer =  document.getElementById("todo-container");
const deleteTask = document.querySelectorAll(".deleteTask")
const element = document.getElementsByClassName("task")

let taskId = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;

    if(!value) return;
    
    const newTask = document.createElement("p")
    newTask.classList.add("task");
    newTask.setAttribute("draggable", true);
    newTask.setAttribute("id", `task-${taskId}`);
    newTask.innerHTML = `${value} <button class="deleteTask"> ❌</button>` ;
    taskId++;

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("is-dragging");
    });

    newTask.addEventListener("dragend", () => {
        newTask.classList.remove("is-dragging");
    });

    const deleteButton = newTask.querySelector(".deleteTask");
    deleteButton.addEventListener("click", (e) => {
        const task = e.target.closest("p");
        task.remove();
    });

    todoContainer.appendChild(newTask);

    input.value = "";
})
deleteTask.forEach(deleteTask => {
    deleteTask.addEventListener("click", () =>{
        deleteTask.parentElement.remove();
    });
});