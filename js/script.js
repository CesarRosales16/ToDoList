window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            element.innerText = task;
            /*element.addEventListener("click", () => {
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            });
            element.addEventListener("click", function () {
                console.log(this);
                let parent = this.parentNode;
                if (parent) {
                    parent.removeChild(this);
                }
            });*/
            // Añadir un boton para marcar de finalizado
            var done = document.createElement("input");
            done.type = "checkbox";
            done.addEventListener('change', function () {
                if (this.checked) {
                    element.style.textDecoration = "line-through";
                } else {
                    element.style.textDecoration = "none";
                }
            });
            element.appendChild(done);
            // Elmine de la lista
            var del = document.createElement("input");
            del.type = "button";
            del.value = "Borrar";
            del.addEventListener("click", function () {
                let parent = element.parentNode;
                if (parent) {
                    parent.removeChild(element);
                }
            });
            element.appendChild(del);
            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}