// Configuration Constants
const MAP_CENTER = [-16.409, -71.537];
const MAP_ZOOM = 13;
const API_KEY = '5b3ce3597851110001cf62483bdbb6a0746b4bc8ae9d90df9f284414';
const MAX_DISTANCE_TO_PARADERO = 1; // km
const MAX_DISTANCE_TO_DESTINATION = 5; // km
const AVERAGE_BUS_SPEED = 20; // km/h for time estimation
const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search';

// Map Initialization
const map = L.map('map').setView(MAP_CENTER, MAP_ZOOM);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Custom Icons
const icons = {
    user: L.icon({
        iconUrl: 'location.png',
        iconSize: [38, 38],
        iconAnchor: [19, 38],
    }),
    paradero: L.icon({
        iconUrl: 'busStop.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    })
};

// Markers -16.402990117104448, -71.52566314749663 unsa
const markers = {
    user: L.marker([-16.39295, -71.53837], { 
        icon: icons.user,
        draggable: true,
        autoPan: true
    }).addTo(map),
    search: L.marker(MAP_CENTER, { 
        draggable: true,
        autoPan: true
    }).addTo(map)
};

// Route Data with both paths (KML) and stops (GeoJSON)
const routes = [
    {
        id: 1,
        name: 'COTUM A',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/COTUM%20A%20IDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/COTUM%20A%20VUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida1.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta1.geojson'
        }
    },
    {
        id: 2,
        name: 'CORRECAMINOS DOLORES',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/CORRECAMINOSDOLORESIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/CORRECAMINOSDOLORESVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida2.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta2.geojson'
        }
    },
    {
        id: 3,
        name: 'A15 MIRAFLORES',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/A15-Miraflores%20(c4union%20aqp)%20IDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/A15-Miraflores%20(c4union%20aqp)%20VUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida3.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta3.geojson'
        }
    },
    {
        id: 4,
        name: 'ALTO SELVA ALEGRE',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/alto%20selva%20a(c4%20uni%C3%B3n%20aqp)%20IDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/alto%20selva%20a(c4%20uni%C3%B3n%20aqp)%20VUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida4.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta4.geojson'
        }
    },
    {
        id: 5,
        name: 'C2-4D CONO NORTE',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/ConoNorteIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/ConoNorteVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida5.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta5.geojson'
        }
    },
    {
        id: 6,
        name: 'BJUANXXIII',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/BJUANXXIIIIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/BJUANXXIIIVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida6.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta6.geojson'
        }
    },
    {
        id: 7,
        name: 'C7-5 AQP Masivo',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/AltoLibertadIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/AltoLibertadVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida7.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta7.geojson'
        }
    },
    {
        id: 8,
        name: 'COTUM B',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/COTUMBIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/COTUMBVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida8.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta8.geojson'
        }
    },
    {
        id: 9,
        name: 'C 3 DE OCTUBRE',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/C-3deOctubreIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/C-3deOctubreVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida9.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta9.geojson'
        }
    },
    {
        id: 10,
        name: 'C7-9 AQP Masivo',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/C7AqpMasivo7-09IDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/C7AqpMasivo%207-09VUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida10.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta10.geojson'
        }
    },
    {
        id: 11,
        name: 'A MARIANO MELGAR',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/A-MarianoMelgarIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/A-MarianoMelgarVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida11.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta11.geojson'
        }
    },
    {
        id: 12,
        name: 'B POLANCO',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/B-PolancoIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/B-PolancoVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida12.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta12.geojson'
        }
    },
    {
        id: 13,
        name: 'B 3 DE OCTUBRE',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/B-3deOctubreIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/B-3deOctubreVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida13.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta13.geojson'
        }
    },
    {
        id: 14,
        name: 'CAYMA ENACE',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/CaymaenaceIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/CaymaEnaceVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida14.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta14.geojson'
        }
    },
    {
        id: 15,
        name: 'LA PERLA SRLTDA',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/LaPerlaS.R.L.T.D.A.IDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/LaPerlaS.R.L.T.D.AVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida15.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta15.geojson'
        }
    },
    {
        id: 16,
        name: '15 DE AGOSTO',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/15deAgostoIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/15deAgostoVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida16.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta16.geojson'
        }
    },
    {
        id: 17,
        name: 'UCHUMAYO',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/UchumayoIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/UchumayoVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida17.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta17.geojson'
        }
    },
    {
        id: 18,
        name: 'ORIOL A',
        path: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/ORIOLAIDA.kml',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/maps/ORIOLAVUELTA.kml'
        },
        stops: {
          ida: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/ida18.geojson',
          vuelta: 'https://raw.githubusercontent.com/chriistmas/TI/main/whereabouts/vuelta18.geojson'
        }
    }
];

