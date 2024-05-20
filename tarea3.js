// function calcularFactorial() {
//     const numeroInput = document.getElementById('numero');
//     const resultadoDiv = document.getElementById('resultado');
// }

// // //declarar variables
// // //pedir al usuario
// const numero = parseInt(numeroInput.value);
// //convertimos input a numero entero
//  numero = parseFloat(numero);
//     if (isNaN(numero) || numero < 0) {
//         resultadoDiv.textContent = ('Por favor, ingrese un número entero no negativo.');
//     } else {
//         // Calculamos y mostramos el factorial.
//         const factorial = calcularFactorial(numero);
//         resultadoDiv.textContent = ('El numero factorial de ' + numero + ' es: ' + factorial(numero));
//     }
// // Función para calcular el factorial 
// function calcularFactorial(numero) {
//     if (numero === 0 || numero === 1) {
//         return 1;
//     }
//     //for para calcular
//     let resultado = 1;
//     for (let i = 2; i <= numero; i++) {
//         resultado *= i;
//     }
//     return resultado;
// }





function calcularFactorial() {
    const numeroInput = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado');

    // Convertimos el input a un número entero
    const numero = parseInt(numeroInput.value);

    // Verificamos si el input es un número válido
    if (isNaN(numero) || numero < 0) {
        resultadoDiv.textContent = 'Por favor, ingrese un número entero no negativo.';
    } else {
        // Calculamos el factorial
        const factorial = calcularFactorialNumero(numero);
        resultadoDiv.textContent = 'El factorial de ' + numero + ' es: ' + factorial;
    }
}

function calcularFactorialNumero(numero) {
    // Si el número es 0 o 1, el factorial es 1
    if (numero === 0 || numero === 1) {
        return 1;
    }
    // Calculamos el factorial utilizando un bucle
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}