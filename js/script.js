class Task {

    constructor() {
        this.id = 1
        this.arrayProduct = [];
    }

    save() {
        let task = this.readData();

        console.log(task);

    }

    readData() {
        let task = {}

        Task.id = this.id;
        Task.taskName = document.getElementsById('cardTaskName').value;
        Task.description = document.getElementsById('cardDescription').value;
        Task.date = document.getElementsById('cardDate').value;

        return task;
    }

    clean() {
        Task.clean = document.getElementById('clean').onreset = function() {
            return confirm("Gostaria de limpas todos os campos?");
        }
    }
}