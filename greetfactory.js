function greetFactory(listOfNames) {

  var namesGreeted = listOfNames || {} 
  
  var greetingsCounter = 0;  


  function name(textVal){
    if(namesGreeted[textVal] === undefined){
      greetingsCounter++

      namesGreeted[textVal] = 0
    }
  }

  function getName(textVal, theLanguage) {
    name(textVal)
    var upperCaseName = textVal.charAt(0).toUpperCase() + textVal.slice(1);
    if(upperCaseName.length < 1) {
      return "No Name Entered";
    }
    if(theLanguage === undefined || theLanguage === ""){
      return "No Language Selected";
    }
    if (theLanguage === "English") {
      return theGreeting = "Hello, " + upperCaseName;
    }
    if (theLanguage === "isiXhosa") {
      return theGreeting = "Molo, " + upperCaseName;
    }
    if (theLanguage === "Afrikaans") {
      return theGreeting = "Hallo, " + upperCaseName;
    }
  
  }

  function englishLang() {
    return "Hello," + namesGreeted;
  }

  function setCounter() {
  return greetingsCounter;
  }



  return {
    englishLang,
    getName,
    setCounter,
//     getCounter

  }
}

