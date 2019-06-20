var greetBtnElem = document.querySelector("greetBtn");


function GreetFactory(stored) {

  var names = stored || {};

  function giveName(name) {

    if (name) {
      if (names[name] === undefined) {
          names[name] = 0;
       }
     }
     return name;
  }

  function greetingBtnElem(name, lang) {
    var theName = giveName(name);
    if (lang === "English") {
      return "Hello, " + theName;

    } else if (lang === "isiXhosa") {
      return "Molo, " + theName;

    } else if (lang === "Afrikaans") {
      return "Hallo, " + theName;
    }
  }

  function counter() {
    return Object.keys(names).length;
  }

  function getName() {
    return names;
  }
  return {
    giveName,
    greetingBtnElem,
    counter,
    getName,
  }
}


greetBtnElem.addEventListener('click',greetingBtnElem);