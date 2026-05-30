let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");

    if(input.value === "") return;

    tasks.push(input.value);

    displayTasks();

    input.value = "";
}

function displayTasks() {

    const list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach((task,index)=>{

        list.innerHTML += `
        <li>
            ${task}
            <button onclick="deleteTask(${index})">
            Delete
            </button>
        </li>`;
    });
}

function deleteTask(index){
    tasks.splice(index,1);
    displayTasks();
}
