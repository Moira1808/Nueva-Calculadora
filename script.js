function calcularPrecio() {
    // 1. Capturamos los elementos del DOM
    const inputTasa = document.getElementById('tasa');
    const inputPrecioDolar = document.getElementById('precioDolar');
    const displayResultado = document.getElementById('precioBs');
    const tarjetaResultado = document.getElementById('resultadoArea');

    // 2. Convertimos los valores a números flotantes
    const tasa = parseFloat(inputTasa.value);
    const precioDolar = parseFloat(inputPrecioDolar.value);

    // 3. Validamos que los números sean correctos
    if (isNaN(tasa) || isNaN(precioDolar) || tasa <= 0 || precioDolar <= 0) {
        alert("Por favor, introduce montos válidos mayores a cero.");
        return;
    }

    // 4. Realizamos la operación matemática básica
    const resultadoFinal = tasa * precioDolar;

    // 5. Mostramos el resultado con formato de moneda (2 decimales)
    displayResultado.textContent = resultadoFinal.toLocaleString('es-VE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // 6. Hacemos visible la tarjeta de resultado
    tarjetaResultado.style.display = 'block';
}
