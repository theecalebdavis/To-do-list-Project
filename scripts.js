addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
  
    if (!taskText) {
      alert('Please enter a task.');
      return;
    }
  
    const li = document.createElement('li');
  
    // Task span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.addEventListener('click', () => {
      taskSpan.parentElement.classList.toggle('completed');
    });
  
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });
  
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
  
    taskList.appendChild(li);
  
    taskInput.value = ''; // Clear the input
  });