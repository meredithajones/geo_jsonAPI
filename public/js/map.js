mapboxgl.accessToken =
  "pk.eyJ1IjoibWVyam80NyIsImEiOiJja3JkdTE1eW4xdm9xMnVscXJjNm5vOGN2In0.PQy4zd0oTnMTcRPtWwgTKw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 10,
  center: [-75.165222, 39.952583],
});

// Fetch stores from API
async function getStores() {
  const res = await fetch('/api/v1/stores');
  const data = await res.json();

  const stores = data.data.map(store => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          store.location.coordinates[0],
          store.location.coordinates[1]
        ]
      },
      properties: {
        storeId: store.storeId,
        icon: 'shop',
        name: 'locationName'
      }
    };
  });

  loadMap(stores);
}

// Load map with stores
function loadMap(stores) {
  map.on('load', function() {
    map.loadImage(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvh5OpVfEzZara1q9hvgYWRTCvXeXqeh-Pw&usqp=CAU',
      function (error, image) {
      if (error) throw error;
       
      // Add the image to the map style.
      map.addImage('plant', image);

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
        'icon-image': 'plant',
        'icon-size': 1.5,
        'text-field': '{name}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.9],
        'text-anchor': 'top'
      }
    });
  });
}

getStores();