const routeColors = [
    '#FF6347', '#4682B4', '#9ACD32', '#FF69B4', '#00CED1', '#ADFF2F',
    '#6A5ACD', '#FF8C00', '#20B2AA', '#9370DB', '#FFD700', '#40E0D0',
    '#778899', '#B22222', '#228B22', '#DA70D6', '#87CEEB', '#32CD32'
];

// State Management
const state = {
    routeLayers: {},
    stopLayers: {},
    allStops: [],
    activeRoute: null,
    routeLayerGroup: L.layerGroup().addTo(map),
    addedMarkers: [], // Add this line to track markers
    dashedLines: [],
    currentBounds: null
};

// DOM Elements
const domElements = {
    searchInput: document.getElementById('searchInput'),
    searchButton: document.getElementById('searchButton'),
    resultsList: document.getElementById('resultsList'),
    getLocationBtn: document.getElementById('getLocationBtn'),
    findRouteBtn: document.getElementById('findRouteBtn'),
    clearRouteBtn: document.getElementById('clearRouteBtn'),
    routeOptions: document.getElementsByName('routeOption'),
    toggleRoutesBtn: document.getElementById('toggleRoutesBtn'),
    routesList: document.getElementById('routesList'),
    routeMessage: document.getElementById('routeMessage'),
    routeDetails: document.getElementById('routeDetails'),
    routeDistance: document.getElementById('routeDistance'),
    routeTime: document.getElementById('routeTime'),
    routeSteps: document.getElementById('routeSteps'),
    loadingIndicator: document.getElementById('loadingIndicator')
};

// Helper Functions
function showLoading(show) {
    domElements.loadingIndicator.classList.toggle('hidden', !show);
}

function showMessage(message, isError = false) {
    domElements.routeMessage.textContent = message;
    domElements.routeMessage.style.color = isError ? 'var(--error-color)' : 'inherit';
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function convertToLatLng(coords) {
    return Array.isArray(coords[0]) ? 
        coords.map(coord => [coord[1], coord[0]]) : 
        [coords[1], coords[0]];
}

function formatTime(minutes) {
    if (minutes < 60) return `${minutes} minutos`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
}

// KML Route Loading
async function loadKmlLayer(url, color) {
    return new Promise((resolve, reject) => {
        const layer = omnivore.kml(url, null, L.geoJson(null, {
            style: { color, weight: 5 }
        }))
        .on('ready', () => resolve(layer))
        .on('error', reject);
    });
}
// GeoJSON Stops Loading
async function fetchStops(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching stops:', error);
        return { features: [] };
    }
}
// Modified processStops to ensure proper ordering
function processStops(data, routeId, direction) {
    // Process features in their original GeoJSON order
    return data.features
        .filter(feature => feature.geometry?.type === "Point")
        .map((feature, index) => ({
            id: `${routeId}-${direction}-${index}`,
            name: feature.properties?.nombre || `Paradero ${index+1} ${direction}`,
            coordinates: feature.geometry.coordinates,
            routeId,
            direction,
            index,  // Maintain original order
            transportUnits: feature.properties?.unidades || [],
            routeName: routes.find(r => r.id === routeId)?.name || 'Unknown'
        }));
}

