
var myData = {
  max: 8,
  data : [{lat: 24.6408, lng:46.7728, count: 3},{lat: 50.75, lng:-1.55, count: 1}]
};

console.log(myData);

var baseLayer = L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a>'
  }
)


var cfg = {
  "radius": 40,
  "useLocalExtrema": true,
  latField: 'lat',
  lngField: 'lng',
  valueField: 'count'
};
var heatmapLayer = new HeatmapOverlay(cfg);


var map = new L.Map('map', {
  center: new L.LatLng(39.275, -76.613),
  zoom: 15,
  layers: [baseLayer, heatmapLayer]
})

heatmapLayer.setData(myData);
heatmapLayer.addTo(map);
layer=heatmapLayer;