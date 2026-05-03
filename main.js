console.log("Guía JavaScript iniciada");

// ejercicio 1 //
const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log("Datos de jugador: " + nombre + ", " + edad + ", " + vida + ", " + puntaje + ", " + estaActivo);

// ejercicio 2 //

let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;

let puntajetotal = puntosBase + bonus - penalizacion;

console.log("Puntaje total:", puntajetotal);

// ejercicio 3 //

const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    const value = input.value;
    const number = Number(value);
    const addition = number + 10;

    mensaje.textContent = addition;
});

// ejercicio 4 //
if (edad >= 13) {
    console.log("Acceso permitido, ¡Disfrute del juego!");
} else {
    console.log("Acceso denegado. Debe tener al menos 13 años.");
}

// ejercicio 5 //

if (vida <= 0) {
    console.log("¡Game over!");
} else if (vida >= 1 && vida <= 29) {
    console.log("¡ESTADO CRÍTICO!");
} else if (vida >= 30 && vida <= 70) {
    console.log("Estás herido.");
} else {
    console.log("Vitalidad estable.");
}

// ejercicio 6 //

let opcion = "iniciar";

switch (opcion) {
case "start":
    console.log("¡Juego iniciado!");
    break;
case "settings":
    console.log("Settings Menu");
    break;
case "credits":
    console.log("GameCredits");
    break;
case "exit":
    console.log("Saliendo del juego...");
    break;
}

// ejercicio 7 //

for (let i = 3; i >= 1; i--) {
    console.log(i);
}

console.log("¡Comienza!");

// ejercicio 8 //

const pointsperround = [15, 25, 10, 30, 20];
let totalpoints = 0;

for (let points of pointsperround) {
  totalpoints += points;
}

console.log("La puntuación total es: " + totalpoints);
