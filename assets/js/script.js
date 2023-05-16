function mostrarOcultar(opcionSeleccionada) {
    switch (opcionSeleccionada) {
        case "Trekking":
            mostrarOcultarTrekking();
            break;
        case "Natacion":
            mostrarOcultarNatacion();
            break;
        case "Ferry":
            mostrarOcultarFerry();
            break;
        default:
            // Si no se seleccionó ninguna opción, se ocultan todas las secciones
            ocultarTodas();
            break;
    }
}



function mostrarOcultarTrekking() {
    document.getElementById('Natacion').style.display = "none";
    document.getElementById('Ferry').style.display = "none";
    document.getElementById('Trekking').style.display = "block";
}


function mostrarOcultarNatacion() {
    document.getElementById('Trekking').style.display = "none";
    document.getElementById('Ferry').style.display = "none";
    document.getElementById('Natacion').style.display = "block";
}


function mostrarOcultarFerry() {
    document.getElementById('Natacion').style.display = "none";
    document.getElementById('Trekking').style.display = "none";
    document.getElementById('Ferry').style.display = "block";
}
