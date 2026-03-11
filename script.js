document.addEventListener("DOMContentLoaded", () => {
    const inputTasa = document.getElementById("tasa");
    const inputUsd = document.getElementById("usd");
    const inputBs = document.getElementById("bs");
    const resultadoBs = document.getElementById("resultadoBs");
    const resultadoUsd = document.getElementById("resultadoUsd");

    // Cargar la tasa guardada al abrir la página
    if (localStorage.getItem("tasaGuardada")) {
        inputTasa.value = localStorage.getItem("tasaGuardada");
    }

    // Función para calcular de Dólares a Bolívares
    const calcularUsdABs = () => {
        const tasa = parseFloat(inputTasa.value) || 0;
        const usd = parseFloat(inputUsd.value) || 0;
        const totalBs = (usd * tasa).toFixed(2);
        resultadoBs.textContent = `Bs ${totalBs}`;
    };

    // Función para calcular de Bolívares a Dólares
    const calcularBsAUsd = () => {
        const tasa = parseFloat(inputTasa.value) || 0;
        const bs = parseFloat(inputBs.value) || 0;
        let totalUsd = 0;
        if (tasa > 0) {
            totalUsd = (bs / tasa).toFixed(2);
        }
        resultadoUsd.textContent = `$ ${totalUsd}`;
    };

    // Actualizar todo si cambia la tasa
    inputTasa.addEventListener("input", () => {
        localStorage.setItem("tasaGuardada", inputTasa.value);
        calcularUsdABs();
        calcularBsAUsd();
    });

    // Calcular en vivo cuando escribes los montos
    inputUsd.addEventListener("input", calcularUsdABs);
    inputBs.addEventListener("input", calcularBsAUsd);
});
