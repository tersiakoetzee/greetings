function greetFactory(listOfNames) {

  var namesGreeted = {} || namesGreeted[listOfNames];
  var greetingsCounter = 0;  

  function setName(textVal) {
    namesGreeted = textVal;
    localStorage.setItem(textVal, 1);
  
  }

  function getName(textVal) {

    
    localStorage.getItem('dataName');
    var upperCaseName = textVal.charAt(0).toUpperCase() + textVal.slice(1);
    if(upperCaseName.length < 1) {
      return "No Name Entered";
    }
    if (theLanguage === "English") {
      theGreeting = "Hello, " + upperCaseName;
    }
    if (theLanguage === "isiXhosa") {
      theGreeting = "Molo, " + upperCaseName;
    }
    if (theLanguage === "Afrikaans") {
      theGreeting = "Hallo, " + upperCaseName;
    }
    // else {
    //   (theLanguage === undefined || textVal === "");
    //   theGreeting = "No Name Entered";
    // }

    return theGreeting;

  }

  function englishLang() {
    return "Hello," + namesGreeted;
  }

  function setCounter() {
    greetingsCounter++;
  }

  function getCounter() {
    return localStorage.length;
  }


  return {
    englishLang,
    setName,
    getName,
    setCounter,
    getCounter

  }
}




//     var theName = textVal
// var z = Number(theName)
// var x = z.charAt(0)
// console.log(typeof z)
// console.log(typeof x)

// console.log(typeof theName.charAt(2))
//       for (var i=0;i<theName.length;i++){
//         var aLetter = theName[i]
//         if (typeof aLetter == "string"){
//           alert("aNumber")
//         }
//       }
//         return true