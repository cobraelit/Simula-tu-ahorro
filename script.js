document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener los valores ingresados por el usuario
    var consumo = parseFloat(document.getElementById('consumo').value);
    var tarifa = parseFloat(document.getElementById('tarifa').value);
    var paneles = parseFloat(document.getElementById('paneles').value);
    
    // Validar los valores ingresados
    if (isNaN(consumo) || isNaN(tarifa) || isNaN(paneles) || consumo <= 0 || tarifa <= 0 || paneles <= 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos.";
        return;
    }
    
    // Parámetros del sistema solar
    var produccionPorPanel = 120; // kWh por mes por panel (ajustado a la estimación realista)
    var produccionMensual = paneles * produccionPorPanel; // kWh generados por mes
    
    // Ajuste para considerar cobertura del consumo
    var produccionReal = Math.min(produccionMensual, consumo); // La producción no puede ser mayor que el consumo
    var ahorroMensual = produccionReal * tarifa;
    var porcentajeCobertura = (produccionReal / consumo) * 100;
    
    // Mostrar resultados
    document.getElementById('resultado').innerText = 
        "Con " + paneles + " paneles solares de 800W, podrías ahorrar $" + ahorroMensual.toFixed(2) + " al mes." + 
        "\nEsto cubriría aproximadamente el " + porcentajeCobertura.toFixed(2) + "% de tu consumo eléctrico.";
});