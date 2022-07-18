let frutas = [];
let verduras = [];
let laticinios = [];
let cereais = [];
let carnes = [];
let doces = [];
let bebidas = [];

let item = document.getElementById("item");

let categoria = document.getElementById("select");

var resFrutas = document.getElementById("frutas");
var resVerdu = document.getElementById("verduras");
var resLat = document.getElementById("laticinios");
var resCere = document.getElementById("cereais");
var resCarnes = document.getElementById("carnes");
var resDoces = document.getElementById("doces");
var resBeb = document.getElementById("bebidas");

function cadastrar() {
	if (item.value == "") {
		alert("Você deve inserir um produto!");
	} else {
		if (categoria.value == 'Frutas') {
			var novo = item.value;
			frutas.push(novo);
		}
		if (categoria.value == 'Verduras') {
			var novo = item.value;
			verduras.push(novo);
		}
		if (categoria.value == 'Laticinios') {
			var novo = item.value;
			laticinios.push(novo);
		}
		if (categoria.value == 'Cereais') {
			var novo = item.value;
			cereais.push(novo);
		}
		if (categoria.value == 'Carnes') {
			var novo = item.value;
			carnes.push(novo);
		}
		if (categoria.value == 'Doces') {
			var novo = item.value;
			doces.push(novo);
		}
		if (categoria.value == 'Bebidas') {
			var novo = item.value;
			bebidas.push(novo);
		}
	}
	mostrarLista();
}

function mostrarLista() {
	resFrutas.innerHTML = '<h3>Frutas  </h3>'
	resVerdu.innerHTML = '<h3>Verduras  </h3>'
	resLat.innerHTML = '<h3>Laticionios  </h3>'
	resCere.innerHTML = '<h3>Cereais  </h3>'
	resCarnes.innerHTML = '<h3>Carnes  </h3>'
	resDoces.innerHTML = '<h3>Doces  </h3>'
	resBeb.innerHTML = '<h3>Bebidas  </h3>'
	for (let index in frutas) {
		resFrutas.innerHTML += `<p>- ${frutas[index]}</p>`;
	}
	for (let index in verduras) {
		resVerdu.innerHTML += `<p>- ${verduras[index]}</p>`;
	}
	for (let index in laticinios) {
		resLat.innerHTML += `<p>- ${laticinios[index]}</p>`;
	}
	for (let index in cereais) {
		resCere.innerHTML += `<p>- ${cereais[index]}</p>`;
	}
	for (let index in carnes) {
		resCarnes.innerHTML += `<p>- ${carnes[index]}</p>`;
	}
	for (let index in doces) {
		resDoces.innerHTML += `<p>- ${doces[index]}</p>`;
	}
	for (let index in bebidas) {
		resBeb.innerHTML += `<p>- ${bebidas[index]}</p>`;
	}
	item.value = "";
	item.focus();
}