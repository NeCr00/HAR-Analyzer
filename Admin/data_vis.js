$(document).ready(function () {
  var mymap = L.map("mapid").setView([0, 0], 2);

  L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a>',
  }).addTo(mymap);

  $.when(getLocationData()).then(function success(data) {
    
    var usersLocation = getUserLocation(data); //get user location data
    console.log(usersLocation.data);
    var maxCount = getMaxCount(data);

    usersLocation.data.forEach(function (user) {
      L.marker([user.lat, user.lng]).addTo(mymap);
    });

    data.forEach(function (server) {
      L.circle([server.slat, server.slng], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.8,
        radius: 1500,
      }).addTo(mymap);
    });

    data.forEach(function (data) {
        var polyline = new L.Polyline([[data.ulat, data.ulng], [data.slat,data.slng]], {
            weight: getWeight(data.count,maxCount),
        }).addTo(mymap);
      });
   
    
  });


});

function getLocationData() {
  return $.ajax({
    method: "GET",
    url: "data_vis_data.php",
    success: function (data) {
      console.log(data);
    },
  });
}

function getUserLocation(data) {
  var ulat, ulng;

  var usersLocation = { data: Array() };

  data.forEach(function (entry) {
    if (entry.ulat != ulat && entry.ulng != ulng) {
      ulat = entry.ulat;
      ulng = entry.ulng;

      usersLocation["data"].push({ lat: ulat, lng: ulng });
    }
  });

  return usersLocation;
}

function getWeight(count,maxCount) {
    maxWeight = 3;
    rate = count / maxCount;
    weight = maxWeight * rate
    if (weight < 0.2) weight = 0.2;

    return weight;
}

function getMaxCount (data) {
    
    counts = []
    data.map( value=> counts.push(value.count) );
    
    maxCount =Math.max(...counts)
    console.log(counts)
    console.log(maxCount)
    return maxCount
}