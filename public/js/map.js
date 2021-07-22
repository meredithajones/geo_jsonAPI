
mapboxgl.accessToken = 'pk.eyJ1IjoibWVyam80NyIsImEiOiJja3JkdTE1eW4xdm9xMnVscXJjNm5vOGN2In0.PQy4zd0oTnMTcRPtWwgTKw';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 9, 
center: [-75.165222, 39.952583]
});

function loadMap(){
    map.on('load', function() {
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
});
}

     
    
