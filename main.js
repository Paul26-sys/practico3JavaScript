// 1. Introducción a JavaScript
/*
Ejercicio 2
Requisito: mostrar por consola el resultado de los valores 
declarados en el codigo si a(5), b(10) c = 15
*/
// Declarar variables
let a = 5;
let b = 10;
let c = a + b;

// Mostrar resultado en la consola
console.log("El valor de a es:", a);
console.log("El valor de b es:", b);
console.log("La suma de a y b, es decir c, es:", c);

/*
Ejercicio 3:
Escribe un programa que pida al usuario su nombre y 
lo almacene en una variable. Luego, imprime un saludo 
en la consola que incluya el nombre del usuario.
Requisito: se debe utilizar la instrucción prompt 
y pedir mediante este elemento el nombre y luego mostrarlo en consola
*/
// Pedir al usuario que ingrese su nombre
let nombre = prompt("Por favor, ingresa tu nombre:");

// Mostrar un saludo en la consola que incluya el nombre
console.log("¡Hola, " + nombre + "! Bienvenido.");

//2. Operadores lógicos y condicionales
/*
Ejercicio 1:
Crea un script que declare tres variables: a, b, y c. 
Asigna a a y b valores numéricos 
y determina cual es el mayor. Imprime el resultado en la consola.
*/
// Declarar variables
let a = 5;
let b = 10;
let c;

// Determinar cuál es el mayor
if (a > b) {
    c = a;
    console.log("El mayor es a con un valor de:", c);
} else if (b > a) {
    c = b;
    console.log("El mayor es b con un valor de:", c);
} else {
    console.log("a y b son iguales con un valor de:", a);
}

/*
Ejercicio 2:
Crea un programa que pida al usuario un número y 
determine si es par o impar.
Requisitos:  utilice la instrucción propmt  si es 
par, debe mostrar "El número (numeroIngresado) 
es par", y si es impar, "El número  (numeroIngresado) es impar".
*/
// Pedir al usuario un número
let numeroIngresado = prompt("Por favor, ingresa un número:");

// Convertir el valor ingresado en un número entero
numeroIngresado = parseInt(numeroIngresado);

// Verificar si el número es par o impar
if (numeroIngresado % 2 === 0) {
    console.log("El número " + numeroIngresado + " es par.");
} else {
    console.log("El número " + numeroIngresado + " es impar.");
}

//3. Operadores de asignación y bucles
/*
Ejercicio 1:
Crea un script que inicialice una variable en 10 y 
luego use un bucle while para restarle 1 en cada iteración 
hasta que la variable sea igual a 0. 
Imprime el valor de la variable en cada iteración.
*/
// Inicializar la variable
let numero = 10;

// Usar un bucle while para restar 1 en cada iteración
while (numero > 0) {
    console.log("Valor actual de la variable:", numero);
    numero--;  // Restar 1 en cada iteración
}

// Imprimir cuando la variable llegue a 0
console.log("Valor final de la variable:", numero);

/*
Ejercicio 2:
Escribe un programa que utilice un bucle do...while para pedirle al usuario que ingrese un número mayor a 100. 
El bucle debe repetirse hasta que el usuario ingrese un número mayor a 100.
Requisitos: Debe utilizarse la instrucción prompt y 
luego mostrar por consola el numero ingresado de la manera que 
se muestra abajo
*/
let numeroIngresado;

do {
    // Pedir al usuario que ingrese un número
    numeroIngresado = prompt("Por favor, ingresa un número mayor a 100:");

    // Convertir el valor ingresado en un número
    numeroIngresado = parseInt(numeroIngresado);

} while (numeroIngresado <= 100 || isNaN(numeroIngresado));

// Mostrar en consola el número ingresado mayor a 100
console.log("Número ingresado correctamente: " + numeroIngresado);

//4. Funciones de JavaScript
/*
Ejercicio 1:
Escribe una función llamada esPar que reciba un número como 
parámetro y retorne true si el número es par y false si es impar. 
Prueba la función con diferentes números.
*/
// Función para verificar si un número es par
function esPar(numero) {
    return numero % 2 === 0;
}

