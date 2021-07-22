mapboxgl.accessToken =
  "pk.eyJ1IjoibWVyam80NyIsImEiOiJja3JkdTE1eW4xdm9xMnVscXJjNm5vOGN2In0.PQy4zd0oTnMTcRPtWwgTKw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 9,
  center: [-75.165222, 39.952583],
});

//fetch stores from API
async function getStores() {
    const res = await fetch('/api/V1/stores');
    const data = await res.json();

    console.log(data);
}

// Load map with locations
function loadMap(stores) {
    map.on('load', function() {
        map.addLayer({
          id: 'points',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: stores
            }
          },
          layout: {
            'icon-image': '{icon}-15',
            'icon-size': 1.5,
            'text-field': '{storeId}',
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.9],
            'text-anchor': 'top'
          }
        });
      });
    }

   getStores();
