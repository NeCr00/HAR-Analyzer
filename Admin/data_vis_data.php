<?php

include('../dbconn.php');

session_start();
$userID = $_SESSION['userID'];

$sql = "SELECT userips.ulat,userips.ulng,serversip.slat,serversip.slng,count(*) as c FROM userips LEFT JOIN serversip ON userips.user_id=serversip.user_id GROUP BY serversip.slat,serversip.slng AND userips.ulat,userips.ulng ORDER BY userips.ulat,userips.ulng DESC";
$result = $conn->query($sql);



$data = array();
if (mysqli_num_rows($result) > 0){
    while ($row = $result->fetch_assoc()){

$ulat = $row['ulat'];
$ulng = $row['ulng'];
$slat = $row['slat'];
$slng = $row['slng'];
$count = $row['c'];
$temp = array( 'ulat' => $ulat, 'ulng' => $ulng,'slat' => $slat, 'slng' => $slng,'c' => $count);

$data[]=$temp;

 }
}
header('Content-Type: application/json');
echo json_encode($data);