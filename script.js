document.addEventListener('DOMContentLoaded', () => {
    const taskNameInput = document.getElementById('taskName');
    const taskCategoryInput = document.getElementById('taskCategory');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const filterCategory = document.getElementById('filterCategory');
    const clearTasksBtn = document.getElementById('clearTasksBtn');
  
    // Add Task
    addTaskBtn.addEventListener('click', () => {
      const taskName = taskNameInput.value.trim();
      const taskCategory = taskCategoryInput.value;
  
      if (taskName === '') {
        alert('Task name cannot be empty!');
        return;
      }
  
      const li = document.createElement('li');
      li.setAttribute('data-category', taskCategory);
      li.innerHTML = `
        <span>${taskName} (${taskCategory})</span>
        <div>
          <input type="checkbox" class="complete-task">
          <button class="remove-btn">Remove</button>
        </div>
      `;
      taskList.appendChild(li);
  
      taskNameInput.value = '';
      taskCategoryInput.value = 'Work';
    });
  
    // Mark Task as Complete
    taskList.addEventListener('change', (e) => {
      if (e.target.classList.contains('complete-task')) {
        const li = e.target.closest('li');
        li.classList.toggle('completed');
      }
    });
  
    // Remove Task
    taskList.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-btn')) {
        e.target.closest('li').remove();
      }
    });
  
    // Filter Tasks
    filterCategory.addEventListener('change', () => {
      const category = filterCategory.value;
      const tasks = taskList.querySelectorAll('li');
      tasks.forEach(task => {
        if (category === 'All' || task.getAttribute('data-category') === category) {
          task.style.display = '';
        } else {
          task.style.display = 'none';
        }
      });
    });
  
    // Clear All Tasks
    clearTasksBtn.addEventListener('click', () => {
      taskList.innerHTML = '';
    });
  });
  