function greetFactory(listOfNames) {

  var namesGreeted = listOfNames || {};
  var theGreeting = "";



  function name(textVal) {
    if (textVal) {
      if (namesGreeted[textVal] === undefined) {
        namesGreeted[textVal] = 0;
      }
    }
  }

  function getName(textVal, theLanguage) {

    var upperCaseName = textVal.charAt(0).toUpperCase() + textVal.slice(1);
    if (upperCaseName === "" && theLanguage === "") {
      theGreeting = "Please Enter Name and Select Language";
    } else if (upperCaseName === "") {
      theGreeting = "No Name Entered";
    } else if (theLanguage === "") {
      theGreeting = "No Language Selected";
    } else if (theLanguage === "English") {
      theGreeting = "Hello, " + upperCaseName;
    } else if (theLanguage === "isiXhosa") {
      theGreeting = "Molo, " + upperCaseName;
    } else if (theLanguage === "Afrikaans") {
      theGreeting = "Hallo, " + upperCaseName;
    };
  }

  function output() {
    return theGreeting;
  }

  function setCounter() {
    var list = Object.keys(namesGreeted);
    return list.length;
  }

  function storedNames() {
    return namesGreeted;
  }
  function clear(){
   namesGreeted = {};
  }
  


  return {
    output,
    getName,
    setCounter,
    name,
    storedNames,
    clear
    // count
  }
}


