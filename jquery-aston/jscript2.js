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

title.addEventListener('mouseover', function () {
    counterTitle.increase();
    console.log(counterTitle.number);
    console.log("la pause est terminée");

}, false);

var inputName = document.getElementById('name');
var displayName = document.querySelector('#displayName');

inputName.addEventListener('keyup', function(event) {

      var value = event.target.value;
    displayName.style.color = '#000';  

    if (value.length >=5) {
        displayName.style.color = 'red';
    }

    displayName.innerHTML = event.target.value;

});

// togglebox
function toggleBox(selector) {
    var elements = document.querySelectorAll(selector);

    elements.forEach(function(element) {

   //element.nextElementSibling('click', function (event) {
       element.addEventListener('click', function (event) {
            switchDisplay(element.nextElementSibling);
       }, false);
   
    });
}
function switchDisplay(element) {
    element.style.display = element.style.display !== 'none' ? 'none':'block';
}

toggleBox('.toggleBox h1');
toggleBox('.switchBox h2');
