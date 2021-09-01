<?php

include('../dbconn.php');

session_start();
$userID = $_SESSION['userID'];


$data = array();


$sql = "SELECT userips.lat as ulat,userips.lng as ulng,serversip.lat as slat,serversip.lng as slng,serversip.count as c FROM userips INNER JOIN serversip ON userips.user_id=serversip.user_id ORDER BY serversip.lat,serversip.lng";
$result = $conn->query($sql);


if (mysqli_num_rows($result) > 0){
    while ($row = $result->fetch_assoc()){

$ulat = $row['ulat'];
$ulng = $row['ulng'];
$slat = $row['slat'];
$slng = $row['slng'];
$count = $row['c'];
$temp = array('ulat' => $ulat, 'ulng' => $ulng, 'slat' => $slat, 'slng' => $slng, 'count' => $count);

$data[]=$temp;

 }
}
header('Content-Type: application/json');
echo json_encode($data);