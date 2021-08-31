<?php

include('../dbconn.php');

session_start();
$userID = $_SESSION['userID'];

$sql = "SELECT slat,slng,count(*) as c FROM serversip  WHERE user_id= '$userID' GROUP BY slat,slng";
$result = $conn->query($sql);



$data = array();
if (mysqli_num_rows($result) > 0){
    while ($row = $result->fetch_assoc()){

$lat = $row['slat'];
$lng = $row['slng'];
$count = $row['c'];
$temp = array( 'slat' => $lat, 'slng' => $lng,'c' => $count);

$data[]=$temp;

 }
}
header('Content-Type: application/json');
echo json_encode($data);