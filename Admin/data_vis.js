$(document).ready(function () {
  var lat;
  var lng;
  var i = 0;
  var myData = {
    data: null,
  };
  function getLocationData() {
    return $.ajax({
      method: "GET",
      url: "data_vis_data.php",
      success: function (data) {
        console.log(data);
      },
    });
  }
  
  $.when(getLocationData()).then(function success(data) {
    myData = { data: data };
    console.log(myData);
   
    var ltlng = [];
    var ultlng = [];
    var count = [];

    //request
    for (var i = 0; i < data.length; i++) {
      ultlng.push(new google.maps.LatLng(data[i].ulat, data[i].ulng));
      ltlng.push(new google.maps.LatLng(data[i].slat, data[i].slng));

      count.push(data[i].count);
      console.log(count[i]);
    }

    //normalize
    (ratio = Math.max.apply(Math, count) / 100), (l = count.length), i;

    for (i = 0; i < l; i++) {
      count[i] = Math.round(count[i] / ratio);
    }

    var myOptions = {
      zoom: 9,
      center: ultlng[0],
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    for (var i = 0; i < ltlng.length; i++) {
      var marker = new google.maps.Marker({
        // position: new google.maps.LatLng(-34.397, 150.644),
        position: ltlng[i],
        map: map,
        title: "reguest ip",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
         
        }
      });
    }

    for (var i = 0; i < ultlng.length; i++) {
      var marker = new google.maps.Marker({
        // position: new google.maps.LatLng(-34.397, 150.644),
        position: ultlng[i],
        map: map,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
         
        },
        title: "user ip",
      });
    }
    //***********ROUTING****************//

    //Intialize the Path Array
    var path = new google.maps.MVCArray();

    //Intialize the Direction Service
    var service = new google.maps.DirectionsService();

    for (var i = 0; i < data.length; i++) {
      var flightPath = new google.maps.Polyline({
        path: [ultlng[i], ltlng[i]],
        geodesic: true,
        strokeColor: "yellow",
        strokeOpacity: 1.0,
        strokeWeight: count[i],
      });
      console.log(count[i]);
      flightPath.setMap(map);
    }
  });
});
