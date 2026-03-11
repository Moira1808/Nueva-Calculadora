function calcularPrecio() {
    // Obtener valores de los campos
    const tasa = document.getElementById('tasa').value;
    const precioDolar = document.getElementById('precioDolar').value;
    const resultadoArea = document.getElementById('resultadoArea');
    const displayBs = document.getElementById('precioBs');

    // Validar que los campos no estén vacíos
    if (tasa > 0 && precioDolar > 0) {
        const calculo = tasa * precioDolar;
        
        // Formatear a 2 decimales y mostrar
        displayBs.innerText = calculo.toLocaleString('es-VE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        
        // Mostrar la tarjeta de resultado con animación simple
        resultadoArea.style.display = 'block';
    } else {
        alert("Por favor, ingresa valores válidos en ambos campos.");
    }
}
