document.getElementById("calcular").addEventListener("click", function () {
    let entrada = document.getElementById("numero").value;
    let numero = Number(entrada);

    if (isNaN(numero) || numero < 0) {
        document.getElementById("resultado").textContent =
            "Error: Ingresa un número válido (entero y no negativo).";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById("resultado").textContent =
        `El factorial de ${numero} es: ${factorial}`;
});