// Enhanced KML loading that matches with GeoJSON stops
async function loadRouteData() {
    try {
        showLoading(true);
        
        // First load all stops data from GeoJSON
        await loadStopsData();
        
        // Then load KML routes and match with stops
        for (const route of routes) {
            const idaLayer = await loadKmlLayer(route.path.ida, routeColors[route.id]);
            const vueltaLayer = await loadKmlLayer(route.path.vuelta, routeColors[route.id]);
            
            // Get the ordered stops for each direction
            const idaStops = state.allStops
                .filter(s => s.routeId === route.id && s.direction === 'ida')
                .sort((a, b) => a.index - b.index);
            
            const vueltaStops = state.allStops
                .filter(s => s.routeId === route.id && s.direction === 'vuelta')
                .sort((a, b) => a.index - b.index);
            
            // Store the layers with their corresponding stops
            state.routeLayers[route.id] = {
                ida: {
                    layer: idaLayer,
                    stops: idaStops
                },
                vuelta: {
                    layer: vueltaLayer,
                    stops: vueltaStops
                }
            };
        }

        populateRoutesList();

    } catch (error) {
        console.error('Error loading route data:', error);
        showMessage('Error al cargar datos de rutas', true);
    } finally {
        showLoading(false);
    }
}

async function loadStopsData() {
    try {
        const stopsData = [];
        
        for (const route of routes) {
            const [idaStops, vueltaStops] = await Promise.all([
                fetchStops(route.stops.ida),
                fetchStops(route.stops.vuelta)
            ]);
            
            stopsData.push(
                ...processStops(idaStops, route.id, 'ida'),
                ...processStops(vueltaStops, route.id, 'vuelta')
            );
        }
        
        state.allStops = stopsData;
    } catch (error) {
        console.error('Error loading stops data:', error);
        throw error;
    }
}

function generateMockStops(routeId, direction) {
    // Generate some mock stops along a path
    const stops = [];
    const stopCount = 5 + Math.floor(Math.random() * 5); // 5-10 stops
    
    for (let i = 0; i < stopCount; i++) {
        // Generate coordinates along a general path
        const lat = MAP_CENTER[0] + (Math.random() * 0.1 - 0.05);
        const lng = MAP_CENTER[1] + (Math.random() * 0.1 - 0.05);
        
        stops.push({
            id: `${routeId}-${direction}-${i}`,
            name: `Paradero ${i+1} ${direction}`,
            coordinates: [lng, lat],
            routeId,
            direction,
            routeName: routes.find(r => r.id === routeId)?.name || 'Unknown'
        });
    }
    
    return stops;
}

