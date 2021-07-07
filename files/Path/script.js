// initialize the map on the "map" div with a given center and zoom
var map = new L.Map('map', {
  zoom: 10,
  minZoom: 3,
});

// create a new tile layer
var tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
layer = new L.TileLayer(tileUrl,
{
    attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
    maxZoom: 5});

// add the layer to the map
map.addLayer(layer);

var londonChicagoZurichGenevaZurich = [[51.507222, -0.1275], [41.8781, -87.6298],[47.3769, 8.5417],
[46.2044, 6.1432], [47.3769, 8.5417],];

map.fitBounds(londonChicagoZurichGenevaZurich);

//========================================================================
var marker1 = L.Marker.movingMarker(londonChicagoZurichGenevaZurich,
    [5000, 5000, 2000, 2000]).addTo(map);
marker1.once('click', function () {
    marker1.start();
    marker1.closePopup();
    marker1.unbindPopup();
    marker1.on('click', function() {
        if (marker1.isRunning()) {
            marker1.pause();
        } else {
            marker1.start();
        }
    });
    setTimeout(function() {
        marker1.bindPopup('<b>On My Way !</b>').closePopup();
    }, 1000);
});

marker1.bindPopup('<b>Click Me and The Journey Begins !</b>', {closeOnClick: false});
marker1.openPopup();

marker1.addStation(1, 1000);
marker1.addStation(2, 1000);
marker1.addStation(3, 1000);
marker1.addStation(4, 1000);

marker1.on('end', function() {
    marker1.bindPopup('<b>Welcome to Zurich!</b>', {closeOnClick: false})
    .openPopup();
});
