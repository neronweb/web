
//base avant de gere la base de donne sur pli=usieurs colonnes
$(document).ready(function () {
    // je suis sur que le DOM est pret à être manipulé


    // on recuper mon champ input sous forme d'objet
    var input = $('.todo-input');

    // on recupere la liste ul sous forme d'objet
    var list = $('.todo-list');

    //tableau de stockage pour les taches
    var tasks = [];

    // on ajout,un ecouteur d'evenement "keyup" sur le champ texte
    input.on('keyup', function (event) {

        if (event.keyCode === 13) {
            // code 13 c'est le code de la touche entrée
            var text = event.target.value;

            if (text.trim()) {
                tasks.push(text);
                // trim supprime les espaces dans une chaine de caracteres

                //console.log(tasks);

                list.append('<li>' + text + '</li>');
                //console.log(event.target.value);
                input.val('');   // vider le champ input

            }
        }
    });


});