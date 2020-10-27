// Excercise 3

//a
/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses
  5 y 11 (utilizar console.log)
*/
var month = ["January", "February", "March", "April", "May", "June", "July",
"August","September", "October","November","December"];
console.log(month [4], month [11]);

//b
/*  Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/
var monthcopy = ["January", "February", "March", "April", "May", "June", "July",
"August","September", "October","November","December"];
monthcopy.sort();
console.log(month);

//c
/* Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
month.unshift("x-month");
month.push("y-month");
console.log(month);

//d
/* Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/
month.shift();
month.pop();
console.log(month);

//e
/* Invertir el orden del array (utilizar reverse)
*/
monthcopy2 = ["January", "February", "March", "April", "May", "June", "July",
"August","September", "October","November","December"];
monthcopy2.reverse();
console.log(monthcopy2);

//f
/* Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/
console.log(month.join('-'));

//g
/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
var cutmonth = month.slice(4,11); 
console.log(cutmonth);