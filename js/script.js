let title = document.querySelector("#title");
let principalgrid = document.querySelector("#principalgrid");

// let divs = document.createElement("div");
// divs.style.cssText = "background-color:blue;height:100px;width:100px;";

// principalgrid.appendChild(divs);

// title.addEventListener("click", function () {
//   let divs = document.createElement("div");
//   divs.style.cssText = "background-color:blue;height:100px;width:100px;";

//   principalgrid.appendChild(divs);
// });

//intento de crear una funcion que lo genere automaticamente
function createElements(number) {
  for (i = 0; i < number; i++) {
    let divs = document.createElement("div");
    divs.style.cssText =
      "background-color:blue;height:100px;width:100px; border: solid green";
    divs.className = "claseDiv";

    principalgrid.appendChild(divs);
  }
}
createElements(9);
