let numeroDeCuadros = 16;
let contenedor = document.querySelector("#contenedor");
contenedor.style.cssText = `grid-template-columns: repeat(${numeroDeCuadros}, 1fr); grid-template-rows: repeat(${numeroDeCuadros}, 1fr);`;
let titulo = document.querySelector("#title");
// let cubo = document.createElement("div")
// cubo.className = "cubito"

function crear() {
	for (i = 0; i < numeroDeCuadros * numeroDeCuadros; i++) {
		let cubo = document.createElement("div");
		cubo.className = "square";
		cubo.style.backgroundColor = "grey";
		cubo.style.width = 256 / numeroDeCuadros;
		cubo.style.height = 256 / numeroDeCuadros;
		cubo.style.border = "1px solid yellow";
		contenedor.appendChild(cubo);
	}
}
crear();

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
