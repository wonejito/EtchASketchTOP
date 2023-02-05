let contenedor = document.querySelector("#contenedor");
let titulo = document.querySelector("#title");
// let cubo = document.createElement("div")
// cubo.className = "cubito"

let numeroDeCuadros = 16;

titulo.addEventListener("click", function () {
	let cubo = document.createElement("div");
	cubo.style.backgroundColor = "black";
	cubo.style.width = 256 / numeroDeCuadros;
	cubo.style.height = 256 / numeroDeCuadros;
	contenedor.appendChild(cubo);
});

// let divs = document.createElement("div");
// divs.style.cssText = "background-color:blue;height:100px;width:100px;";

// principalgrid.appendChild(divs);

// title.addEventListener("click", function () {
//   let divs = document.createElement("div");
//   divs.style.cssText = "background-color:blue;height:100px;width:100px;";

//   principalgrid.appendChild(divs);
// });

//intento de crear una funcion que lo genere automaticamente
// function createElements(number) {
//     for (i = 0; i < number; i++) {
//         let divs = document.createElement("div");
//         divs.style.cssText =
//             "background-color:blue;height:32px;width:32px; border: 1px solid green";
//         divs.className = "claseDiv";

//         principalgrid.appendChild(divs);
//     }
// }
// createElements(16);
