let tasks = [];

function addTask() {
  let taskName = document.getElementById("task-name").value;
  let taskAssignee = document.getElementById("task-assignee").value;
  let taskPriority = document.getElementById("task-priority").value;
  let taskDueDate = document.getElementById("task-due-date").value;
  let taskDescription = document.getElementById("task-description").value;
  
  let task = {
    name: taskName,
    assignee: taskAssignee,
    priority: taskPriority,
    dueDate: taskDueDate,
    description: taskDescription,
    completed: false
  };
  
  tasks.push(task);
  updateTaskList();
}

function updateTaskList() {
  let taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let taskListItem = document.createElement("li");
    taskListItem.innerHTML = task.name + " - " + task.assignee + " - " + task.priority + " - " + task.dueDate + " - " + task.description;
    if (task.completed) {
      taskListItem.style.textDecoration = "line-through";
    }
    taskList.appendChild(taskListItem);
  }
}
