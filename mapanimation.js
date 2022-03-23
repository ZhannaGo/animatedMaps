
const busStops = [
  [-87.6456459, 41.8372106],
  [-87.646037, 41.8389588],
  [-87.6460782, 41.8398329],
  [-87.6462222, 41.8425242],
  [-87.6461914, 41.8491099],
  [-87.6460987, 41.8533647],
  [-87.6467986, 41.8556567]

];


mapboxgl.accessToken =
  'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';


let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-87.6456459, 41.8372106],
  zoom: 14,
});


let marker = new mapboxgl.Marker().setLngLat([-87.6456459, 41.8372106]).addTo(map);


let counter = 0;
function move() {
 

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}


if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}
