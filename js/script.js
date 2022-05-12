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
        let tbody = document.getElementsByClassName('tbody');

        for (let i = 0; i < this.arrayTasks.length; i++) {
            let tr = tbody.insertRow(-1);
            
            let td_taskName = tr.insertCell();
            let td_description = tr.insertCell();
            let td_date = tr.insertCell();
            let td_actions = tr.insertCell();
        }

    }

    clean() {

    }
}

var task = new Task();
