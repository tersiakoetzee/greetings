var greetBtnElem = document.querySelector(".clicked");
var clickResetElem = document.querySelector(".clickReset")
var language = document.querySelectorAll(".language");
var test = document.getElementById("#language");
var textVal = document.querySelector("#textName");
var greetingString = document.querySelector(".greetingDiv");
var theLanguage = "";
var namesGreeted = {};
var greetcount = document.querySelector(".counter");
var greeted = JSON.parse(localStorage.getItem("Name"))
var greet = greetFactory(greeted);
// count()

function greetMe() {

 
    
    var checkedRadiobtn = document.querySelector("input[name='radiobut']:checked");

    if (checkedRadiobtn) {
        theLanguage = checkedRadiobtn.value;
    }
    greet.name(textVal.value)
    greet.getName(textVal.value, theLanguage);
    greetingString.innerHTML = greet.output();
    greetcount.innerHTML = greet.setCounter();

    localStorage.setItem("Name", JSON.stringify(greet.storedNames()));
    // count()
}
// function count(){
//     count.innerHTML = greet.count();
// }

function resetBtn() {
    localStorage.clear();
    greet.clear();
    greetcount.innerHTML = "";
    greetingString.innerHTML = "";

}

clickResetElem.addEventListener("click", resetBtn)
greetBtnElem.addEventListener("click", greetMe)
window.onload = function(){
    greetcount.innerHTML = greet.setCounter();
}