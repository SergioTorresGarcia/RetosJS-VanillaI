/*
1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
funciona.
*/

// var a = 8;
// var b = 5;

// if (a > b) {
//     console.log("A es la mayor")
// } else if (a < b) {
//     console.log("B es la mayor")
// } else console.log("A y B son iguales")

/* 
2. Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida
por consola. Por ejemplo: si introduzco “Fernando”, me aparezca “Bienvenido Fernando”.
*/

// var nombre = "Sergio";
// console.log("Bienvenido", nombre)

/*
3. Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir
(recuerda usar prompt).
*/
// var nombre = prompt("Cómo te llamas?");
// console.log("Bienvenido", nombre)

/*
4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
(recuerda pasar de String a double con parseDouble). Usa la constante PI.
*/

const pi = 3.1416;
var radio = parseFloat(prompt("Dime el radio del círculo"))

var area = pi * (radio ** 2)
console.log("El área de un círculo de radio", radio, "es: ", area)