console.log("Hello World !");

// alert("Bienvenue dans ma to do list !")

function addTask() {
    let task = [];
    if( task.length == 0) {
        console.log("Votre ToDoList est vide ! ")
    } else {
        task.forEach(task => {
            let li = document.createElement('li');
            li.textContent = task;
            document.getElementById('task-list').appendChild(li);
        });
    };

};