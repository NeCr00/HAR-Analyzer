var lat;
var lng;
var i=0;
var myData = {
  max: 10,
  data:null
};
function getLocationData() {
  return $.ajax({
    method: "GET",
    url: "results_data.php",
    success: function (data) {
      console.log(data);
      lng = data.lng;
      lat = data.lat;

    }
  });
}

$.when(getLocationData()).then(function success(data) {

     myData={data:data};
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
  zoom: 3,
  layers: [baseLayer, heatmapLayer]
})

heatmapLayer.setData(myData);
heatmapLayer.addTo(map);
layer = heatmapLayer;


});

