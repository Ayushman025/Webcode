// Temporary task storage
let tasks = [];

// DOM Elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");

// Add Task Event
addBtn.addEventListener("click", function () {

    const taskValue = taskInput.value.trim();

    // Validation using control statement
    if (taskValue === "") {
        message.textContent = "Please enter a task!";
        return;
    }

    message.textContent = "";

    tasks.push(taskValue);
    taskInput.value = "";

    displayTasks();
});

// Display Tasks Function
function displayTasks() {

    taskList.innerHTML = "";

    // Show message if empty
    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    // Loop through tasks
    for (let i = 0; i < tasks.length; i++) {

        // createElement()
        const li = document.createElement("li");
        li.textContent = tasks[i];

        // Mark as completed when clicked
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function (event) {
            event.stopPropagation(); // prevent complete toggle
            tasks.splice(i, 1);
            li.remove(); // remove()
            displayTasks();
        });

        // appendChild()
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    updateTaskCount();
}

// Update Task Counter
function updateTaskCount() {
    taskCount.textContent = "Total Tasks: " + tasks.length;
}