
let myFun = function(arg) {
  typeof(arg) !== "string" ? alert("Не строка") :

  arg.length > 30 ? console.log(arg.trim().substring(0, 29) + "...") : console.log(arg.trim());
}
myFun("      ddggdgdgмсссg  в п    вав");