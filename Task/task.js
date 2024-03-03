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
    localStorage.setItem(newTask.title, JSON.stringify(newTask));
    taskDuration();
}
