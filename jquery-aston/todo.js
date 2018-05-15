$(document).ready(function () {
    // je suis sur que le DOM est pret à être manipulé


    // on recuper mon champ input sous forme d'objet
    var input = $('.todo-input');

    // on recupere la liste ul sous forme d'objet
    var list = $('.todo-list');

    //dseclaration tableau de stockage pour les taches
    var tasks = [];

    // on ajout,un ecouteur d'evenement "keyup" sur le champ texte
    input.on('keyup', function (event) {

        if (event.keyCode === 13) {
            // code 13 c'est le code de la touche entrée
            var text = event.target.value;
                // on verifie si le text n'est pas vide (espace) avvec la method trim
            if (text.trim()) {      // trim supprime les espaces dans une chaine de caracteres
                var task = {        // creation de des colonnes de la table
                    id: 'task-' + (tasks.length + 1),
                    // task et tasks sont deux var differentes, tasks avec "s" est un tableau
                    text: text,
                    date: Date.now(),
                    done: false
                };
                tasks.push(task);

                console.log(tasks);

                var li ='<li id="'+task.id+ '" class="list-group-item">';
                li += '<span class="todo-list-text">'+task.text+'</span>';
                li += '<i class="fa fa-trash-alt todo-delete "></i>'; // mettre une icone poubelle
                li += '<i class="fa fa-pencil-alt todo-edit"></i>';
                li +='</li>';

                list.append(li);
                //console.log(event.target.value);
                input.val('');   // vider le champ input

            }
        }
    });

    list.on('click','li', function (event) {
        var element =$(event.target); // avec le  $ on pourra le traiter avec jquery

        if(element.hasClass('todo-delete')) {

           var id = element.parent().attr('id');

           var index = tasks.findIndex(function (task) {
            return task.id === id;
            });
            tasks.splice(index,1);
            element.parent().fadeOut(1000, function(){
                $(this).remove();
            });

            //console.log(id);
            //console.log(index,tasks);
        }
        if(element.hasClass('todo-edit')){
            
        }
        //console.log(element.hasClass('todo-delete'));
        //alert($(this).text());
    
// rendre la tache "clickable pour voir le contenu"
});
});