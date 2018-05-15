$(document).ready(function() {    // appeler jquery et si le document est pret appeler la fonction,
   
    var p = $('p').css('color','red'); //le css s'applique à tous les selecteurs p

        $('p').on('click', function () {
            alert('aieee!!!');
        });

    console.log(p);

});