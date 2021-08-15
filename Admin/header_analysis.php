<?php
include('navbar.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <title>Har Analyzer</title>
    <link rel="stylesheet" href="header_analysis.css">
    <script defer src="header_analysis.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src='https://cdn.plot.ly/plotly-2.3.1.min.js'></script>
</head>

<body>


    <div class=sidenav>

        <div class=filter>
            <h1>Filter</h1>




        </div>

        <div class="contentSelector">
            <h2> Choose Content-Type</h2>
            <div id=isp class=contentType>

            </div>


        </div>

        <div class="contentSelector">
            <h2> Choose Content-Type</h2>
            <div id=contentType class=contentType>

            </div>


        </div>


        <div class=button>
            <button class=but id=button> Apply</button>
        </div>

    </div>
    <div class=container>

        <div class=chart>
            <div id='myDiv'>
                <!-- Plotly chart will be drawn inside this DIV -->
            </div>

        </div>

    </div>
</body>


</html>