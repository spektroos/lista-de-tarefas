class Task {

    constructor() {
        this.id = 0
        this.arrayTasks = [];
    }

    save() {
        let task = this.readData();

        this.add(task);

        this.addTable();

        alert('Tarefa Salva');
    }

        readData() {
        let task = {}

        task.id = this.id;
        task.taskName = document.getElementById('cardTaskName').value;
        task.description = document.getElementById('cardDescription').value;
        task.date = document.getElementById('cardDate').value;

        return task;
    }

    add(task) {
        this.arrayTasks.push(task);
        this.id++;
    }

    addTable() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayTasks.length; i++) {
            let tr = tbody.insertRow();
            
            let td_taskName = tr.insertCell();
            let td_description = tr.insertCell();
            let td_date = tr.insertCell();
            let td_actions = tr.insertCell();

            td_taskName.innerText = this.arrayTasks[i].taskName;
            td_description.innerText = this.arrayTasks[i].description;
            td_date.innerText = this.arrayTasks[i].date;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png';

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/deletar.png'

            td_actions.appendChild(imgEdit);
            td_actions.appendChild(imgDelete);
        }
    }

    clean() {

    }
}

var task = new Task();
