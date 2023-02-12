let clickme = document.querySelector(".clickme");
let contenedor = document.querySelector("#contenedor");

function defaultt() {
	let numeroDeCuadros = 24;
	for (i = 0; i < numeroDeCuadros * numeroDeCuadros; i++) {
		let cubo = document.createElement("div");
		cubo.className = "square";
		cubo.style.backgroundColor = "white";
		cubo.style.width = 256 / numeroDeCuadros;
		cubo.style.height = 256 / numeroDeCuadros;
		// cubo.style.border = "1px solid white";
		contenedor.style.cssText = `grid-template-columns: repeat(${numeroDeCuadros}, 1fr); grid-template-rows: repeat(${numeroDeCuadros}, 1fr);`;
		contenedor.appendChild(cubo);
	}
}
defaultt();
let cubos = document.querySelectorAll(".square");

function addListeners(cubos) {
	cubos.forEach((cubito) => {
		cubito.addEventListener("mouseover", function () {
			this.style.backgroundColor = "black";
		});
	});
}

addListeners(cubos);

function clear() {
	cubos.forEach((qb) => contenedor.removeChild(qb));
	// cubos.forEach((cubito) => cubito.remove());
}

function costum() {
	clear();
	let numeroDeCuadros = parseInt(prompt("Di: "));

	for (j = 0; j < numeroDeCuadros * numeroDeCuadros; j++) {
		let cubo = document.createElement("div");
		cubo.className = "square";
		cubo.style.backgroundColor = "white";
		cubo.style.width = 256 / numeroDeCuadros;
		cubo.style.height = 256 / numeroDeCuadros;
		// cubo.style.border = "1px solid black";
		contenedor.style.cssText = `grid-template-columns: repeat(${numeroDeCuadros}, 1fr); grid-template-rows: repeat(${numeroDeCuadros}, 1fr);`;
		contenedor.appendChild(cubo);
	}
	cubos = document.querySelectorAll(".square");

	addListeners(cubos);
}

clickme.addEventListener("click", function () {
	costum();
});
