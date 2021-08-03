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
</head>

<body>

    <div class="container">

    <table id="customers">
  <tr>
    <th>Informations</th>
    <th>Resuts</th>
    
  </tr>
  <tr>
    <td>Number of Registered users</td>
    <td id="num_users">120</td>
   
  </tr>
  <tr>
    <td>Number of Entries by Type (Method) of Application</td>
    <td id="methods">GET: 120  POST: 130  DELETE: 20  HEAD: 0  OPTIONS: 0</td>
    
  </tr>
  <tr>
    <td>Number of Entries per Response Code (Status)</td>
    <td id = "status"></td>
   
  </tr>
  <tr>
    <td>Number of Unique Domains</td>
    <td id  = "domains"> 10232</td> </td>
   
  </tr>

  <tr>
    <td>The Average Age of the Web Objects at the Time they were Retrieved, per CONTENT-TYPE</td>
    <td id  = "age"> 10232</td> </td>
   
  </tr>

</table>


    </div>
   
</body>


</html>