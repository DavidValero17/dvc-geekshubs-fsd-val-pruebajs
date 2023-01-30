let numeroUno = 0;
let numeroDos = 0;

let suma = 0;
let resta = 0;
let multiplicacion = 0;

numeroUno = parseInt(prompt("Introduzca número Uno"))
numeroDos = parseInt(prompt("Introduzca número Dos"))
operacion = prompt ("Introduce operación")

if (operacion == "suma") {
    suma = numeroUno + numeroDos;
    console.log(suma)
} else if (operacion == "resta") {
    resta = numeroUno - numeroDos;
    console.log(resta)
} else if (operacion == "multiplicacion") {
    multiplicacion = numeroUno * numeroDos;
    console.log(multiplicacion)
} else if (operacion == "division") {
    division = numeroUno / numeroDos;
    console.log(division)
}