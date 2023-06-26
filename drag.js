const draggables  = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".task-container");

draggables.forEach((task) => {
    task.addEventListener("dragstart", () =>{
        task.classList.add("is-dragging");
    });
    task.addEventListener("dragend", () =>{
        task.classList.remove("is-dragging");
    });
});

droppables.forEach((target) => {
    target.addEventListener("dragover", (e) => {
        e.preventDefault();

        const bottomTask = insertTaskAbove(target, e.clientY);
        const currentTask = document.querySelector(".is-dragging");

        if(!bottomTask){
            target.appendChild(currentTask);
        }else{
            target.insertBefore(currentTask, bottomTask);
        }
    });
})

const insertTaskAbove = (target, mouseY) => {
    const notDragging = target.querySelectorAll(".task:not(.is-dragging)");

    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    notDragging.forEach((task) => {
        const { top } = task.getBoundingClientRect();

        const offset = mouseY - top;
        
        if (offset < 0 && offset > closestOffset){
            closestOffset = offset
            closestTask = task;

        }
    });

    return closestTask;
};