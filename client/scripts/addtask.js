function addTask() {
  let name = document.querySelector("#taskName").value;
  let prio = document.querySelector("#taskPriority").value;
  let date = document.querySelector("#taskDate").value;
  let startTime = document.querySelector("#taskStartTime").value;
  let endTime = document.querySelector("#taskEndTime").value;
  let desc = document.querySelector("#taskDesc").value;

  // Send task data to server
  fetch("/addTask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      prio,
      date,
      startTime,
      endTime,
      desc,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      document.getElementById("addTaskForm").reset();
      console.log("Task added successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// Function to fetch and display all tasks
function displayAllTasks() {
    fetch('/tasks')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(tasks => {
            console.log('All tasks:', tasks);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

