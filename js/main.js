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

/*
6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
calcule el precio final con IVA. El IVA será una constante que sera del 21%
*/

// const iva = 1.21
// let price = parseFloat(prompt("Escribe un precio neto"));
// let result = price * iva
// console.log("El precio con un IVA del 21% añadido es: ", result)

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

for (let num = 1; num <= 100; num++) {
    if (num % 2 == 0 && num % 3 == 0) {
        console.log(num);
    }
}
