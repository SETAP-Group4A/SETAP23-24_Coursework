"use strict";

function scheduler(taskTitle) {
    const task = getTask(taskTitle);
    const taskDay = findDay(task.date);
    if (taskDay.length == 0) {
        taskDay.push(task); 
    } 
    else {
        for (let i = 0; i < taskDay.length; i++) {
            let otherTask= taskDay[i]
            if (task.endTime < otherTask.startTime) { 
                taskDay.splice(i, 0, task);
                break;
            } //add case for priority and if the task is already in the list or list is full
        }
    }
}
//Not sure if startTime, endTime, and date are in the right format


function getTask(taskTitle) {
    let task = JSON.parse(localStorage.getItem(taskTitle));
    //we need a case for when the task is not found
    return task
}

function findDay(date) {
    let tasksForDate = JSON.parse(localStorage.getItem(date));
    if (!tasksForDate) {
        tasksForDate = [];
        strDate = date.toString();
        localStorage.setItem(strDate, JSON.stringify(tasksForDate));
    }
    return tasksForDate;
}
