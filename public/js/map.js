mapboxgl.accessToken =
  "pk.eyJ1IjoibWVyam80NyIsImEiOiJja3JkdTE1eW4xdm9xMnVscXJjNm5vOGN2In0.PQy4zd0oTnMTcRPtWwgTKw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 10,
  center: [-75.165222, 39.952583],
});

map.on('load', function () {
  // Load an image from an external URL.
  map.loadImage(
  'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
  function (error, image) {
  if (error) throw error;
   
  // Add the image to the map style.
  map.addImage('cat', image);
   
  // Add a data source containing one point feature.
  map.addSource('point', {
  'type': 'geojson',
  'data': {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'geometry': {
  'type': 'Point',
  'coordinates': [-77.4144, 25.0759]
  }
  }
  ]
  }
  });
   
  // Add a layer to use the image to represent the data.
  map.addLayer({
  'id': 'points',
  'type': 'symbol',
  'source': 'point', // reference the data source
  'layout': {
  'icon-image': 'cat', // reference the image
  'icon-size': 0.25
  }
  });
  }
  );
  });
  
