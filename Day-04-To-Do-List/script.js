const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {

    if (inputBox.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = inputBox.value;

    listContainer.appendChild(li);

    let span = document.createElement("span");

    span.innerHTML = "\u00d7";

    li.appendChild(span);

    inputBox.value = "";

    saveData();
}


// Mark task as completed
listContainer.addEventListener("click", function(event) {

    if (event.target.tagName === "LI") {

        event.target.classList.toggle("checked");

        saveData();
    }

    // Delete task
    else if (event.target.tagName === "SPAN") {

        event.target.parentElement.remove();

        saveData();
    }

}, false);


// Save tasks to local storage
function saveData() {

    localStorage.setItem(
        "todoData",
        listContainer.innerHTML
    );
}


// Display saved tasks
function showTask() {

    const savedData = localStorage.getItem("todoData");

    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}


// Show saved tasks when page loads
showTask();