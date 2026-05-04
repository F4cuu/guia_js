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
    const valor = input.value;
    const numero = Number(valor);
    const suma = numero + 10;

    mensaje.textContent = suma;
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
case "iniciar":
    console.log("¡Juego iniciado!");
    break;
case "ajustes":
    console.log("Menu de Ajustes");
    break;
case "creditos":
    console.log("Creditos del juego");
    break;
case "salir":
    console.log("Saliendo del juego...");
    break;
}

// ejercicio 7 //

for (let i = 3; i >= 1; i--) {
    console.log(i);
}

console.log("¡Comienza!");

// ejercicio 8 //

const puntosporronda = [15, 25, 10, 30, 20];
let puntajetotal = 0;

for (let puntos of puntosporronda) {
  puntajetotal += puntos;
}

console.log("La puntuación total es: " + puntajetotal);

// ejercicio 9 //

const inventario1 = ["espada", "poción", "llave", "escudo", "mapa"];
console.log("El primer objeto del inventario es: " + inventario1[0]);
console.log("El último objeto del inventario es: " + inventario1[4]);
console.log("Cantidad de objetos en el inventario: " + inventario1.length);

// ejercicio 10 //

const inventario2 = ["espada", "poción", "llave", "escudo"];
for (let i=0; i<inventario2.length; i++) {
    console.log("El objeto en la posición " + i+1 + " es: " + inventario2[i]);
}

// ejercicio 11 //

let mochila = [];
mochila.push("Linterna")
mochila.push("Comida");
mochila.push("Mapa");

mochila.pop();

console.log(mochila);

// ejercicio 12 //

let inventario3 = ["espada", "poción", "llave"];
if (inventario3.includes("llave")) {
    console.log("Has utilizado la llave para abrir la puerta.");
} else {
    console.log("Necesitas una llave para abrir esta puerta.");
}

// ejercicio 13 //

function saludarusuario(nombre) {
    console.log("¡Hola, " + nombre + "! Bienvenido al juego.");
}

saludarusuario("F4cuu");

// ejercicio 14 //

function calcularvidarestante (vida, danio) {
    return vida - danio;
}   

let resultado = calcularvidarestante(100, 30);

console.log("Vida restante: " + resultado);

// ejercicio 15 //

const sumar = (a, b) => {
    return a + b;
};

console.log("La suma de 5 y 10 es: " + sumar(5, 10));

// ejercicio 16 //

const jugador = {
 nombre: "Luna",
 vida: 100,
 energia: 80,
 nivel: 1,
 inventario: ["espada", "poción"]
};

console.log("Nombre del jugador: " + jugador.nombre);
console.log("Vida del jugador: " + jugador.vida);
console.log("Energía del jugador: " + jugador.energia);
console.log("Nivel del jugador: " + jugador.nivel);
console.log("Inventario del jugador: " + jugador.inventario.join(", "));

// ejercicio 17 //

const jugador2 = {
 nombre: "Kai",
 nivel: 1,
 monedas: 0
};

function subedenivel(jugador2) {
    jugador2.nivel += 1;
    jugador2.monedas += 50;
}

subedenivel(jugador2);
console.log("Nivel del jugador: " + jugador2.nivel);
console.log("Monedas del jugador: " + jugador2.monedas);

// ejercicio 18 //

const personajes = [
 { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
 { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
 { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];
console.log("Personajes:");
for (let personaje of personajes) {
    console.log("Nombre: " + personaje.nombre + ", Vida: " + personaje.vida + ", Tipo: " + personaje.tipo + ", Nivel: " + personaje.nivel);
}

// ejercicio 19 //

const personajesFuertes = personajes.filter((jugadores) => {
    return jugadores.nivel >= 3;
});
console.log(personajesFuertes);

// ejercicio 20 //

const nombres = personajes.map((personaje) => {
    return personaje.nombre;
});

console.log("Nombres de los personajes:" + nombres);
