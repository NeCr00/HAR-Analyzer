<?php

include('../dbconn.php');
header('Content-Type: application/json');

$sql = 'SELECT DISTINCT isp FROM userips';
$isps = array();

$result = $conn->query($sql);

while($row = mysqli_fetch_assoc($result)){
    $isps [] = $row;
}

$sql = 'SELECT entry.content_typeResponse, entry.cache_controlResponse,  entry.last_modifiedResponse, entry.expiresResponse,userips.isp FROM entry
INNER JOIN userips  ON entry.user_id = userips.user_id
Where entry.last_modifiedResponse != "" AND entry.expiresResponse !=""';

$result = $conn->query($sql);
$entries = array();

while($row=mysqli_fetch_assoc($result)){
    $entries[] = $row;
}

$sql = 'SELECT DISTINCT content_typeResponse from entry Where entry.last_modifiedResponse != "" AND entry.expiresResponse !=""';
$result = $conn->query($sql);
$content_type = array();

while($row=mysqli_fetch_assoc($result)){
    $content_type[] = $row;
}


$data = array('Isps' => $isps, 'entries' =>$entries, "content_type"=>$content_type);
echo json_encode($data);
