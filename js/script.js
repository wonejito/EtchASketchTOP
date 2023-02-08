let numeroDeCuadros = 8;
let clickme = document.querySelector(".clickme");

clickme.addEventListener("click", function () {
	numeroDeCuadros = parseInt(prompt("Di: "));
});

let contenedor = document.querySelector("#contenedor");
contenedor.style.cssText = `grid-template-columns: repeat(${numeroDeCuadros}, 1fr); grid-template-rows: repeat(${numeroDeCuadros}, 1fr);`;
let titulo = document.querySelector("#title");

function defaultt() {
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
defaultt();

let cubos = document.querySelectorAll(".square");

cubos.forEach((cubito) => {
	cubito.addEventListener("mouseover", function () {
		this.style.backgroundColor = "yellow";
	});
});
