<?php
include('navbar.php');
?>
<!DOCTYPE html>
<html>

<head>



    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />
    <link rel="stylesheet" href="data_vis.css">

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />

    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>

    <script src="data_vis.js"></script>
    <style> </style>
</head>

<body>

    <div>
        <h3> Map which shows the HTTP requests were made from user location to server location</h3>
        <h4> &bull; Markers are Users Location</h4>
        <h4> &bull; Red dot are Servers Location</h4>
        <div id="mapid" style="width: 1000px; height: 700px; margin: 0 auto;"></div>
    </div>





</body>

</html>