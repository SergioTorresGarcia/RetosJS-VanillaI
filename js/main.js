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

// const pi = 3.1416;
// var radio = parseFloat(prompt("Dime el radio del círculo"))

// var area = pi * (radio ** 2)
// console.log("El área de un círculo de radio", radio, "es: ", area)

/*
5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
debemos indicarlo.
*/

// let num = parseInt(prompt("Escribe un número"))
// num % 2 == 0 ? console.log("Es divisible entre 2") : console.log("No es divisible entre 2")

// otra opción one-liner que funciona pero no es legible
// console.log(parseInt(prompt("Escribe un número"))%2 == 1 ? "No" : "", "es múltiplo de dos")

/*
6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
calcule el precio final con IVA. El IVA será una constante que sera del 21%
*/

// const iva = 1.21
// let price = parseFloat(prompt("Escribe un precio neto"));
// console.log("El precio con un IVA del 21% añadido es: ", price * iva)

/*
7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.
*/

// let num = 0;
// do {
//     num ++
//     console.log(num);
// } while (num < 100)

/*
8. Haz el mismo ejercicio anterior con un bucle for.
*/

// for (let num = 1; num <= 100; num ++) {
//     console.log(num);
// }

/*
9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle
que desees.
*/

// for (let num = 1; num <= 100; num++) {
//     if (num % 2 == 0 && num % 3 == 0) {
//         console.log(num);
//     }
// }

/*
10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.
*/

// let ventas = prompt("Cuantas compras has hecho? (escribe el número)")


// let total = 0;
// let veces = 0;
// do {
//     veces ++
//     let precio = parseInt(prompt("Cuánto has pagado?"));
//     total += precio;
// } while (veces < ventas)

// console.log("Has hecho ", ventas, "ventas y has pagado un total de", total+"€");

/*
11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral
o no. Usa un switch para ello.
*/

// let day = prompt("What day is today?").toLowerCase().trim()

// switch (day) {
//     case "monday": 
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "sunday":
//         console.log("It's not weekend!! Get to work");
//     break;

//     case "saturday": 
//     case "sunday":
//         console.log("It's weekend!! yay");
//     break;

//     default: console.log("Not a day of the week");
// }

/*
12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
condición de salida (3 intentos y si acierta sale, aunque le queden intentos).
*/

// const password = "ABC";

// for (let i = 0; i < 3; i++) {
//     let yourTry = prompt("Write the password")
//     if (yourTry == password) {
//         i=3;
//         console.log("Password is correct")
//     } else {
//         console.log("Password is not correct")
//     }
// }

/*
13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
aritmético (String), según este último se realizará la operación correspondiente. Al final
mostrará el resultado en un cuadro de diálogo.
Los signos aritméticos disponibles son:
+: suma los dos operandos.
-: resta los operandos.
*: multiplica los operandos.
/: divide los operandos, este debe dar un resultado con decimales (double)
^: 1o operando como base y 2o como exponente.
%: módulo, resto de la división entre operando1 y operando2.
*/

// let num1 = parseInt(prompt("Dime un número"))
// let num2 = parseInt(prompt("Dime otro número"))
// let op = prompt("Escoge uno de estos 6 signos aritméticos: +, -, *, /, ^, %")

// switch (op) {
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         console.log(num1 / num2);
//         break;
//     case "^":
//         console.log(num1 ** num2);
//         break;
//     case "%":
//         console.log(num1 % num2);
//         break;
//     default:
//         console.log("Datos incorrectos")
// }
