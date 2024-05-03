function addTask(){
    let name = document.querySelector('#taskName').value;
    let prio = document.querySelector('#taskPriority').value;
    let date = document.querySelector('#taskDate').value;
    let startTime = document.querySelector('#taskStartTime').value;
    let endTime = document.querySelector('#taskEndTime').value;
    let desc = document.querySelector('#taskDesc').value;


    if (!name || !prio || !date || !startTime || !endTime || !desc) {
        alert("All fields are required");
        return;
    }
    
    saveTaskToLocalStorage({
        name,
        prio,
        date,
        startTime,
        endTime,
        desc
    })

    document.getElementById("addTaskForm").reset();
};

function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    window.location = "/dashboard";
}