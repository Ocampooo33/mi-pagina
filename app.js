// Pedir los números
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Pedir la operación
var operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /):");

// Calcular según la operación
if (operacion === "+") {
    var resultado = numero1 + numero2;
    alert("El resultado de la suma es: " + resultado);
} else if (operacion === "-") {
    var resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado);
} else if (operacion === "*") {
    var resultado = numero1 * numero2;
    alert("El resultado de la multiplicación es: " + resultado);
} else if (operacion === "/") {
    if (numero2 !== 0) {
        var resultado = numero1 / numero2;
        alert("El resultado de la división es: " + resultado);
    } else {
        alert("No se puede dividir por cero.");
    }
} else {
    alert("Operación no válida.");
}