// UI Population
function populateRoutesList() {
    domElements.routesList.innerHTML = routes.map(route => `
        <div class="route-item" data-route-id="${route.id}">
            <div class="route-header">
                <span class="route-name">${route.name}</span>
                <i class="fas fa-chevron-right route-toggle"></i>
            </div>
            <div class="route-directions">
                <div class="direction-item">
                    <input type="radio" name="selectedRoute" id="route-${route.id}-ida" value="${route.id}-ida">
                    <label for="route-${route.id}-ida">Ida</label>
                </div>
                <div class="direction-item">
                    <input type="radio" name="selectedRoute" id="route-${route.id}-vuelta" value="${route.id}-vuelta">
                    <label for="route-${route.id}-vuelta">Vuelta</label>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.route-header').forEach(header => {
        header.addEventListener('click', function() {
            const item = this.closest('.route-item');
            const directions = item.querySelector('.route-directions');
            const toggle = item.querySelector('.route-toggle');
            
            directions.classList.toggle('active');
            toggle.classList.toggle('rotated');
        });
    });
}

// Enhanced route finding logic
function findBestRoute(userCoords, destCoords, useTwoRoutes = false) {
    const userLatLng = convertToLatLng(userCoords);
    const destLatLng = convertToLatLng(destCoords);

    if (useTwoRoutes) {
        return findBestTwoRouteCombination(userLatLng, destLatLng);
    }
    return findBestSingleRoute(userLatLng, destLatLng);
}

// Enhanced route finding logic that properly matches KML routes with GeoJSON stops
function findBestSingleRoute(userLatLng, destLatLng) {
    let bestRoute = null;
    let minCombinedDistance = Infinity;

    // Group stops by route and direction
    const routesMap = new Map();
    state.allStops.forEach(stop => {
        const key = `${stop.routeId}-${stop.direction}`;
        if (!routesMap.has(key)) {
            routesMap.set(key, []);
        }
        routesMap.get(key).push(stop);
    });

    routesMap.forEach((stops, routeKey) => {
        // Ordenar los stops estrictamente por índice (el orden de GeoJSON)
        stops.sort((a, b) => a.index - b.index);

        // Buscar los paraderos más cercanos AL ORIGEN y AL DESTINO
        const nearestToOrigin = findNearestStop(userLatLng, stops);
        const nearestToDest = findNearestStop(destLatLng, stops);

        // Validar distancia máxima
        if (!nearestToOrigin || nearestToOrigin.distance > MAX_DISTANCE_TO_PARADERO) return;
        if (!nearestToDest || nearestToDest.distance > MAX_DISTANCE_TO_DESTINATION) return;

        // Obtener los índices
        const originIndex = nearestToOrigin.stop.index;
        const destIndex = nearestToDest.stop.index;
        const direction = nearestToOrigin.stop.direction;

        // Validar sentido del recorrido
        if (
            (direction === 'ida' && originIndex < destIndex) ||
            (direction === 'vuelta' && originIndex > destIndex)
        ) {
            const combinedDistance = nearestToOrigin.distance + nearestToDest.distance;
            if (combinedDistance < minCombinedDistance) {
                minCombinedDistance = combinedDistance;
                bestRoute = {
                    type: 'single',
                    userStop: nearestToOrigin.stop,
                    destStop: nearestToDest.stop,
                    distance: combinedDistance,
                    routeId: nearestToOrigin.stop.routeId,
                    routeName: nearestToOrigin.stop.routeName,
                    direction: direction,
                    transportUnits: getTransportUnitsBetween(stops, originIndex, destIndex)
                };
            }
        }
    });

    return bestRoute;
}

// Case 2: Two Routes with Transfer
function findBestTwoRouteCombination(userLatLng, destLatLng) {
    let bestCombination = null;
    let minTotalDistance = Infinity;

    // Find all candidate first legs (routes near origin)
    const firstLegCandidates = state.allStops
        .map(stop => ({
            stop,
            distance: calculateDistance(
                userLatLng[0], userLatLng[1],
                stop.coordinates[1], stop.coordinates[0]
            )
        }))
        .filter(item => item.distance <= MAX_DISTANCE_TO_PARADERO);

    // Find all candidate second legs (routes near destination)
    const secondLegCandidates = state.allStops
        .map(stop => ({
            stop,
            distance: calculateDistance(
                stop.coordinates[1], stop.coordinates[0],
                destLatLng[0], destLatLng[1]
            )
        }))
        .filter(item => item.distance <= MAX_DISTANCE_TO_DESTINATION);

    // Find possible transfer points
    firstLegCandidates.forEach(firstLeg => {
        secondLegCandidates.forEach(secondLeg => {
            // Must be different routes
            if (firstLeg.stop.routeId === secondLeg.stop.routeId) return;

            // Find nearest stops between routes (potential transfer points)
            const transferPoints = findTransferPoints(
                firstLeg.stop.routeId, 
                secondLeg.stop.routeId
            );

            transferPoints.forEach(transfer => {
                const totalDistance = 
                    firstLeg.distance +
                    transfer.distance +
                    secondLeg.distance;

                if (totalDistance < minTotalDistance) {
                    minTotalDistance = totalDistance;
                    bestCombination = {
                        type: 'two-routes',
                        firstLeg: {
                            stop: firstLeg.stop,
                            transfer: transfer.firstStop
                        },
                        secondLeg: {
                            stop: secondLeg.stop,
                            transfer: transfer.secondStop
                        },
                        distance: totalDistance,
                        transportUnits: {
                            firstRoute: getTransportUnits(firstLeg.stop.routeId),
                            secondRoute: getTransportUnits(secondLeg.stop.routeId)
                        }
                    };
                }
            });
        });
    });

    return bestCombination;
}

// Helper functions
function findNearestStop(point, stops) {
    let nearest = null;
    let minDistance = Infinity;

    stops.forEach(stop => {
        const distance = calculateDistance(
            point[0], point[1],
            stop.coordinates[1], stop.coordinates[0]
        );
        if (distance < minDistance) {
            minDistance = distance;
            nearest = stop;
        }
    });

    return nearest ? { stop: nearest, distance: minDistance } : null;
}

function findTransferPoints(routeId1, routeId2) {
    const transferPairs = [];
    const route1Stops = state.allStops.filter(s => s.routeId === routeId1);
    const route2Stops = state.allStops.filter(s => s.routeId === routeId2);

    route1Stops.forEach(stop1 => {
        route2Stops.forEach(stop2 => {
            const distance = calculateDistance(
                stop1.coordinates[1], stop1.coordinates[0],
                stop2.coordinates[1], stop2.coordinates[0]
            );
            if (distance <= MAX_DISTANCE_TO_PARADERO * 1.5) {
                transferPairs.push({
                    firstStop: stop1,
                    secondStop: stop2,
                    distance
                });
            }
        });
    });

    return transferPairs.sort((a, b) => a.distance - b.distance);
}

function getTransportUnits(routeId) {
    const stops = state.allStops.filter(s => s.routeId === routeId);
    const units = new Set();
    stops.forEach(stop => {
        if (stop.transportUnits) {
            stop.transportUnits.forEach(unit => units.add(unit));
        }
    });
    return Array.from(units);
}
function getTransportUnitsBetween(stops, startIndex, endIndex) {
    const segment = stops.slice(
        Math.min(startIndex, endIndex),
        Math.max(startIndex, endIndex) + 1
    );
    const units = new Set();
    segment.forEach(stop => {
        if (stop.transportUnits) {
            stop.transportUnits.forEach(unit => units.add(unit));
        }
    });
    return Array.from(units);
}

// Enhanced display functions
function displayRoute(route) {
    clearCurrentRoute();
    
    if (!route) {
        showMessage('No se encontró una ruta adecuada', true);
        return;
    }

    // Show origin and destination markers
    markers.user.addTo(map);
    markers.search.addTo(map);

    if (route.type === 'two-routes') {
        displayTwoRouteCombination(route);
    } else {
        displaySingleRoute(route);
    }
}

function displaySingleRoute(route) {
    clearCurrentRoute();

    // Dibujar el segmento de bus
    drawRouteSegment(route.userStop, route.destStop, route.direction);

    // Línea entrecortada del usuario al paradero de embarque
    const userCoords = [markers.user.getLatLng().lng, markers.user.getLatLng().lat];
    const paraderoCoords = route.userStop.coordinates;
    if (calculateDistance(userCoords[1], userCoords[0], paraderoCoords[1], paraderoCoords[0]) > 0.01) { // >10m por ejemplo
        drawDashedLine(userCoords, paraderoCoords, "Camina hasta el paradero de embarque");
    }

    // Línea entrecortada del paradero de desembarque al destino
    const destCoords = [markers.search.getLatLng().lng, markers.search.getLatLng().lat];
    const paraderoDestCoords = route.destStop.coordinates;
    if (calculateDistance(destCoords[1], destCoords[0], paraderoDestCoords[1], paraderoDestCoords[0]) > 0.01) {
        drawDashedLine(paraderoDestCoords, destCoords, "Camina desde el paradero de bajada hasta tu destino");
    }

    updateRouteInfo({
        ...route,
        transportName: route.routeName,
        transportUnits: route.transportUnits
    });
}

// Función para dibujar línea entrecortada
function drawDashedLine(startCoords, endCoords, label) {
    const line = L.polyline(
        [
            [startCoords[1], startCoords[0]],
            [endCoords[1], endCoords[0]]
        ],
        { color: 'red', dashArray: '5, 10', weight: 2 }
    ).addTo(map);

    line.bindPopup(label);
    state.dashedLines.push(line);
}

function displayTwoRouteCombination(route) {
    // Draw first route segment
    drawRouteSegment(
        route.firstLeg.stop,
        route.firstLeg.transfer,
        route.firstLeg.stop.direction
    );
    
    // Draw second route segment
    drawRouteSegment(
        route.secondLeg.transfer,
        route.secondLeg.stop,
        route.secondLeg.stop.direction
    );
    
    // Show route info with both transport names
    updateRouteInfo({
        ...route,
        firstTransportName: routes.find(r => r.id === route.firstLeg.stop.routeId).name,
        secondTransportName: routes.find(r => r.id === route.secondLeg.stop.routeId).name
    });
}

function clearAddedMarkers() {
    // Remove all tracked markers from map
    state.addedMarkers.forEach(marker => map.removeLayer(marker));
    // Clear the array
    state.addedMarkers = [];
}

// Enhanced route segment drawing that uses KML path but validates with GeoJSON stops
// Modified drawRouteSegment to hide blue markers and only show stops
// Helper para encontrar el punto del KML más cercano a un paradero
function getClosestKmlIndex(kmlCoords, stopCoord) {
    let minDist = Infinity;
    let minIdx = -1;
    kmlCoords.forEach((coord, idx) => {
        const dist = calculateDistance(coord[1], coord[0], stopCoord[1], stopCoord[0]);
        if (dist < minDist) {
            minDist = dist;
            minIdx = idx;
        }
    });
    return minIdx;
}

// Nueva función para dibujar el segmento real de la ruta según el KML
function drawRouteSegment(startStop, endStop, direction) {
    const routeId = startStop.routeId;
    const routeData = state.routeLayers[routeId][direction];
    const kmlLayer = routeData.layer;

    // Obtener todos los puntos del KML como array de [lng, lat]
    let kmlCoords = [];
    kmlLayer.eachLayer(layer => {
        if (layer instanceof L.Polyline) {
            kmlCoords = kmlCoords.concat(layer.getLatLngs().map(ll => [ll.lng, ll.lat]));
        }
    });

    // Buscar el índice del punto KML más cercano a cada paradero
    const startIdx = getClosestKmlIndex(kmlCoords, startStop.coordinates);
    const endIdx = getClosestKmlIndex(kmlCoords, endStop.coordinates);

    if (startIdx === -1 || endIdx === -1) return;

    // Extraer el segmento correcto (respetar el orden)
    const segment = startIdx < endIdx ?
        kmlCoords.slice(startIdx, endIdx + 1) :
        kmlCoords.slice(endIdx, startIdx + 1).reverse();

    // Convertir a formato [lat, lng] para Leaflet
    const segmentLatLngs = segment.map(([lng, lat]) => [lat, lng]);

    // Dibujar la polilínea real
    const routePath = L.polyline(segmentLatLngs, {
        color: routeColors[routeId % routeColors.length],
        weight: 5,
        smoothFactor: 1
    }).addTo(map);

    clearAddedMarkers();

    // Agregar markers de paraderos intermedios como antes
    const orderedStops = routeData.stops;
    const startStopIndex = orderedStops.findIndex(s => s.id === startStop.id);
    const endStopIndex = orderedStops.findIndex(s => s.id === endStop.id);
    const segmentStops = orderedStops.slice(
        Math.min(startStopIndex, endStopIndex),
        Math.max(startStopIndex, endStopIndex) + 1
    );

    segmentStops.forEach(stop => {
        if (stop.id !== startStop.id && stop.id !== endStop.id) {
            const marker = L.marker([stop.coordinates[1], stop.coordinates[0]], {
                icon: icons.paradero
            }).addTo(map)
            .bindPopup(`
                <strong>${stop.name}</strong><br>
                ${stop.routeName}<br>
                Unidades: ${stop.transportUnits?.join(', ') || 'No disponible'}
            `);
            state.addedMarkers.push(marker);
        }
    });

    // Store for cleanup
    state.dashedLines.push(routePath);

    // Fit bounds to show the entire segment
    map.fitBounds(routePath.getBounds());
}


function drawConnectionLine(startCoords, endCoords, label) {
    const line = L.polyline(
        [convertToLatLng(startCoords), convertToLatLng(endCoords)], 
        { color: 'red', dashArray: '5, 10', weight: 2 }
    ).addTo(map);
    
    line.bindPopup(label);
    state.dashedLines.push(line);
}

// Enhanced route info display
function updateRouteInfo(route) {
    domElements.routeDistance.textContent = `${route.distance.toFixed(2)} km`;
    
    const timeHours = route.distance / AVERAGE_BUS_SPEED;
    const timeMinutes = Math.round(timeHours * 60);
    domElements.routeTime.textContent = formatTime(timeMinutes);
    
    if (route.type === 'two-routes') {
        domElements.routeSteps.innerHTML = `
            <div class="step-item">
                <i class="fas fa-bus step-icon"></i>
                <div>
                    <strong>${route.firstTransportName}</strong>
                    <div>Embarcar en: ${route.firstLeg.stop.name}</div>
                    ${route.transportUnits?.firstRoute?.length ? `
                    <div class="transport-units">
                        Unidades: ${route.transportUnits.firstRoute.map(unit => `
                            <span class="unit-badge">${unit}</span>
                        `).join('')}
                    </div>` : ''}
                </div>
            </div>
            <div class="step-item transfer">
                <i class="fas fa-exchange-alt step-icon"></i>
                <div>
                    <strong>Transferencia</strong>
                    <div>En: ${route.firstLeg.transfer.name}</div>
                </div>
            </div>
            <div class="step-item">
                <i class="fas fa-bus step-icon"></i>
                <div>
                    <strong>${route.secondTransportName}</strong>
                    <div>Desembarcar en: ${route.secondLeg.stop.name}</div>
                    ${route.transportUnits?.secondRoute?.length ? `
                    <div class="transport-units">
                        Unidades: ${route.transportUnits.secondRoute.map(unit => `
                            <span class="unit-badge">${unit}</span>
                        `).join('')}
                    </div>` : ''}
                </div>
            </div>
        `;
    } else {
        const stopsBetween = getStopsBetween(route.userStop, route.destStop, route.direction);
        domElements.routeSteps.innerHTML = `
            <div class="step-item">
                <i class="fas fa-bus step-icon"></i>
                <div>
                    <strong>${route.transportName}</strong>
                    <div>Embarcar en: ${route.userStop.name}</div>
                    ${route.transportUnits?.length ? `
                    <div class="transport-units">
                        Unidades: ${route.transportUnits.map(unit => `
                            <span class="unit-badge">${unit}</span>
                        `).join('')}
                    </div>` : ''}
                </div>
            </div>
            ${stopsBetween.slice(1, -1).map(stop => `
                <div class="step-item">
                    <i class="fas fa-map-marker-alt step-icon"></i>
                    <div>${stop.name}</div>
                </div>
            `).join('')}
            <div class="step-item">
                <i class="fas fa-flag-checkered step-icon"></i>
                <div>Desembarcar en: ${route.destStop.name}</div>
            </div>
        `;
    }
    
    domElements.routeDetails.classList.remove('hidden');
}

function getStopsBetween(startStop, endStop, direction) {
    const allDirectionStops = state.allStops
        .filter(stop => stop.routeId === startStop.routeId && stop.direction === direction)
        .sort((a, b) => {
            return direction === 'ida' ? 
                a.coordinates[0] - b.coordinates[0] : 
                b.coordinates[0] - a.coordinates[0];
        });
    
    const startIndex = allDirectionStops.findIndex(stop => 
        stop.coordinates[0] === startStop.coordinates[0] && 
        stop.coordinates[1] === startStop.coordinates[1]
    );
    
    const endIndex = allDirectionStops.findIndex(stop => 
        stop.coordinates[0] === endStop.coordinates[0] && 
        stop.coordinates[1] === endStop.coordinates[1]
    );
    
    return allDirectionStops.slice(
        Math.min(startIndex, endIndex),
        Math.max(startIndex, endIndex) + 1
    );
}

// Modified clear function to preserve origin/destination markers
function clearCurrentRoute() {
    // Clear all except user and search markers
    state.dashedLines.forEach(line => {
        if (line !== markers.user && line !== markers.search) {
            map.removeLayer(line);
        }
    });
    state.dashedLines = [markers.user, markers.search];
    clearAddedMarkers();
    
    // Reset other state
    state.currentBounds = null;
    domElements.routeDetails.classList.add('hidden');
    domElements.routeDistance.textContent = '-';
    domElements.routeTime.textContent = '-';
    domElements.routeSteps.innerHTML = '';
}

// Event Handlers
function handleSearch() {
    const query = domElements.searchInput.value.trim();
    if (!query) return;

    const url = `${NOMINATIM_URL}?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=10`;
    
    showLoading(true);
    
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            domElements.resultsList.innerHTML = '';
            data.forEach(result => {
                const option = document.createElement('option');
                option.value = result.display_name;
                option.dataset.lat = result.lat;
                option.dataset.lng = result.lon;
                domElements.resultsList.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Search error:', error);
            showMessage('Error al buscar ubicación', true);
        })
        .finally(() => {
            showLoading(false);
        });
}

function handleSearchResult() {
    const selectedOption = document.querySelector(
        `#resultsList option[value="${domElements.searchInput.value}"]`
    );
    
    if (selectedOption) {
        const lat = parseFloat(selectedOption.dataset.lat);
        const lng = parseFloat(selectedOption.dataset.lng);
        const latLng = L.latLng(lat, lng);
        
        markers.search.setLatLng(latLng).update();
        map.setView(latLng, 15);
    }
}