// Pruebas con diferentes números
console.log(esPar(4));  // true, porque 4 es par
console.log(esPar(7));  // false, porque 7 es impar
console.log(esPar(0));  // true, porque 0 es considerado par
console.log(esPar(19)); // false, porque 19 es impar
console.log(esPar(12)); // true, porque 12 es par

/*
Ejercicio 2:
Crea una función llamada convertirCelsiusAFahrenheit que 
reciba un valor en grados Celsius y lo convierta a Fahrenheit. 
La fórmula es F = C × 1.8 + 32. 
Muestra el resultado en la consola.
*/
// Función para convertir grados Celsius a Fahrenheit
function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

// Pruebas con diferentes valores en Celsius
console.log("20°C en Fahrenheit es: " + convertirCelsiusAFahrenheit(20));  // 68°F
console.log("0°C en Fahrenheit es: " + convertirCelsiusAFahrenheit(0));    // 32°F
console.log("-10°C en Fahrenheit es: " + convertirCelsiusAFahrenheit(-10)); // 14°F
console.log("30°C en Fahrenheit es: " + convertirCelsiusAFahrenheit(30));  // 86°F
console.log("100°C en Fahrenheit es: " + convertirCelsiusAFahrenheit(100)); // 212°F

//5. Objetos en JavaScript
/*
Ejercicio 1:
Define un objeto persona con las propiedades 
nombre, edad, y ciudad. Luego, agrega un método que 
permita cambiar la ciudad de la persona. Usa el método para actualizar 
la ciudad y muestra las propiedades actualizadas en la consola.
*/
// Definir el objeto persona
let persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid",
    
    // Método para cambiar la ciudad
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};

// Mostrar las propiedades iniciales en la consola
console.log("Antes de cambiar la ciudad:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);

// Cambiar la ciudad usando el método
persona.cambiarCiudad("Barcelona");

// Mostrar las propiedades actualizadas en la consola
console.log("Después de cambiar la ciudad:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);

/*
Ejercicio 2:
Crea un objeto libro con propiedades titulo, autor, y año. 
Luego, escribe un método que determine si el libro tiene más de 10 años desde su publicación. Muestra un mensaje 
en la consola indicando si el libro es antiguo o reciente.
*/
// Definir el objeto libro
let libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    año: 1967,
    
    // Método para determinar si el libro tiene más de 10 años
    esAntiguo: function() {
        let añoActual = new Date().getFullYear();
        if (añoActual - this.año > 10) {
            console.log("El libro '" + this.titulo + "' es antiguo.");
        } else {
            console.log("El libro '" + this.titulo + "' es reciente.");
        }
    }
};

// Llamar al método para verificar si el libro es antiguo o reciente
libro.esAntiguo();

//6. Arrays
/*
Ejercicio 1:
Declara un array llamado numeros con los números del 1 al 10. 
Escribe un bucle que multiplique cada número por 2 y almacene los resultados en un nuevo array. 
Muestra el array original y el nuevo array en la consola.
*/
// Declarar el array con los números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array para almacenar los resultados
let resultados = [];

// Bucle para multiplicar cada número por 2
for (let i = 0; i < numeros.length; i++) {
    resultados[i] = numeros[i] * 2;
}

// Mostrar el array original y el nuevo array en la consola
console.log("Array original:", numeros);
console.log("Array de resultados:", resultados);

/*
Ejercicio 2:
Crea un array vacío llamado pares. Escribe un bucle for que itere hasta 20 y que agregue 
los primeros 10 números pares al array. Al final, imprime el array pares en la consola.
*/
// Crear un array vacío llamado pares
let pares = [];

// Bucle for para iterar hasta 20
for (let i = 0; i <= 20; i++) {
    // Verificar si el número es par
    if (i % 2 === 0) {
        // Agregar el número par al array
        pares.push(i);
    }
}

// Mostrar el array de números pares en la consola
console.log("Primeros 10 números pares:", pares.slice(0, 10));

