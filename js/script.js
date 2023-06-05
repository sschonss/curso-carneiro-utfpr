var tasks = [];
    
    // Função para atualizar a lista de tarefas
    function updateTaskList() {
      var taskList = document.getElementById("task-list");
      taskList.innerHTML = "";
      
      tasks.forEach(function(task, index) {
        var taskRow = document.createElement("tr");
        
        var taskCheckboxCell = document.createElement("td");
        var taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.checked = task.completed;
        taskCheckbox.addEventListener("change", function() {
          toggleTaskStatus(index);
        });
        taskCheckboxCell.appendChild(taskCheckbox);
        
        var taskTextCell = document.createElement("td");
        var taskText = document.createElement("input");
        taskText.type = "text";
        taskText.value = task.title;
        taskText.readOnly = true;
        taskTextCell.appendChild(taskText);
        
        var taskDeleteCell = document.createElement("td");
        var taskDeleteButton = document.createElement("button");
        taskDeleteButton.textContent = "Excluir";
        taskDeleteButton.addEventListener("click", function() {
            deleteTask(index);
          });
          taskDeleteCell.appendChild(taskDeleteButton);
          
          taskRow.appendChild(taskCheckboxCell);
          taskRow.appendChild(taskTextCell);
          taskRow.appendChild(taskDeleteCell);
          
          taskList.appendChild(taskRow);
        });
      }
      
      // Função para criar uma nova tarefa
      function createTask(event) {
        event.preventDefault();
        var taskInput = document.getElementById("task-input");
        
        var newTask = {
          title: taskInput.value,
          completed: false
        };
        
        tasks.push(newTask);
        
        taskInput.value = "";
        
        updateTaskList();
      }
      
      // Função para alternar o status de uma tarefa
      function toggleTaskStatus(index) {
        tasks[index].completed = !tasks[index].completed;
      }
      
      // Função para excluir uma tarefa
      function deleteTask(index) {
        tasks.splice(index, 1);
        updateTaskList();
      }
  
      var taskForm = document.getElementById("task-form");
      taskForm.addEventListener("submit", createTask);