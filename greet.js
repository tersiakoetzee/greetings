var greetBtnElem = document.querySelector(".clicked");
var clickResetElem = document.querySelector(".clickReset")
var language = document.querySelectorAll(".language");
var test = document.getElementById("#language");
var textVal = document.querySelector("#textName");
var greetingString = document.querySelector(".greetingDiv");
var theLanguage = "";
var greet = greetFactory();
var namesGreeted = {};
var greetcount = document.querySelector(".counter");
greetcount.innerHTML = greet.getCounter();

function greetMe() {
   
    localStorage.setItem(textVal.value, 1);
    var checkedRadiobtn = document.querySelector("input[name='radiobut']:checked");
    
    if (checkedRadiobtn) {
        theLanguage = checkedRadiobtn.value;
    }

console.log(textVal.value)
    greetingString.innerHTML = greet.getName(textVal.value, theLanguage)
    greetcount.innerHTML = greet.setCounter();

}

function resetBtn(){
    localStorage.clear();
    greetcount.innerHTML = "";
    greetingString.innerHTML = "";
}

clickResetElem.addEventListener("click", resetBtn)
greetBtnElem.addEventListener("click", greetMe)