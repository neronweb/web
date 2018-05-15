$(document).ready(function () {
    // ici je suis sur que le DOM est prêt à être manipuler.


    // On récupère mon champ input sous forme d'objet.
    var input = $('.todo-input');

    // On récupère la liste ul sous forme d'objet.
    var list = $('.todo-list');

    // Tableau de stockage pour les taches
    var tasks = [];

    var data = localStorage.getItem('todo');

    if (data) {
        tasks = JSON.parse(data);   //inverse de stringifie
    }
    tasks.forEach(function (task) {
        list.append(taskToHTML(task));
        
    });

    // On ajout un écouteur d'évènement "keyup" sur le champ text.
    input.on('keyup', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();

            var text = event.target.value;

            // On vérifie si le text n'est pas vide (espace) avec la méthode trim.
            if (text.trim()) {

                // On créé un objet task avec des propriétés.
                var task = {
                    id: 'task-' + (tasks.length + 1),
                    text: text,
                    date: Date.now(),
                    done: false
                };

                // Ajout de l'objet task nouvellement créé dans le tableau tasks.
                tasks.push(task);

                localStorage.setItem('todo', JSON.stringify(tasks));


                var li = taskToHTML(task);

                list.append(li);
                input.val('');
            }
        }
    });

    list.on('click', 'li', function (event) {
        event.preventDefault();

        var element = $(event.target);

        if (element.hasClass('todo-delete')) {
            event.preventDefault();

            var id = element.parent().attr('id');
            var index = tasks.findIndex(function (task) {
                return task.id === id;
            });

            tasks.splice(index, 1);

            localStorage.setItem('todo', JSON.stringify(tasks));

            element.parent().fadeOut(1000, function () {
                $(this).remove();
            });
        }

        if (element.hasClass('todo-list-text')) {
            event.preventDefault();

            element.on('keyup', function (e) {
                if (e.keyCode === 13) {
                    e.preventDefault();

                    var id = element.parent().attr('id');
                    var index = tasks.findIndex(function (task) {
                        return task.id === id;
                    });

                    var task = tasks[index];
                    task.text = e.target.innerText;
                    localStorage.setItem('todo', JSON.stringify(tasks));
                    console.log(task);
                }
            });
        }

    });
});

function taskToHTML(task) {
    var li = '<li id="' + task.id + '" class="list-group-item">';
    li += '<div class="todo-list-text single-line" contenteditable="true">' + task.text + '</div>';
    li += ' <i class="fa fa-trash-alt todo-delete"></i>';
    li += ' <i class="fa fa-pencil-alt todo-edit"></i>';
    li += '</li>';
    return li;
}