function handleGetLocation() {
    if (!navigator.geolocation) {
        showMessage('Geolocalización no soportada en tu navegador', true);
        return;
    }

    showLoading(true);
    
    navigator.geolocation.getCurrentPosition(
        position => {
            const latLng = L.latLng(position.coords.latitude, position.coords.longitude);
            markers.user.setLatLng(latLng).update();
            map.setView(latLng, 15);
            showLoading(false);
        },
        error => {
            console.error('Geolocation error:', error);
            showMessage('Error al obtener tu ubicación', true);
            showLoading(false);
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

// In your event handler
function handleFindRoute() {
    const userLatLng = markers.user.getLatLng();
    const destLatLng = markers.search.getLatLng();
    
    if (!userLatLng || !destLatLng) {
        showMessage('Por favor seleccione origen y destino', true);
        return;
    }
    
    const useTwoRoutes = document.querySelector('input[name="routeOption"]:checked').value === '2';
    showLoading(true);
    
    setTimeout(() => { // Prevent UI freezing
        try {
            const bestRoute = findBestRoute(
                [userLatLng.lng, userLatLng.lat],
                [destLatLng.lng, destLatLng.lat],
                useTwoRoutes
            );
            
            if (!bestRoute) {
                showMessage(useTwoRoutes ? 
                    'No se encontró combinación de rutas adecuada' :
                    'No se encontró ruta directa', true);
                return;
            }
            
            displayRoute(bestRoute);
        } catch (error) {
            console.error('Route finding error:', error);
            showMessage('Error al calcular la ruta', true);
        } finally {
            showLoading(false);
        }
    }, 100);
}

function handleClearRoute() {
    clearCurrentRoute();
    
    // Remove all route layers
    Object.values(state.routeLayers).forEach(route => {
        if (route.ida && map.hasLayer(route.ida)) map.removeLayer(route.ida);
        if (route.vuelta && map.hasLayer(route.vuelta)) map.removeLayer(route.vuelta);
    });
    
    // Reset search marker
    markers.search.setLatLng(MAP_CENTER);
    map.setView(MAP_CENTER, MAP_ZOOM);
    
    showMessage('Seleccione origen y destino para calcular la ruta.');
}

function toggleRouteList() {
    domElements.routesList.classList.toggle('hidden');
    const icon = domElements.toggleRoutesBtn.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
}

// Initialize the application
function init() {
    // Set up event listeners
    domElements.searchButton.addEventListener('click', handleSearch);
    domElements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    domElements.searchInput.addEventListener('change', handleSearchResult);
    domElements.getLocationBtn.addEventListener('click', handleGetLocation);
    domElements.findRouteBtn.addEventListener('click', handleFindRoute);
    domElements.clearRouteBtn.addEventListener('click', handleClearRoute);
    domElements.toggleRoutesBtn.addEventListener('click', toggleRouteList);
    
    // Make markers draggable
    markers.user.on('dragend', function() {
        handleFindRoute();
    });
    
    markers.search.on('dragend', function() {
        handleFindRoute();
    });
    
    // Initialize UI
    domElements.routeDetails.classList.add('hidden');
    showMessage('Seleccione origen y destino para calcular la ruta.');
    
    // Load route data
    loadRouteData();
}

let searchTimeout;
domElements.searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(handleSearch, 300);
});

// Start the app when DOM is fully loaded
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}
