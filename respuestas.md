// ejercicio 27 //

¿Cuál es la diferencia entre let, const y var?

¿Cuándo usarías let? ¿Cuándo usarías const? ¿Por qué actualmente se recomienda evitar var?

Yo usaría LET cuando neceisto una variable cuyo valor va a cambiar durante la ejecución del programa. A diferencia de VAR, LET tiene alcance de blqoue, lo que significa que solo existe dentro del bloque {} donde fue declarada, haciendo a LET una opción mas segura y predecible.

Por otro lado, usaría CONST cuadno el valor no debe cambiar una vez asignado. Tambien tiene alcance de bloque como LET, pero la diferencia principas es que no se puede reasignar. La opción recomendada por defecto cuando no necesitas modificar la variable.

Ahora... ¿Porque evitar VAR? Se suele recomendar evitar VAR porque tiene un comportamiento mas antiguo y problemático. Tiene un alcance de función, no de bloque, por lo que puede escaparse del bloque {}. Tambien puede ser HOISTED, lo que hace que se comporte de manera muy poco intuitiva. Además, permite una redeclaración sin errores. 

// ejercicio 28 //

Analizar este código: let nombre = "Global";

function mostrarNombre() { let nombre = "Local"; console.log(nombre); }

mostrarNombre(); console.log(nombre);

¿Qué se muestra primero? ¿Qué se muestra después? ¿Por qué?

Lo primero que se muestra es el "Local", y despues el "Global", debido a que de la funcion "mostrarNombre()" se crea una variable "nombre" local que solo existe dentro de esa función, y tiene prioridad sobre la variable externa (global). 

Es por eso mismo que primero se muestra la variable "Local" (scope de la función), y luego, al salir de la función, se muestra "Global" (scope global). Esto debido a que se muestra primero el scope más cercano y luego va hacia afuera si no encuentra la variable.

// ejercicio 29 //

¿Cuándo conviene usar un array y cuándo conviene usar un objeto?

const inventario = ["espada", "poción", "llave"];

const jugador = {
 nombre: "Luna",
 vida: 100,
 nivel: 3
};

Explicar qué representa cada estructura.

Pripero principal, el array se usa cuando queremos guardar una lista de elementos del mismo tipo, donde el orden puede ser importante o simplemente queremos agrupar varios valores.

Mientras que los objetos se usan cuando queremos representar una entidad con diferentes caracteristicas o propiedades.

Para dar un ejemplo:
--
const misiones = ["rescatar al rey", "encontrar el mapa", "salvar a la aldea de un dragón"];

const ejemigo = {
    nombre: dragón de piedra",
    vida: 300,
    daño: 43
};

Ahora, ¿Qué representa cada estructura?

El primer array son las misiones, las cuales representan una lista de tareas o misiones del juego. Son todas del mismo tipo (misiones) y lo importante es la colección de elementos.

Por otro lado, el objeto (dragón de piedra) representa a un enemigo específico con datos distintos entre sí (nombre, vida y daño), es decir, propiedades que describen una sola entidad.

Cuestión que un array conviene para una colección de elementos similares, mientras que los objetos convienen usarlos para entidades con caracteristicas definidas.

// ejercicio 30 //

Pregunta: ¿Qué es un evento en JavaScript?

Consigna: Analizar este código:

boton.addEventListener("click", function () { console.log("El usuario hizo clic"); });

¿Qué elemento escucha el evento? ¿Qué evento se está escuchando? ¿Qué acción se ejecuta? ¿Dónde podríamos aplicar esto en una página web o videojuego?

Un evento en JavaScript es una acción que ocurre en el navegador, como un clic, una pulsación de tecla o la carga de una página. JavaScript puede "escuchar" estos eventos y ejecutar código en respuesta.

Con respecto al análisis del código:
- El elemento que escucha el evennto es "botón".

- Se esta escuchando el evento "click", cuando el usuario hace clic sobre el botón.

- La acción que se ejecuta es la función que muestra en consola el mensaje "El usuario hizo clic".

- Podriamos aplicar esto en una pagina web para manejar interacciones del usuario, como enviar formularios, abrir menús, o navegar entre secciones. En un videojuego, puede aplicarse para acciones como atacar, saltar, pausar el juego, o iniciar una partida cuando el jugador presiona un botón.