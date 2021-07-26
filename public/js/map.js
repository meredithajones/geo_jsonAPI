mapboxgl.accessToken =
  "pk.eyJ1IjoibWVyam80NyIsImEiOiJja3JkdTE1eW4xdm9xMnVscXJjNm5vOGN2In0.PQy4zd0oTnMTcRPtWwgTKw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 10,
  center: [-75.165222, 39.952583],
});

//Fetch stores from API

//load map with locations
async function getStores() {
  const res = await fetch('/api/v1/stores');
  const data = await res.json();

  console.log(data);
}

function loadMap(stores) {
  map.on("load", function () {
    // Add a layer to use the image to represent the data.
    map.addLayer({
      id: "points",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: stores, 
          // features: [
          //   {
          //     type: "Feature",
          //     geometry: {
          //       type: "Point",
          //       coordinates: [-75.165222, 39.952583],
          //     },
          //     properties: {
          //       storeId: "0001",
          //       icon: "shop",
          //     },
          //   },
          // ],
        },
      },
      layout: {
        'icon-image': '{icon}-15',
        'icon-size': 1.5, 
        'text-field': '{storeId}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset':[0, 0.9],
        'text-anchor': 'top',

      }

    });
  });
}

getStores();
