console.log ("Saluda en condiciones olvidona")

// Comentario de una linea

/*

comentario 
de varias 
lineas
*/

var variable1 = true;
var variable2 = "Soy la variable";
var variable3 = 35;

console.log(variable1)
console.log(variable2)
console.log(variable3)

let variableLet1 = "Soy la variable let 1"

console.log(variableLet1)

variableLet1 = "Ya no soy la variable let 1"

console.log(variableLet1)

// Esta variable es constante, no le puedes asignar mas valores

const variableConstUno = 23;

console.log(variableConstUno)

//Mostrar el tipo de una variable

typeof(variableConstUno)

console.log(typeof(variableConstUno))

// Suma de dos números enteros

let numeroUno = 23;
let numeroDos =43;

let suma = numeroUno + numeroDos;

console.log (suma)

// Resta de dos números enteros

let resta = numeroUno - numeroDos;

console.log (resta)

// Incrementar uno

let incrementarUno = ++numeroUno;

console.log (incrementarUno)

// Hacer una suma mas corta

let variableSuma = 45;

variableSuma += 5;

console.log(variableSuma)

// Comparar dos variables == o ===

let comparaUno = 5;
let comparaDos = "5";

console.log(comparaUno == comparaDos)

// Condicion IF & Else

/*if(comparaUno === comparaDos){
    console.log("Los dos números son iguales")
} else if (comparaUno == comparaDos)
    console.log("Los números son iguales pero los tipos no")

else {
    console.log("Los dos números son diferentes")
}*/
 
// Si se cumple una de las dos condiciones
if(comparaUno === comparaDos || comparaUno==comparaDos){
    console.log("Los dos números son iguales")
} else {
    console.log("Los dos números son diferentes")
}

//Si se cumple ambas condiciones

if(comparaUno === comparaDos && comparaUno==comparaDos){
    console.log("Los dos números son iguales")
} else {
    console.log("Los dos números son diferentes")
}

// Hardcodeando 

if(true && false){
    console.log("Los dos números son iguales")
} else {
    console.log("los dos números son diferentes")
}