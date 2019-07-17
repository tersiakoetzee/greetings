var greetBtnElem = document.querySelector(".clicked");
var language = document.querySelectorAll(".language");
var test = document.getElementById("#language");
var textVal = document.querySelector("#textName");
var greetingString = document.querySelector(".greetingDiv");
var theLanguage = "";
var greet = greetFactory();
var namesGreeted = {};
var greetcount = document.querySelector(".counter");
localStorage['name'] = namesGreeted;


function greetMe() {
    var checkedRadiobtn = document.querySelector("input[name='radiobut']:checked");
    
    if (checkedRadiobtn) {
        theLanguage = checkedRadiobtn.value;
    }

console.log(textVal.value)
    greetingString.innerHTML = greet.getName(textVal.value, theLanguage)
    greetcount.innerHTML = greet.setCounter();

}



greetBtnElem.addEventListener("click", greetMe)