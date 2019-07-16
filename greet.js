var greetBtnElem = document.querySelector(".clicked");
var language = document.querySelectorAll(".language");
var test = document.getElementById("#language")
var textVal = document.querySelector("#textName");
var greetingString = document.querySelector(".greetingDiv")
var theLanguage = ""
var greet = greetFactory();
var namesGreeted = {};
var greetcount = document.querySelector(".counter")
localStorage['name'] = namesGreeted;


function greetMe() {
    var checkedRadiobtn = document.querySelector("input[name='radiobut']:checked");
    for (let i = 0; i < checkedRadiobtn.length; i++) {
        var elem = checkedRadiobtn[i];
        if (elem.checked) {
            if (elem.value == "English") {
                document.getElementById("lang").innerHTML = greet.theLanguage;
                increment();
            }
        }
    }
    if (checkedRadiobtn) {
        theLanguage = checkedRadiobtn.value
    }


    greetingString.innerHTML = greet.getName(textVal.value)
    increment()
}



function increment() {
    var textVal = document.querySelector("#textName").value;
    greet.getName(textVal);


    if (textVal === undefined || textVal === "") {
        return false;
    }
    greet.setCounter();
    greetcount.innerHTML = greet.getCounter();
}

// localStorage.getItem('Name');
// namesCounted++;

// localStorage['counted'] = namesCounted;


greetBtnElem.addEventListener("click", greetMe)