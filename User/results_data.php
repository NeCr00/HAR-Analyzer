<?php

include('../dbconn.php');

session_start();

$sql = "SELECT lat,lng FROM serversip WHERE userID= '1' ";
$result = $conn->query($sql);



$data = array();
if (mysqli_num_rows($result) > 0){
    while ($row = $result->fetch_assoc()){

$lat = $row['lat'];
$lng = $row['lng'];
$temp = array( 'lat' => $lat, 'lng' => $lng);

$data[]=$temp;

 }
}
header('Content-Type: application/json');
echo json_encode($data);