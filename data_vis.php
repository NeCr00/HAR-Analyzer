<?php include('navbar.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <style>
        #map { width: 1000px; height: 1000px; margin: 0 auto;}
        body{margin: 0 auto; text-align: center; background-color: #e8f5ff;}
    </style>
  
</head>

<body>

<script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-Ra6KoVqP9f4TCtAwyyZitDGF-rq25is&callback=initMap">
</script>
<script src="data_vis.js"></script>
   <h2>Data Map</h2>
    <div id="map">
    </div>
</body>