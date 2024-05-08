function displayTaskInfo(event) {
  //Code for going to smaller window

  //Get Handles
  let details = document.querySelector('#details');
  let taskName = document.querySelector('#detailsName');
  let taskPriority = document.querySelector('#detailsPriority');
  let taskDate = document.querySelector('#detailsDate');
  let taskStart = document.querySelector('#detailsStartTime');
  let taskEnd = document.querySelector('#detailsEndTime');
  let taskDesc = document.querySelector('#detailsDesc');
  let back = document.querySelector('#detailsClose');

  taskName.textContent = event.title;
  taskPriority.textContent = `Priority: ${event.prio}`;
  taskDate.textContent = `Date: ${event.date}`;
  taskStart.textContent = `Starts: ${event.startForDisplay}`;
  taskEnd.textContent = `Ends: ${event.endForDisplay}`;
  taskDesc.textContent = `Notes: ${event.desc}`;

  details.showModal();
  back.addEventListener('click', () => {details.close()});
}

async function LoadCalendar() {
  // Set the desired width and height for the calendar
  const calendarWidth = "100%";
  const calendarHeight = "600px";
  //const slotMinTime = "08:00:00"; // Example start time
  //const slotMaxTime = "18:00:00"; // Example end time

  

  let events = await LoadTasks();

  let calendarEl = document.getElementById("calendar");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridThreeDay",
    height: calendarHeight,
    width: calendarWidth,
    //slotMinTime: slotMinTime,
    //slotMaxTime: slotMaxTime,
    headerToolbar: {
      left: "prev,next",
      center: "title",
      right: "timeGridThreeDay,timeGridWeek,dayGridMonth",
    },
    events: events,
    eventClick: function (info) {
      events.forEach(event => {
        displayTaskInfo(event)});
    },
    views: {
      timeGridThreeDay: {
        type: "timeGrid",
        duration: { days: 3 },
        buttonText: "3 Days",
      },
      timeGridWeek: {
        type: "timeGrid",
        duration: { days: 7 },
        buttonText: "Week",
      },
      dayGridMonth: {
        buttonText: "Month",
      },
    },
  });
  calendar.render();
}

function LoadTasks() {
  let priorityColors = {
    'high': '#FF5733',
    'medium': '#FFD633',
    'low': '#33FF6B'
  };
  let events = [];
  let storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
      let tasks = JSON.parse(storedTasks);
      tasks.forEach(function(task) {
          let event = {
              title: task.name,
              prio: task.prio,
              date: task.date,
              start: task.date + 'T' + task.startTime,
              end: task.date + 'T' + task.endTime,
              desc: task.desc,
              startForDisplay: task.startTime,
              endForDisplay: task.endTime
          };

          // Check if priority is defined for the task
          if (task.prio) {
              // Apply color based on priority
              let color = priorityColors[task.prio] || '#3377FF'; // Default color if priority not found
              event.backgroundColor = color;
          }
          events.push(event);
      });
  }
  return events;
}

window.addEventListener("load", LoadCalendar);

// loadTasks called twice
//Date needs to be pre selected
// task doesnt have all the info