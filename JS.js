function sumar() {
    const forma = document.getElementById("forma");
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(resultado)) {
        resultadoDiv.innerHTML = "La operación no incluye números"
    } else{
        resultadoDiv.innerHTML = `El resultado es: ${resultado}`;
    }
    // Actualiza el contenido y muestra el div
    resultadoDiv.style.visibility = "visible";  // Muestra el div
}


