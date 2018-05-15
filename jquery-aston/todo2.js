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

                list.append('<li>' + text + '</li>');
                //console.log(event.target.value);
                input.val('');   // vider le champ input

            }
        }
    });

    list.on('click','li', function () {
        alert($(this).text());
     //$('.todo-list').on('click','li', function () {
   // alert($(this).text());  var list deja créée remplace le . todo-list 
});
});

// avant rajout de fonctions