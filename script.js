// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Define the addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn"); // ✅ use classList.add (required by test)

    // Assign an onclick event to remove the li when clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, and li to task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }

  // Event listener for Add Task button
  addButton.addEventListener("click", addTask);

  // Event listener for pressing "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
