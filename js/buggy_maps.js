let map = L.map("mapid", {
    center: [40.440262, -79.945116], // latitude, longitude in decimal degrees (find it on Google Maps with a right click!)
    zoom: 16, // can be 0-22, higher is closer
    scrollWheelZoom: false // don't zoom the map on scroll
});
// add the basemap tiles
L.tileLayer(
    "https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}@2x.png" // stamen toner tiles
).addTo(map);


// create a red polyline from an array of LatLng points
var latlngs = [
    [[40.441732, -79.941554], [40.440164, -79.942305]],
    [[40.440164, -79.942305], [40.440139, -79.942970], [40.439649, -79.943582]],
    [[40.439649, -79.943582], [40.438914, -79.944505], [40.438685, -79.945696], [40.438771, -79.946288], [40.438865, -79.946415]], 
    [[40.438865, -79.946415], [40.439706, -79.946823], [40.440514, -79.947832]], 
    [[40.440514, -79.947832], [40.440824, -79.948089], [40.441469, -79.947327]], 
    [[40.441469, -79.947327], [40.441502, -79.946919]], 
    [[40.441502, -79.946919], [40.440584, -79.942694]]
];
var polyline = L.polyline(latlngs, { color: 'green', smoothFactor:5}).addTo(map);
// zoom the map to the polyline
map.fitBounds(polyline.getBounds());