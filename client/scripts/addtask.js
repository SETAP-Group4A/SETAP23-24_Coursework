function autoScheduler(newTask) {
  const ExistingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const ExistingTasksFromDate = [];
  for (let i = 0; i < ExistingTasks.length; i++) {
    const task = ExistingTasks[i];
    if (task.date === newTask.date) {
      ExistingTasksFromDate.push(task);
    }
  }
  const OverlappingTasks = [];
  for (let i = 0; i < ExistingTasksFromDate.length; i++) {
    const task = ExistingTasksFromDate[i];
    if (
      newTask.startTime >= task.startTime &&
      newTask.startTime < task.endTime
    ) {
      OverlappingTasks.push(task);
      return true;
    } else if (
      newTask.endTime > task.startTime &&
      newTask.endTime <= task.endTime
    ) {
      OverlappingTasks.push(task);
      return true;
    } else if (
      newTask.startTime <= task.startTime &&
      newTask.endTime >= task.endTime
    ) {
      OverlappingTasks.push(task);
      return true;
    } else {
      return false;
    }
  }
}

function addTask() {
  let name = document.querySelector("#taskName").value;
  let prio = document.querySelector("#taskPriority").value;
  let date = document.querySelector("#taskDate").value;
  let startTime = document.querySelector("#taskStartTime").value;
  let endTime = document.querySelector("#taskEndTime").value;
  let desc = document.querySelector("#taskDesc").value;

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
    desc,
  });

  if (!autoScheduler(newTask)) {
    saveTaskToLocalStorage(newTask);
    document.getElementById("addTaskForm").reset();
  } else {
    // Handle overlapping tasks
    alert("The new task overlaps with existing tasks!");
  }
}

function saveTaskToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  window.location = "/dashboard";
}
