$(document).ready(function() {    // appeler jquery et si le document est pret appeler la fonction,
   
    var p = $('p').css('color','red');

        $('p').on('click', function () {
            alert('aieee!!!');
        });
        
    console.log(p);

});