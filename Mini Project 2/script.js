// Array to store tasks
let tasks = [];

// Selecting DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const message = document.getElementById("message");

// Event Listener for button
addBtn.addEventListener("click", addTask);

// Event Listener for Enter key
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {

    let taskText = taskInput.value.trim();

    // Validation using if-else
    if (taskText === "") {
        message.textContent = "Task cannot be empty!";
        return;
    } else {
        message.textContent = "";
    }

    // Push task into array
    tasks.push({
        text: taskText,
        completed: false
    });

    taskInput.value = "";

    displayTasks();
}

function displayTasks() {

    // Clear existing list
    taskList.innerHTML = "";

    // Show message if empty
    if (tasks.length === 0) {
        message.textContent = "No tasks available!";
    } else {
        message.textContent = "";
    }

    // Loop through tasks using for loop
    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        if (tasks[i].completed) {
            li.classList.add("completed");
        }

        li.textContent = tasks[i].text;

        // Complete button
        let completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";

        completeBtn.addEventListener("click", function() {
            tasks[i].completed = !tasks[i].completed;
            displayTasks();
        });

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        deleteBtn.addEventListener("click", function() {
            tasks.splice(i, 1);
            displayTasks();
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    totalTasks.textContent = tasks.length;
}