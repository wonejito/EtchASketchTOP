let principalgrid = document.querySelector("#principal-grid");
principalgrid.style.cssText = "display: flex;";
// let divi = document.createElement("div");
// divi.style.cssText =
//   "height: 100px; width:100px;background-color:pink;font-size:55px;";

function createDivs(numberOfDivs) {
  emptyArray = [];
  for (i = 0; i < numberOfDivs; i++) {
    emptyArray.push(`div-${[i]}`); //en este loop genero un array de los nombres de variables para los divs.
    emptyArray[i] = document.createElement("div");
    emptyArray[i].classList.add("divi");
  }
  return emptyArray[2].textContent;
}
console.log(createDivs(3));
