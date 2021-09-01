<?php

include('../dbconn.php');

session_start();
$userID = $_SESSION['userID'];

$sql = "SELECT lat,lng,count as c FROM serversip  WHERE user_id= '$userID' GROUP BY lat,lng";
$result = $conn->query($sql);



$data = array();
if (mysqli_num_rows($result) > 0){
    while ($row = $result->fetch_assoc()){

$lat = $row['lat'];
$lng = $row['lng'];
$count = $row['c'];
$temp = array( 'lat' => $lat, 'lng' => $lng,'c' => $count);

$data[]=$temp;

 }
}
header('Content-Type: application/json');
echo json_encode($data);