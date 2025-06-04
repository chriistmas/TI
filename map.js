var map = L.map('map').setView([-16.409, -71.537], 13); //mapa centrado en las coordendas y el zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var userIcon = L.icon({
    iconUrl: 'ubicacion.png', //icono para la ubiaccion
    iconSize: [38, 38],
    iconAnchor: [19, 38],
});

var paraderoIcon = L.icon({
    iconUrl: 'parada-de-autobus.png', //icono para los paraderos
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

var userMarker = L.marker([-16.40628, -71.49896], { icon: userIcon }).addTo(map);//marcador para la ubiacion
var searchMarker = L.marker([-16.409, -71.537], { draggable: true }).addTo(map);//marcador de busqueda y arrastrable

//Rutas
var rutas = [
    { id: 1, name: 'COTUM A', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/COTUM%20A%20IDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/COTUM%20A%20VUELTA.kml' },
    { id: 2, name: 'CORRECAMINOS DOLORES', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/CORRECAMINOSDOLORESIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/CORRECAMINOSDOLORESVUELTA.kml' },
    { id: 3, name: 'A15 MIRAFLORES', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/A15-Miraflores%20(c4union%20aqp)%20IDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/A15-Miraflores%20(c4union%20aqp)%20VUELTA.kml' },
    { id: 4, name: 'ALTO SELVA ALEGRE', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/alto%20selva%20a(c4%20uni%C3%B3n%20aqp)%20IDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/alto%20selva%20a(c4%20uni%C3%B3n%20aqp)%20VUELTA.kml' },
    { id: 5, name: 'C2-4D CONO NORTE', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/ConoNorteIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/ConoNorteVUELTA.kml' },
    { id: 6, name: 'BJUANXXIII', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/BJUANXXIIIIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/BJUANXXIIIVUELTA.kml' },
    { id: 7, name: 'C7-5 AQP Masivo', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/AltoLibertadIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/AltoLibertadVUELTA.kml' },
    { id: 8, name: 'COTUM B', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/COTUMBIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/COTUMBVUELTA.kml' },
    { id: 9, name: 'C 3 DE OCTUBRE', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/C-3deOctubreIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/C-3deOctubreVUELTA.kml' },
    { id: 10, name: 'C7-9 AQP Masivo', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/C7AqpMasivo7-09IDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/C7AqpMasivo%207-09VUELTA.kml' },
    { id: 11, name: 'A MARIANO MELGAR', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/A-MarianoMelgarIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/A-MarianoMelgarVUELTA.kml' },
    { id: 12, name: 'B POLANCO', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/B-PolancoIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/B-PolancoVUELTA.kml' },
    { id: 13, name: 'B 3 DE OCTUBRE', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/B-3deOctubreIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/B-3deOctubreVUELTA.kml' },
    { id: 14, name: 'CAYMA ENACE', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/CaymaenaceIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/CaymaEnaceVUELTA.kml' },
    { id: 15, name: 'LA PERLA SRLTDA', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/LaPerlaS.R.L.T.D.A.IDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/LaPerlaS.R.L.T.D.AVUELTA.kml' },
    { id: 16, name: '15 DE AGOSTO', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/15deAgostoIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/15deAgostoVUELTA.kml' },
    { id: 17, name: 'UCHUMAYO', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/UchumayoIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/UchumayoVUELTA.kml' },
    { id: 18, name: 'ORIOL A', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/ORIOLAIDA.kml', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/ORIOLAVUELTA.kml' }
];
//colores de las rutas
var routeColors = [
    '#FF6347', '#4682B4', '#9ACD32', '#FF69B4', '#00CED1', '#ADFF2F',
    '#6A5ACD', '#FF8C00', '#20B2AA', '#9370DB', '#FFD700', '#40E0D0',
    '#778899', '#B22222', '#228B22', '#DA70D6', '#87CEEB', '#32CD32',
    '#8B0000', '#556B2F', '#FF1493', '#1E90FF', '#8A2BE2', '#D2691E',
    '#5F9EA0', '#7FFF00', '#DDA0DD', '#FF4500', '#2E8B57', '#8B008B',
    '#DC143C', '#00FA9A', '#8B4513', '#DAA520', '#7B68EE', '#48D1CC'
];

var capasRutas = {};//objeto para almacenar rutas
var paraderos = {};//objeto para almacenar paraderos

//cargar ruta con sus datos y color definido
rutas.forEach(function(ruta, index) {
    //Define los colores para ida y vuelta
    var colorIda = routeColors[index * 2];
    var colorVuelta = routeColors[index * 2 + 1];
    //Crea capas de rutas para ida y vuelta usando omnivore para leer los archivos kml
    capasRutas[ruta.id] = {
        ida: omnivore.kml(ruta.ida, null, L.geoJSON(null, {
            style: { color: colorIda },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, { icon: paraderoIcon }); // añade el icono de los paraderos de ida en las rutas
            }
        })),
        vuelta: omnivore.kml(ruta.vuelta, null, L.geoJSON(null, {
            style: { color: colorVuelta },
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, { icon: paraderoIcon }); // añade el icono de los paraderos de vuelta en las rutas
            }
        }))
    };
    //inicializa array vacios para almacenar los paraderos de ida y vuelta
    paraderos[ruta.id] = {
        ida: [],
        vuelta: []
    };
});

var capaRutas = L.layerGroup().addTo(map); //gestiona la vizualizacion de las rutas

function mostrarMensajeRuta(ruta, direccion) {
    var mensaje = ruta + ' ' + (direccion === 1 ? 'IDA' : 'VUELTA');
    var mensajeBox = document.createElement('div');
    mensajeBox.style.border = '1px solid black';
    mensajeBox.style.backgroundColor = 'white';
    mensajeBox.style.padding = '10px';
    mensajeBox.style.position = 'absolute';
    mensajeBox.style.top = '10px';
    mensajeBox.style.right = '10px';
    mensajeBox.style.zIndex = '1000';
    mensajeBox.innerText = 'Ruta activada: ' + mensaje;
    map.getContainer().appendChild(mensajeBox);
    setTimeout(function() {
        map.getContainer().removeChild(mensajeBox);
    }, 5000); // Elimina el mensaje después de 5 segundos
}


// Definir la variable todosLosParaderos fuera de cualquier función para que sea accesible globalmente
var todosLosParaderos = [];

// Definir las rutas con sus respectivos paraderos (ida y vuelta)
var rutas = [
    { id: 1, name: 'COTUM A', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida1.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta1.geojson' },
    { id: 2, name: 'CORRECAMINOS DOLORES', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida2.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta2.geojson' },
    { id: 3, name: 'A15 MIRAFLORES', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida3.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta3.geojson' },
    { id: 4, name: 'ALTO SELVA ALEGRE', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida4.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta4.geojson' },
    { id: 5, name: 'C2-4D CONO NORTE', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida5.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta5.geojson' },
    { id: 6, name: 'BJUANXXIII', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida6.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta6.geojson' },
    { id: 7, name: 'C7-5 AQP Masivo', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida7.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta7.geojson' },
    { id: 8, name: 'COTUM B', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida8.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta8.geojson' },
    { id: 9, name: 'C 3 DE OCTUBRE', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida9.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta9.geojson' },
    { id: 10, name: 'C7-9 AQP Masivo', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida10.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta10.geojson' },
    { id: 11, name: 'A MARIANO MELGAR', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida11.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta11.geojson' },
    { id: 12, name: 'B POLANCO', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida12.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta12.geojson' },
    { id: 13, name: 'B 3 DE OCTUBRE', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida13.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta13.geojson' },
    { id: 14, name: 'CAYMA ENACE', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida14.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta14.geojson' },
    { id: 15, name: 'LA PERLA SRLTDA', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida15.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta15.geojson' },
    { id: 16, name: '15 DE AGOSTO', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida16.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta16.geojson' },
    { id: 17, name: 'UCHUMAYO', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida17.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta17.geojson' },
    { id: 18, name: 'ORIOL A', ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida18.geojson', vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta18.geojson' }
];

const API_KEY = '5b3ce3597851110001cf62483bdbb6a0746b4bc8ae9d90df9f284414';

var todosLosParaderos = [];

function cargarParaderos() {
    rutas.forEach(function(ruta) {
        ['ida', 'vuelta'].forEach(function(tipo) {
            fetch(ruta[tipo])
                .then(response => response.json())
                .then(data => {
                    data.features.forEach(function(feature) {
                        if (feature.geometry.type === "Point") {
                            todosLosParaderos.push({
                                nombre: feature.properties.nombre,
                                coordinates: feature.geometry.coordinates,
                                rutaId: ruta.id,
                                tipo: tipo,
                                rutaName: ruta.name
                            });
                        }
                    });
                })
                .catch(error => console.error("Error al cargar GeoJSON:", error));
        });
    });
}

cargarParaderos();

function calcularDistancia(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radio de la Tierra en km
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distancia en km
    return d;
}

function filtrarParaderosPorTipo(tipo) {
    return todosLosParaderos.filter(function(entry) {
        return entry.tipo === tipo;
    });
}

function verificarParaderoMasCercanoParaRuta(coordUsuario, coordDestino) {
    var paraderosIda = filtrarParaderosPorTipo('ida');
    var paraderosVuelta = filtrarParaderosPorTipo('vuelta');

    var distanciaMinima = Infinity;
    var mejorRuta = null;

    var paraderoDisponibleDentroDe5Km = false;

    // Verificar rutas de ida
    paraderosIda.forEach(function(paraderoUsuario) {
        var distanciaUsuarioParadero = calcularDistancia(coordUsuario[1], coordUsuario[0], paraderoUsuario.coordinates[1], paraderoUsuario.coordinates[0]);
        if (distanciaUsuarioParadero <= 1) {  // Ajustar el valor según la proximidad deseada
            paraderosIda.forEach(function(paraderoDestino) {
                var distanciaParaderoDestino = calcularDistancia(paraderoDestino.coordinates[1], paraderoDestino.coordinates[0], coordDestino[1], coordDestino[0]);
                if (distanciaParaderoDestino <= 5) {
                    paraderoDisponibleDentroDe5Km = true;
                }
                if (paraderoDestino.rutaId === paraderoUsuario.rutaId && distanciaParaderoDestino <= 1) {  // Asegurarse de que ambos paraderos están en la misma ruta
                    var indiceUsuario = todosLosParaderos.findIndex(paradero => paradero.coordinates[0] === paraderoUsuario.coordinates[0] && paradero.coordinates[1] === paraderoUsuario.coordinates[1]);
                    var indiceDestino = todosLosParaderos.findIndex(paradero => paradero.coordinates[0] === paraderoDestino.coordinates[0] && paradero.coordinates[1] === paraderoDestino.coordinates[1]);

                    if (indiceUsuario < indiceDestino) {  // Verificar que la dirección es correcta
                        var distanciaTotal = distanciaUsuarioParadero + distanciaParaderoDestino;
                        if (distanciaTotal < distanciaMinima) {
                            distanciaMinima = distanciaTotal;
                            mejorRuta = {
                                paraderoUsuario: paraderoUsuario,
                                paraderoDestino: paraderoDestino,
                                distanciaTotal: distanciaTotal,
                                tipoRuta: 'ida'
                            };
                        }
                    }
                }
            });
        }
    });

    // Verificar rutas de vuelta
    paraderosVuelta.forEach(function(paraderoUsuario) {
        var distanciaUsuarioParadero = calcularDistancia(coordUsuario[1], coordUsuario[0], paraderoUsuario.coordinates[1], paraderoUsuario.coordinates[0]);
        if (distanciaUsuarioParadero <= 1) {  // Ajustar el valor según la proximidad deseada
            paraderosVuelta.forEach(function(paraderoDestino) {
                var distanciaParaderoDestino = calcularDistancia(paraderoDestino.coordinates[1], paraderoDestino.coordinates[0], coordDestino[1], coordDestino[0]);
                if (distanciaParaderoDestino <= 5) {
                    paraderoDisponibleDentroDe5Km = true;
                }
                if (paraderoDestino.rutaId === paraderoUsuario.rutaId && distanciaParaderoDestino <= 1) {  // Asegurarse de que ambos paraderos están en la misma ruta
                    var indiceUsuario = todosLosParaderos.findIndex(paradero => paradero.coordinates[0] === paraderoUsuario.coordinates[0] && paradero.coordinates[1] === paraderoUsuario.coordinates[1]);
                    var indiceDestino = todosLosParaderos.findIndex(paradero => paradero.coordinates[0] === paraderoDestino.coordinates[0] && paradero.coordinates[1] === paraderoDestino.coordinates[1]);

                    if (indiceUsuario < indiceDestino) {  // Verificar que la dirección es correcta
                        var distanciaTotal = distanciaUsuarioParadero + distanciaParaderoDestino;
                        if (distanciaTotal < distanciaMinima) {
                            distanciaMinima = distanciaTotal;
                            mejorRuta = {
                                paraderoUsuario: paraderoUsuario,
                                paraderoDestino: paraderoDestino,
                                distanciaTotal: distanciaTotal,
                                tipoRuta: 'vuelta'
                            };
                        }
                    }
                }
            });
        }
    });

    if (!paraderoDisponibleDentroDe5Km) {
        return null;
    }

    return mejorRuta;
}

function verificarParaderoMasCercanoPara2Rutas(coordUsuario, coordDestino) {
    var paraderosIda = filtrarParaderosPorTipo('ida');
    var paraderosVuelta = filtrarParaderosPorTipo('vuelta');

    var mejorRutaInicial = null;
    var mejorRutaFinal = null;
    var distanciaMinimaInicial = Infinity;
    var mejorDistanciaTotal = Infinity;

    // Encontrar la ruta inicial más cercana al usuario con dirección correcta
    paraderosIda.concat(paraderosVuelta).forEach(function(paraderoUsuario) {
        var distanciaUsuarioParadero = calcularDistancia(coordUsuario[1], coordUsuario[0], paraderoUsuario.coordinates[1], paraderoUsuario.coordinates[0]);
        if (distanciaUsuarioParadero <= 1) {  // Ajustar el valor según la proximidad deseada
            // Verificar recursivamente con la función inicial desde cada paradero de la ruta inicial
            for (let i = 0; i < todosLosParaderos.length; i++) {
                if (todosLosParaderos[i].rutaId === paraderoUsuario.rutaId) {
                    var posibleRutaFinal = verificarParaderoMasCercanoParaRuta(todosLosParaderos[i].coordinates, coordDestino);
                    if (posibleRutaFinal) {
                        var distanciaTotal = distanciaUsuarioParadero + posibleRutaFinal.distanciaTotal;
                        if (distanciaTotal < mejorDistanciaTotal) {
                            mejorRutaInicial = {
                                paraderoUsuario: paraderoUsuario,
                                paraderoDestino: todosLosParaderos[i],
                                distanciaTotal: distanciaUsuarioParadero,
                                tipoRuta: paraderoUsuario.tipo
                            };
                            mejorRutaFinal = posibleRutaFinal;
                            mejorDistanciaTotal = distanciaTotal;
                        }
                    }
                }
            }
        }
    });

    if (mejorRutaInicial && mejorRutaFinal) {
        return {
            rutaInicial: mejorRutaInicial,
            rutaFinal: mejorRutaFinal
        };
    } else {
        return null;
    }
}

document.getElementById('encontrarRutaBtn').addEventListener('click', function() {
    var latlngUsuario = userMarker.getLatLng();
    var coordinatesUsuario = [latlngUsuario.lng, latlngUsuario.lat];

    var latlngDestino = searchMarker.getLatLng();
    var coordinatesDestino = [latlngDestino.lng, latlngDestino.lat];

    var toggle2Rutas = document.getElementById('toggle2Rutas').checked;

    if (toggle2Rutas) {
        var mejorRutas = verificarParaderoMasCercanoPara2Rutas(coordinatesUsuario, coordinatesDestino);
        mostrarRuta(mejorRutas, coordinatesUsuario, coordinatesDestino);
    } else {
        var mejorRuta = verificarParaderoMasCercanoParaRuta(coordinatesUsuario, coordinatesDestino);
        mostrarRuta({ rutaInicial: mejorRuta }, coordinatesUsuario, coordinatesDestino);
    }
});

function mostrarRuta(rutas, coordUsuario, coordDestino) {
    var mensajeRutaElement = document.getElementById('mensajeRuta');
    if (!mensajeRutaElement) {
        console.error('Elemento con ID "mensajeRuta" no encontrado en el DOM.');
        return;
    }

    if (rutas.rutaInicial && rutas.rutaFinal) {
        mostrarUnaRuta(rutas.rutaInicial, coordUsuario, rutas.rutaFinal.paraderoUsuario.coordinates);
        mostrarUnaRuta(rutas.rutaFinal, rutas.rutaFinal.paraderoUsuario.coordinates, coordDestino);

        var listadoParaderosInicial = obtenerParaderosEntre(rutas.rutaInicial.paraderoUsuario, rutas.rutaInicial.paraderoDestino, rutas.rutaInicial.tipoRuta);
        var listadoParaderosFinal = obtenerParaderosEntre(rutas.rutaFinal.paraderoUsuario, rutas.rutaFinal.paraderoDestino, rutas.rutaFinal.tipoRuta);

        mensajeRutaElement.innerText = `Rutas encontradas: 
            1. ${rutas.rutaInicial.paraderoUsuario.nombre} a ${rutas.rutaInicial.paraderoDestino.nombre} (Ruta activa: ${rutas.rutaInicial.paraderoUsuario.rutaName} (${rutas.rutaInicial.tipoRuta}))
            2. ${rutas.rutaFinal.paraderoUsuario.nombre} a ${rutas.rutaFinal.paraderoDestino.nombre} (Ruta activa: ${rutas.rutaFinal.paraderoUsuario.rutaName} (${rutas.rutaFinal.tipoRuta}))`;

        mostrarListadoParaderos('Paraderos de la Ruta Inicial:', listadoParaderosInicial);
        mostrarListadoParaderos('Paraderos de la Ruta Final:', listadoParaderosFinal);
    } else if (rutas.rutaInicial) {
        mostrarUnaRuta(rutas.rutaInicial, coordUsuario, coordDestino);

        var listadoParaderos = obtenerParaderosEntre(rutas.rutaInicial.paraderoUsuario, rutas.rutaInicial.paraderoDestino, rutas.rutaInicial.tipoRuta);

        mensajeRutaElement.innerText = `Paraderos más cercanos: Usuario - ${rutas.rutaInicial.paraderoUsuario.nombre}, Destino - ${rutas.rutaInicial.paraderoDestino.nombre}. Ruta activa: ${rutas.rutaInicial.paraderoUsuario.rutaName} (${rutas.rutaInicial.tipoRuta})`;

        mostrarListadoParaderos('Paraderos en la Ruta:', listadoParaderos);
    } else {
        mensajeRutaElement.innerText = 'No se encontró ningún paradero cercano al lugar seleccionado.';
    }
}

function obtenerParaderosEntre(paraderoInicio, paraderoFin, tipoRuta) {
    var rutaCompleta = tipoRuta === 'ida' ? obtenerRutaIda(paraderoInicio.rutaId) : obtenerRutaVuelta(paraderoInicio.rutaId);

    var indiceInicio = rutaCompleta.findIndex(paradero => paradero.coordinates[0] === paraderoInicio.coordinates[0] && paradero.coordinates[1] === paraderoInicio.coordinates[1]);
    var indiceFin = rutaCompleta.findIndex(paradero => paradero.coordinates[0] === paraderoFin.coordinates[0] && paradero.coordinates[1] === paraderoFin.coordinates[1]);

    return rutaCompleta.slice(indiceInicio, indiceFin + 1);
}

function mostrarListadoParaderos(titulo, listadoParaderos) {
    var mensajeRutaElement = document.getElementById('mensajeRuta');
    if (!mensajeRutaElement) {
        console.error('Elemento con ID "mensajeRuta" no encontrado en el DOM.');
        return;
    }

    var listadoHTML = `<br>${titulo}<br><ul>`;
    listadoParaderos.forEach(paradero => {
        listadoHTML += `<li>${paradero.nombre}</li>`;
    });
    listadoHTML += '</ul>';

    mensajeRutaElement.innerHTML += listadoHTML;
}

function mostrarIconoParadero(paradero) {
    var iconoParadero = L.marker([paradero.coordinates[1], paradero.coordinates[0]], { 
        icon: L.icon({
            iconUrl: 'parada-de-autobus.png', //icono para los paraderos
            iconSize: [32, 32],
            iconAnchor: [16, 32],
        })
    }).addTo(map);
}

// modificacion
function dibujarLineaPunteada(coordInicio, coordFin) {
    var latlngs = [
        [coordInicio[1], coordInicio[0]], // Convertir de [lng, lat] a [lat, lng]
        [coordFin[1], coordFin[0]] // Convertir de [lng, lat] a [lat, lng]
    ];

    var polyline = L.polyline(latlngs, { color: 'red', dashArray: '5, 10' }).addTo(map);
    map.fitBounds(polyline.getBounds());
}


function dibujarFragmentoRuta(paraderoUsuario, paraderoDestino, tipoRuta) {
    var rutaCompleta = tipoRuta === 'ida' ? obtenerRutaIda(paraderoUsuario.rutaId) : obtenerRutaVuelta(paraderoUsuario.rutaId);

    var indiceInicio = rutaCompleta.findIndex(paradero => paradero.coordinates[0] === paraderoUsuario.coordinates[0] && paradero.coordinates[1] === paraderoUsuario.coordinates[1]);
    var indiceFin = rutaCompleta.findIndex(paradero => paradero.coordinates[0] === paraderoDestino.coordinates[0] && paradero.coordinates[1] === paraderoDestino.coordinates[1]);

    var fragmentoRuta = rutaCompleta.slice(indiceInicio, indiceFin + 1);

    dibujarRutaEnMapa(fragmentoRuta);
}

function obtenerRutaIda(rutaId) {
    return todosLosParaderos.filter(paradero => paradero.rutaId === rutaId && paradero.tipo === 'ida');
}

function obtenerRutaVuelta(rutaId) {
    return todosLosParaderos.filter(paradero => paradero.rutaId === rutaId && paradero.tipo === 'vuelta');
}

//modificacion
function dibujarRutaEnMapa(fragmentoRuta) {
    if (fragmentoRuta.length < 2) {
        console.error('Se necesitan al menos dos puntos para dibujar una ruta');
        return;
    }

    var waypoints = fragmentoRuta.map(paradero => `${paradero.coordinates[0]},${paradero.coordinates[1]}`).join('|');
    var url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${API_KEY}&start=${waypoints.split('|')[0]}&end=${waypoints.split('|').pop()}&via=${waypoints.split('|').slice(1, -1).join('|')}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                var route = data.features[0].geometry.coordinates;
                var latlngs = route.map(coord => [coord[1], coord[0]]);
                var polyline = L.polyline(latlngs, { color: 'blue' }).addTo(map);
                map.fitBounds(polyline.getBounds());
            } else {
                console.error('No se pudo obtener la ruta de OpenRouteService');
            }
        })
        .catch(error => console.error('Error al obtener la ruta:', error));
}

function mostrarUnaRuta(ruta, coordUsuario, coordDestino) {
    dibujarFragmentoRuta(ruta.paraderoUsuario, ruta.paraderoDestino, ruta.tipoRuta);

    mostrarIconoParadero(ruta.paraderoUsuario);
    mostrarIconoParadero(ruta.paraderoDestino);


    dibujarLineaPunteada(coordUsuario, ruta.paraderoUsuario.coordinates);

    dibujarLineaPunteada(ruta.paraderoDestino.coordinates, coordDestino);

    mostrarMensajeRuta(`${ruta.paraderoUsuario.nombre} a ${ruta.paraderoDestino.nombre}`, ruta.tipoRuta === 'ida' ? 'Ida' : 'Vuelta');
}




function alternarRuta(rutaNumber, direction) {
    var checkbox = document.getElementById('ruta' + rutaNumber + 'Checkbox' + direction); // Estado del checkbox 
    var layer = direction === 1 ? capasRutas[rutaNumber].ida : capasRutas[rutaNumber].vuelta;
    var paraderosList = direction === 1 ? paraderos[rutaNumber].ida : paraderos[rutaNumber].vuelta;

    if (checkbox.checked) { // Si está marcado muestra la ruta añadiendo el icono de los paraderos en los paraderos declarados en el kml al mapa y la lista paraderos
        if (!map.hasLayer(layer)) {
            layer.addTo(map);
            layer.eachLayer(function(marker) {
                if (marker instanceof L.Marker) {
                    var name = marker.feature.properties.name;
                    var paradero = L.marker(marker.getLatLng(), { icon: paraderoIcon }).bindPopup(name).addTo(map);
                    paraderosList.push(paradero);
                }
            });
        }
    } else { // Si no está marcado quita la ruta y elimina los paraderos del mapa y finalmente vacía la lista paraderos 
        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
            paraderosList.forEach(function(paradero) {
                map.removeLayer(paradero);
            });
            paraderosList.length = 0;
        }
    }
}


function buscarUbicacion() {
    var input = document.getElementById('searchInput').value; //obtener el lugar buscado por el usuario
    var url = `https://nominatim.openstreetmap.org/search?q=${input}&format=json&addressdetails=1&limit=10`; //usamos el api de nominatim openstreetmap para obtener la lista de lugares o dirrecion de la calle 

    fetch(url) //solicita fetch a la API y convertimos la respuesta a .json para obtener las coordendas y añadirlo a la lista de resultados
        .then(response => response.json())
        .then(data => {
            var resultsList = document.getElementById('resultsList');
            resultsList.innerHTML = '';

            data.forEach(function(result) {
                var option = document.createElement('option');
                option.value = result.display_name;
                option.dataset.lat = result.lat;
                option.dataset.lng = result.lon;
                resultsList.appendChild(option);
            });
        })
        .catch(error => console.error('Error:', error));
}

document.getElementById('searchButton').addEventListener('click', function() {
    var selectedOption = document.querySelector('#resultsList option[value="' + document.getElementById('searchInput').value + '"]'); //busca en la lista de resultados el seleccionado
    if (selectedOption) {
        var lat = selectedOption.dataset.lat;//obtenemos latiud
        var lng = selectedOption.dataset.lng;//obtenemos longitud
        var latlng = L.latLng(lat, lng);//creamos objeto L.latlang para representar la ubicacion
        searchMarker.setLatLng(latlng).update();//actualiza la posicion del marcador de busqueda
        map.setView(latlng, 15);//centramos el mapa en la nueva ubicacion
    } else { }
});

function obtenerUbicacionUsuario(callback) {
    if (navigator.geolocation) { //ubicacion del usuario mediante el navegador
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLat = position.coords.latitude;//obtenemos latiud
            var userLng = position.coords.longitude;//obtenemos longitud

            var userLatLng = L.latLng(userLat, userLng); //creamos un objeto L.latlng con las coordenas
            userMarker.setLatLng([userLat, userLng]).addTo(map); //el marcador de ubicacionse actualiza con las coordenadas
            map.setView([userLat, userLng], 13);

            if (callback) {
                callback(userLatLng);
            }
        }, function(error) {
            console.error('Error:', error);
        });
    } else {
        console.error('Geolocalización no soportada en el navegador');
    }
}


function getClosestParadero(latlng, paraderos) {
    var closestParadero;
    var minDistance = Infinity;

    paraderos.forEach(function(paradero) { //se intera en la lista de paraderos 
        var distance = latlng.distanceTo(paradero.getLatLng()); //calcula la distancia entre la ubiacion dada y la ubiacion del paradero
        if (distance < minDistance) {
            minDistance = distance;
            closestParadero = paradero;
        }
    });

    return closestParadero; //retorna el paradero mas cercano
}

function toggleSubmenu(rutaId) { //funcion para alternar submenu
    var submenu = document.getElementById(rutaId);
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
}

function alternarListaRutas() { // funcion para alaternar lista de rutas
    var routesList = document.getElementById('routesList');
    routesList.style.display = routesList.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('limpiarRutaBtn').addEventListener('click', limpiarRutas);

function limpiarRutas() {
    capaRutas.clearLayers();

    Object.values(capasRutas).forEach(function(ruta) {
        if (ruta.ida) map.removeLayer(ruta.ida);
        if (ruta.vuelta) map.removeLayer(ruta.vuelta);
    });

    rutas.forEach(function(ruta) {
        var checkboxIda = document.getElementById('ruta' + ruta.id + 'Checkbox1');
        var checkboxVuelta = document.getElementById('ruta' + ruta.id + 'Checkbox2');
        if (checkboxIda) checkboxIda.checked = false;
        if (checkboxVuelta) checkboxVuelta.checked = false;
    });

    let layersToRemove = [];

    map.eachLayer(function(layer) {
        if ((layer instanceof L.Marker && layer.options.icon && layer.options.icon.options.iconUrl === 'parada-de-autobus.png') || layer instanceof L.Polyline) {
            layersToRemove.push(layer);
        }
    });

    layersToRemove.forEach(function(layer) {
        map.removeLayer(layer);
    });

    lineasPunteadasLayers = [];
}



// Dijkstra's algorithm
function dijkstra(graph, start, end) {
    const distances = {};
    const prev = {};
    const queue = new Set(Object.keys(graph));
    Object.keys(graph).forEach(n => distances[n] = Infinity);
    distances[start] = 0;

    while (queue.size > 0) {
        let minNode = null;
        queue.forEach(n => {
            if (minNode === null || distances[n] < distances[minNode]) minNode = n;
        });
        if (!minNode || distances[minNode] === Infinity) break;  // No reachable node
        if (minNode === end) break;
        queue.delete(minNode);

        graph[minNode].forEach(neighbor => {
            const alt = distances[minNode] + neighbor.cost;
            if (alt < distances[neighbor.id]) {
                distances[neighbor.id] = alt;
                prev[neighbor.id] = minNode;
            }
        });
    }
    // Reconstruct path
    const path = [];
    let u = end;
    while (u !== undefined) {
        path.unshift(u);
        u = prev[u];
    }
    if (path[0] !== start) return []; // No path found
    return path;
}

// A* algorithm
function heuristic(a, b, grouped) {
    // Find paradero objects for a and b
    const [aRuta, aTipo, aLng, aLat] = a.split('_');
    const [bRuta, bTipo, bLng, bLat] = b.split('_');
    return calcularDistancia(Number(aLat), Number(aLng), Number(bLat), Number(bLng));
}
function astar(graph, start, end, grouped) {
    const openSet = new Set([start]);
    const cameFrom = {};
    const gScore = {}, fScore = {};
    Object.keys(graph).forEach(n => { gScore[n]=Infinity; fScore[n]=Infinity; });
    gScore[start]=0;
    fScore[start]=heuristic(start, end, grouped);

    while (openSet.size > 0) {
        let current = null;
        openSet.forEach(n => { if(current===null||fScore[n]<fScore[current])current=n; });
        if (current === end) break;
        openSet.delete(current);

        graph[current].forEach(neighbor => {
            const tentative = gScore[current] + neighbor.cost;
            if (tentative < gScore[neighbor.id]) {
                cameFrom[neighbor.id] = current;
                gScore[neighbor.id] = tentative;
                fScore[neighbor.id] = tentative + heuristic(neighbor.id, end, grouped);
                openSet.add(neighbor.id);
            }
        });
    }
    // Reconstruct path
    const path = [];
    let u = end;
    while (u !== undefined) {
        path.unshift(u);
        u = cameFrom[u];
    }
    if (path[0] !== start) return [];
    return path;
}
