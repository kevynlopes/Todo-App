let taskList = [];
let input = document.querySelector(".input-add-task");
buttonEditTask.style.display = "none";
function adicionarTarefa(task) {
  if (input.value == "") return;

  taskList.push(input.value);
  input.value = "";

  render();
}

function removeTask(index) {
  if (
    confirm("Tem certeza que deseja apagar essa tarefa de sua lista?") == true
  ) {
    taskList.splice(index, 1);
    render();
  }
}

function editTask(task) {
  input.value = "";
  input.value = taskList[task];
  let buttonAddTask = document.querySelector(".button");
  let buttonEditTask = document.querySelector("#buttonEditTask");
  buttonAddTask.style.display = "none";
  buttonEditTask.style.display = "block";
  buttonEditTask.addEventListener("click", () => {
    if (input.value == "") return;
    console.log(taskList, "taskindex", task);
    taskList[task] = input.value;
    buttonAddTask.style.display = "block";
    buttonEditTask.style.display = "none";
    input.value = "";
    render();
  });
}

function render() {
  let tasks = document.querySelector(".tasks");
  tasks.innerHTML = "";

  taskList.forEach((taskItem, index) => {
    let taskEl = document.createElement("div");
    taskEl.classList.add("task-item");

    taskEl.innerHTML = `
      ${taskItem}
     <div>
      <button onclick="removeTask(${index})" class="button remove">Remove</button>
      <button onclick="editTask(${index})" class="button edit">Editar</button>
     </div>
    `;

    tasks.appendChild(taskEl);
  });
}
