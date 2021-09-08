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
    <link rel="stylesheet" href="response_analysis.css">
    <script defer src="response_analysis.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src='https://cdn.plot.ly/plotly-2.3.1.min.js'></script>
    <script src="https://d3js.org/d3.v4.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

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

    <div class=container>
        <h2 class=chart-title>Histogram of ntiri distribution of web objects in response, by CONTENT-TYPE</h2>
        <div id="chart_div" style="width: 1000px; height: 350px;" class="chart"></div>

        <div class="table_container">
           
            </table>


        </div>

        <div class="table_container">
            <h2 class=chart-title>Percentage of cacheability directives</h2>
            <table id="customers">

                <tr>
                    <th>Max-Stale and Min-Fresh Information</th>
                    <th>Resuts</th>

                </tr>
                <tr>
                    <td>Percentage of Public</td>
                    <td id="public"></td>

                </tr>
                <tr>
                <td>Percentage of Private</td>
                    <td id="private"></td>

                </tr>

                <td>Percentage of No-Cache</td>
                    <td id="no-cache"></td>

                </tr>

                <td>Percentage of No-Store</td>
                    <td id="no-store"></td>

                </tr>
            </table>


        </div>
    </div>


</body>


</html>