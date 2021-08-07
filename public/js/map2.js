mapboxgl.accessToken =
  "pk.eyJ1IjoibWVyam80NyIsImEiOiJja3JkdTE1eW4xdm9xMnVscXJjNm5vOGN2In0.PQy4zd0oTnMTcRPtWwgTKw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 12,
  center: [-75.165222, 39.952583],
});

// FETCH stores from API
function getLocations(locations) {
    const res = await fetch('/api/v1/locations');
}


function loadMap() {
  map.on("load", function () {
    map.loadImage(
        'assets/imgs/plant.jpeg',
        function (error, image) {
        if (error) throw error;
         
        // Add the image to the map style.
        map.addImage('plant', image);
    });
    // Add a layer to use the image to represent the data.
    map.addLayer({
      id: "points",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: locations,
        //   features: [
        //     {
        //       type: "Feature",
        //       geometry: {
        //         type: "Point",
        //         coordinates: [-75.165222, 39.952583],
        //       },

        //       properties: {
        //         storeId: "0001",
        //         icon: "shop",
        //         locationName: "Miss Rachel's"
        //       },
        //     },
        //   ],
        },
      },
      layout: {
        "icon-image": 'plant',
        "icon-size": 0.10,
        "text-field": "{locationName}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 1.3],
        "text-anchor": "top",
    }
});
});
}


getStores();
