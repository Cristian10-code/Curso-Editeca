// Clase para las aplicaciones
class Aplicaciones {
    constructor(name, tiempoDesarrollo, complejidad, costoApp) {
        this.name = name;
        this.tiempoDesarrollo = tiempoDesarrollo;
        this.complejidad = complejidad;
        this.costoApp = costoApp;
    }
}

// Instancias de las aplicaciones
let BIMStandard = new Aplicaciones("BIM Standard", 12, "Alta", 2000);
let revisorFamilias = new Aplicaciones("Revisor Familias", 4, "Alta", 2000);
let diccionarios = new Aplicaciones("Diccionarios", 2, "Alta", 1000);
let multiEditor = new Aplicaciones("Multi-Editor", 8, "Baja", 500);
let editorPlanos = new Aplicaciones("Editor de Planos", 12, "Alta", 2500);
let editorParametros = new Aplicaciones("Editor Parámetros", 2, "Media", 1000);
let secuenciaParametros = new Aplicaciones("Secuencia de Parámetros", 2, "Baja", 500);

// Mapa que guarda las aplicaciones
const aplicaciones = new Map();
aplicaciones.set("BIM Standard", BIMStandard);
aplicaciones.set("Revisor Familias", revisorFamilias);
aplicaciones.set("Diccionarios", diccionarios);
aplicaciones.set("Multi-Editor", multiEditor);
aplicaciones.set("Editor de Planos", editorPlanos);
aplicaciones.set("Editor Parámetros", editorParametros);
aplicaciones.set("Secuencia de Parámetros", secuenciaParametros);

// Función que cambia el contenido según el botón de la barra de navegación
document.querySelectorAll('.toolbarElem').forEach((elem, index) => {
    elem.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la recarga de la página
        changeContent(index); // Cambiar contenido dinámicamente
    });
});

function changeContent(index) {
    let section = '';
    switch (index) {
        case 0:
            section = 'Esta es la página de Inicio.';
            break;
        case 1:
            section = 'Bienvenido a mi Portafolio.';
            break;
        case 2:
            section = 'Conócenos en la sección de Sobre Nosotros.';
            break;
        case 3:
            section = 'Contáctanos para más información.';
            break;
        default:
            section = 'Sección no encontrada.';
    }
    document.getElementById('intro').innerHTML = `<p>${section}</p>`;
}

// Estructura de bucle para generar dinámicamente la tabla de aplicaciones
const appsData = [
    ["BIM Standard", "Si", "No", "No", "No", "No", "No"],
    ["Revisor Familias", "No", "Si", "No", "No", "No", "No"],
    ["Diccionarios", "No", "No", "Si", "No", "No", "No"],
    ["Multi-Editor", "No", "No", "No", "Si", "No", "No"],
    ["Editor de Planos", "No", "No", "No", "No", "Si", "No"],
    ["Editor Parámetros", "No", "No", "No", "No", "No", "Si"],
    ["Secuencia de Parámetros", "No", "No", "No", "No", "No", "Si"]
];

// Generar filas dinámicamente usando un bucle `for`
function generarTabla() {
    let tableBody = document.querySelector("tbody");
    appsData.forEach(app => {
        let row = "<tr>";
        app.forEach(cell => {
            row += `<td>${cell}</td>`;
        });
        row += "</tr>";
        tableBody.innerHTML += row;
    });
}
generarTabla();

// Ejemplo de estructura `if` y `while` para lógica adicional
function calcularCostoAplicaciones() {
    let costoTotal = 0;
    aplicaciones.forEach((app) => {
        if (app.costoApp > 1000) {
            costoTotal += app.costoApp;
        }
    });

    let contador = 0;
    let aplicacionesCostosas = [];
    while (contador < appsData.length) {
        if (appsData[contador][1] === "Si") {
            aplicacionesCostosas.push(appsData[contador][0]);
        }
        contador++;
    }

    console.log(`El costo total de las aplicaciones costosas es: $${costoTotal}`);
    console.log('Aplicaciones que son "Si" en Salud BIM:', aplicacionesCostosas);
}
calcularCostoAplicaciones();
