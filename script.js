function calcularTabla() {
    // 1. Obtener la tasa ingresada
    const inputTasa = document.getElementById('tasa');
    const tasa = parseFloat(inputTasa.value);

    // 2. Validar que la tasa sea un número correcto
    if (isNaN(tasa) || tasa <= 0) {
        alert("Por favor, ingresa una tasa de cambio válida (mayor a 0).");
        return;
    }

    // 3. Seleccionar todas las filas que están dentro de la tabla
    const filas = document.querySelectorAll('#tablaServicios tbody tr');

    // 4. Recorrer cada fila para hacer el cálculo individual
    filas.forEach(fila => {
        // Buscar el input de dólares y la celda de bolívares en ESTA fila específica
        const inputDolar = fila.querySelector('.precio-dolar');
        const celdaBs = fila.querySelector('.precio-bs');
        
        const precioDolar = parseFloat(inputDolar.value);

        // Si el precio en dólares es válido, calculamos
        if (!isNaN(precioDolar) && precioDolar >= 0) {
            const convertido = precioDolar * tasa;
            
            // Mostrar resultado formateado con 2 decimales y el indicativo 'BS'
            celdaBs.textContent = convertido.toLocaleString('es-VE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) + ' BS';
        } else {
            celdaBs.textContent = "0.00 BS";
        }
    });
}
