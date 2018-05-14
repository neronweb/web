//console.log("hello");
//console.info("hello");
//console.warn("hello");
//console.error("hello");

// Schema (classe)
function Counter() {
    this.number=0;

    this.increase = function() {
        this.number++;
    }

    this.decrease = function(){
        this.number--;
    }
    
}

var counterTitle = new Counter();
var title = document.getElementById('title');

title.addEventListener('mouseover', function () {           // compter le survol de souris; la"fonction" est callback donc appliquée apres l'evenement
    counterTitle.increase();
    console.log(counterTitle.number);
    console.log("la pause est terminée");

}, false);  //ecouter  les click et increment compteur, afficher msg

/**
 * afficher un nom saisi dans un champ text
 */
var inputName = document.getElementById('name');
var displayName = document.querySelector('#displayName');

inputName.addEventListener('keyup', function(event) {

   // console.log(event.target.value);  // recupere l'evement, la lette, incrementer dans value et afficher

    var value = event.target.value;
    displayName.style.color = '#000';  // remise en noir

    if (value.length >=5) {
        displayName.style.color = 'red';
    }

    displayName.innerHTML = event.target.value;

});


// togglebox
// faire disparaitre un paragraphe en cliquant sur le titre

var toggleBoxTitle = document.querySelector('.toggleBox h1');  // selection des classe refence à toggle

toggleBoxTitle.addEventListener('click', function(event){   // applique la fonction sur un evenement click

// alert('hi');  // test du click sur h1


var p = toggleBoxTitle.nextElementSibling; // mis de fonction dzns une variable pour pour faire un test et inverser la fonction

// toggleBoxTitle.nextElementSibling.style.display = 'none';  //  fonction pour disparition

p.style.display = p.style.display !== 'none' ? 'none' : 'block';   //test si deja à none si oui passer à block  mode simplifié pour remplace la boucle if 

//if (p.style.display !== 'none') {
  //  p.style.display = 'none';
    //} else {
    //p.style.display = 'block';
   // }
}, false);












//var c= new Counter();
//c.increase();
//c.increase();
//c.decrease();
//console.log(c.number);

//var c2= new Counter();
//c2.increase();
//c2.increase();
//c2.increase();

//console.log(c2.number);