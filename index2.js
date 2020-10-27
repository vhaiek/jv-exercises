// Excercise 2 

//a
/*  Crear una variable de tipo string con al menos 10 caracteres y convertir todo
    el texto en mayúscula (utilizar toUpperCase).
*/
var leadingCase = "aguinda v chevron texaco";
console.log(leadingCase.toUpperCase());

//b
/*  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
    string con los primeros 5 caracteres guardando el resultado en una nueva variable 
    (utilizar substring).
*/
var legalBranch2 = "human rights";
var cut1 = legalBranch2.substring(0,5);
console.log(cut1);

//c
/*  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
    con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
 */
var legalBranch3 ="criminal law";
var cut2 = legalBranch3.substring(8,12);
console.log(cut2);

//d
/*  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
    primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
    (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/
var legalBranch4 = "intelectual property";
var cut3 = legalBranch4.substring(0,1);
var cut3_bis = cut3.toUpperCase();
var cut4 = legalBranch4.substring(1,20);
var complete = cut3_bis + cut4;
console.log(complete);

//e
/*  Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
    Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
var legalBranch5 = "customer law";
var space = legalBranch5.indexOf(" ");
console.log(space);

//f
/*  Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
    espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo
    string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
    (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
var legalBranch6 = "international law";
var cut5 = legalBranch6.substring (0,1).toUpperCase();
var space = legalBranch6.indexOf(" ");
var cut6 = legalBranch6.substring (space, space+2).toUpperCase();
var cut7 = legalBranch6.substring (1, space).toLowerCase();
var cut8 = legalBranch6.substring (space+2).toLowerCase();
var complete2 = cut5 + cut7 + " " + cut6 + cut8;
console.log(complete2);