<?php
include('navbar.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <title>Upload Har File</title>
  <link rel="stylesheet" href="basic_info.css">
  <script defer src="basic_info.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>

  <div class="info_container">

    <table id="customers">
      <tr>
        <th>Informations</th>
        <th>Resuts</th>

      </tr>
      <tr>
        <td>Number of Registered users</td>
        <td id="num_users"></td>

      </tr>
      <tr>
        <td>Number of Entries by Type (Method) of Application</td>
        <td id="methods"></td>

      </tr>
      <tr>
        <td>Number of Entries per Response Code (Status)</td>
        <td id="status"></td>

      </tr>
      <tr>
        <td>Number of Unique Domains</td>
        <td id="domains"> </td>
        </td>

      </tr>

      <tr>
        <td>The Average Age of the Web Objects at the Time they were Retrieved, per CONTENT-TYPE</td>
        <td id="age"> </td>
        </td>

      </tr>

    </table>


  </div>

  <div class="chart_container">

  <div class = chartA>
      <h2> Average Age of the Web Objects per CONTENT-TYPE</h2>
      <canvas id="chartAge" ></canvas>
    </div>

    <div class = chart>
      <h2>Number of Entries by Type</h2>
      <canvas id="myChart" ></canvas>
    </div>

  
    <div class = chart>
      <h2>Number of Entries per Response Code</h2>
      <canvas id="chartCode" ></canvas>
    </div>


   

  </div>

</body>


</html>