document.addEventListener("DOMContentLoaded", () => {
    // Obtenemos los elementos del HTML
    const tasaInput = document.getElementById("tasa");
    const priceElements = document.querySelectorAll(".service-price");

    // 1. Cargar la tasa guardada en el almacenamiento local del navegador
    const savedTasa = localStorage.getItem("tasaCambioActual");
    if (savedTasa) {
        tasaInput.value = savedTasa;
        calcularPrecios(); // Calculamos de inmediato si hay una tasa guardada
    }

    // 2. Escuchar cada vez que el usuario escribe un número
    tasaInput.addEventListener("input", () => {
        // Guardamos la tasa actual para que no se pierda al recargar la página
        localStorage.setItem("tasaCambioActual", tasaInput.value);
        calcularPrecios();
    });

    // 3. Función principal de cálculo
    function calcularPrecios() {
        // Convertimos el texto del input a un número decimal
        const tasa = parseFloat(tasaInput.value);

        // Si la tasa no es un número válido o está vacía, mostramos 0.00
        if (isNaN(tasa) || tasa <= 0) {
            priceElements.forEach(el => {
                el.textContent = "Bs. 0.00";
            });
            return;
        }

        // Iteramos sobre cada servicio para multiplicar su precio en USD por la tasa
        priceElements.forEach(el => {
            const usdPrice = parseFloat(el.getAttribute("data-usd"));
            const totalBs = (usdPrice * tasa).toFixed(2); // Redondeamos a 2 decimales
            
            // Formateamos el número para que sea más fácil de leer (opcional, estilo local)
            const formatoBs = new Intl.NumberFormat('es-VE', { 
                minimumFractionDigits: 2 
            }).format(totalBs);

            el.textContent = `Bs. ${formatoBs}`;
        });
    }
});
