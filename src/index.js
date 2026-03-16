document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.querySelector('#new-task-description')
    const taskList = document.querySelector('#tasks')
    const newTask = document.createElement('li')
    newTask.textContent = input.value
    taskList.appendChild(newTask)
    input.value = ''
  }
  // your code here
,)})
