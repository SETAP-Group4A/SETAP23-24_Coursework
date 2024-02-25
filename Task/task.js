"use strict";

function task(){
    let title = document.querySelector('#title').value;
    let date = document.querySelector('#date').value;
    let startTime = document.querySelector('#startTime').value;
    let endTime = document.querySelector('#endTime').value;
    let prLvl = document.querySelector('.prLvl').value;
    let desc = document.querySelector('#desc').value;
    let newTask  = {
        title: title,
        date: date,
        startTime: startTime,
        endTime: endTime,
        prLvl: prLvl,
        desc: desc
    };
    localStorage.setItem("task", JSON.stringify(newTask));
    taskDuration();
}

function taskDuration() {
    let storedTask = localStorage.getItem("task");
    if (storedTask) {
        let task = JSON.parse(storedTask);
        //let startTime = new Date(`${task.date}T${task.startTime}:00Z`);
        //let endTime = new Date(`${task.date}T${task.endTime}:00Z`);
        return task.endTime - task.startTime;
    };
    return 0;
}
// could show problems because time is set to 12 hour clock

task();