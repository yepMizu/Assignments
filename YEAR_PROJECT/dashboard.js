// Add task function
function addTask() {
  var input = document.getElementById("taskInput");
  var taskText = input.value;

  // Check if empty
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create new list item
  var li = document.createElement("li");
  li.textContent = taskText;

  // Add to list
  document.getElementById("taskList").appendChild(li);

  // Clear input
  input.value = "";
}


