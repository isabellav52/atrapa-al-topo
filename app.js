
const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;
let posiciontopo = null

function  cuadradoazar () {
 cuadrado.forEach ((nombredeclase => {
   nombredeclase.classList.remove("topo");
 });

let posicionalazar = cuadrado[Math.floor (Math.random()*9)];
posicionalazar.classList.add("topo");

posiciontopo = posicionalazar.id;
