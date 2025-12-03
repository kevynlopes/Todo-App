let tasksArchived = localStorage.getItem("tasksArchived")
  ? localStorage.getItem("tasksArchived").split(",")
  : [];

render();

function render() {
  let tasks = document.querySelector(".tasks");

  tasks.innerHTML = "";

  tasksArchived.forEach((taskItem, index) => {
    let taskEl = document.createElement("div");
    taskEl.classList.add("task-item");

    taskEl.innerHTML = `
    <div class="taskItem">${taskItem}</div>
     <div>
      <button onclick="removeTask(${index})" class="button remove">Remover</button>
      <button onclick="editTask(${index})" class="button edit">Editar</button>
      <button onclick="archiveTask(${index})" class="button archive">Desarquivar</button>
     </div>
    `;

    tasks.appendChild(taskEl);
  });

  localStorage.setItem("tasksArchived", tasksArchived);
}
