class Task {

    constructor() {
        this.id = 0
        this.arrayTasks = [];
    }

    save() {
        let task = this.readData();

        this.add(task);

        console.log(this.arrayTasks);
        alert('Tarefa Salva');
    }

    add(task) {
        this.arrayTasks.push(task);
        this.id++;
    }

    readData() {
        let task = {}

        task.id = this.id;
        task.taskName = document.getElementById('cardTaskName').value;
        task.description = document.getElementById('cardDescription').value;
        task.date = document.getElementById('cardDate').value;

        return task;
    }

    clean() {
        Task.clean = document.getElementById('clean') = function() {
            return alert('Gostaria de limpas todos os campos?');
        }
    }
}

var task = new Task();