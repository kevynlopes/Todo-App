let tasksArchived = localStorage.getItem("tasksArchived")
  ? localStorage.getItem("tasksArchived").split(",")
  : [];
let taskList = [];
let input = document.querySelector(".input-add-task");
let buttonAddTask = document.querySelector(".button");
let buttonEditTask = document.querySelector("#buttonEditTask");
let searchBar = document.querySelector(".search-bar");
let taskAtual = null;
let menuMobile = document.querySelector(".menu-mobile");
buttonEditTask.style.display = "none";

let saved = localStorage.getItem("tasks")
  ? localStorage.getItem("tasks").split(",")
  : [];
taskList = saved ? saved : [];
render();
tasksArchived = tasksArchived ? tasksArchived : [];

function adicionarTarefa() {
  if (!input.value.trim()) return;

  taskList.push(input.value.trim());
  input.value = "";
  render();
}

function removeTask(index) {
  if (
    confirm("Tem certeza que deseja apagar essa tarefa de sua lista?") == true
  ) {
    taskList.splice(index, 1);
    input.value = "";
    buttonEditTask.style.display = "none";
    buttonAddTask.style.display = "block";
    render();
  }
}

function editTask(task) {
  taskAtual = task;
  buttonEditTask.style.display = "block";
  buttonAddTask.style.display = "none";

  input.value = "";
  input.value = taskList[task];
}

function archiveTask(taskIndex) {
  if (taskIndex !== null) {
    console.log(taskIndex);
    let taskArchive = taskList[taskIndex];

    console.log(tasksArchived);
    tasksArchived.push(taskArchive);

    localStorage.setItem("tasksArchived", tasksArchived);

    console.log(localStorage.getItem("tasksArchived"));

    taskList.splice(taskIndex, 1);
    render();
  }
}

function editarTarefa() {
  taskList[taskAtual] = input.value;
  buttonEditTask.style.display = "none";
  buttonAddTask.style.display = "block";
  input.value = "";
  taskAtual = null;
  render();
}

function render() {
  let tasks = document.querySelector(".tasks");
  tasks.innerHTML = "";

  taskList.forEach((taskItem, index) => {
    let taskEl = document.createElement("div");
    taskEl.classList.add("task-item");

    taskEl.innerHTML = `
    <div class="taskItem">${taskItem}</div>
     <div>
      <button onclick="removeTask(${index})" class="button remove">Remover</button>
      <button onclick="editTask(${index})" class="button edit">Editar</button>
      <button onclick="archiveTask(${index})" class="button archive">Arquivar</button>
     </div>
    `;

    tasks.appendChild(taskEl);
  });

  localStorage.setItem("tasks", taskList);
}

function handleMenuMobile() {
  let listMenu = document.querySelector(".list-header-container");

  listMenu.classList.toggle("active");
}
