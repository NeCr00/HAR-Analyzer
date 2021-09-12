<?php
include('navbar.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <title>Har Analyzer</title>
    <link rel="stylesheet" href="response_analysis.css">
    <script defer src="response_analysis.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src='https://cdn.plot.ly/plotly-2.3.1.min.js'></script>
    <script src="https://d3js.org/d3.v4.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/luxon"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-luxon"></script>



</head>

<body>


    <div class=sidenav>

        <div class=filter>
            <h1>Filter</h1>
            <div class="contentSelector">
                <h2> Choose Content Type</h2>
                <div id=content_typeResponse class=contentType></div>
            </div>
            <div class="contentSelector">
                <h2> Choose Datetime</h2>
                <div id=Datetime class=contentType></div>
            </div>
            <div class="contentSelector">
                <h2> Choose Method</h2>
                <div id=method class=contentType></div>
            </div>
            <div class="contentSelector">
                <h2> Choose Isp</h2>
                <div id=isp class=contentType></div>
            </div>


        </div>

        <div class=button>
            <button id=button class=but> Apply</button>
        </div>

    </div>
    <div class = main-container>
        <h2 class=chart-title> Analysis of response times to requests </h2>
        <div class=container>

            <div class=chart>
                <canvas id="Chart"></canvas>
            </div>
        </div>
    </div>







</body>


</html>