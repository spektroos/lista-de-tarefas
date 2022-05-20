class Task {

    constructor() {
        this.id = 0
        this.arrayTasks = [];
        this.editId = null;
    }

    save() {
        let task = this.readData();

        if (this.editId == null) {
            this.add(task);
            alert('Tarefa Salva');
        }

        else {
            this.edit(this.editId, task);
            alert('Tarefa atualizada');
        }

        this.addTable();

        this.clean();
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
            imgEdit.setAttribute("onclick", "task.prepareEdit(" + JSON.stringify(this.arrayTasks[i]) + ")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/deletar.png'
            imgDelete.setAttribute("onclick", "task.delete(" + this.arrayTasks[i].id + ")");


            td_actions.appendChild(imgEdit);
            td_actions.appendChild(imgDelete);
        }
    }

    edit(id, task){
        for (let i = 0; i < this.arrayTasks.length; i++) {
            if(this.arrayTasks[i] == id) {
                this.arrayTasks[i].taskName = task.taskName;
                this.arrayTasks[i].taskName = task.description;
                this.arrayTasks[i].taskName = task.date;

            }
        }
    }

    prepareEdit(data) {
        this.editId = "data.id";

        document.getElementById('cardTaskName').value = data.taskName;
        document.getElementById('cardDescription').value = data.description;
        document.getElementById('cardDate').value = data.date;

        document.getElementById('saveButton').innerText = 'Atualizar';
        document.getElementById('buttons').style.marginLeft = '365px';
        
    }

    clean() {
        document.getElementById('cardTaskName').value = '';
        document.getElementById('cardDescription').value = '';
        document.getElementById('cardDate').value = '';
    }

    delete(id) {
        if (confirm('Deseja deletar essa tarefa?')) {

            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayTasks.length; i++) {
                if (this.arrayTasks[i].id == id) {
                    this.arrayTasks.splice(i, 1)
                    tbody.deleteRow(i);
                }
            }

            alert('Tarefa deletada');
        }
    }
}

var task = new Task();
