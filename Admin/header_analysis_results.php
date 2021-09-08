<?php

include('../dbconn.php');
header('Content-Type: application/json');

$sql = 'SELECT DISTINCT isp FROM userips';
$isps = array();

$result = $conn->query($sql);

while($row = mysqli_fetch_assoc($result)){
    $isps [] = $row;
}

$sql = 'SELECT entry.content_typeResponse, entry.cache_controlResponse,  entry.last_modifiedResponse, entry.expiresResponse,entry.isp FROM entry
Where entry.last_modifiedResponse IS NOT NULL AND entry.expiresResponse IS NOT NULL AND entry.content_typeResponse IS NOT NULL';

$result = $conn->query($sql);
$entries = array();

while($row=mysqli_fetch_assoc($result)){
    $entries[] = $row;
}

$sql = 'SELECT DISTINCT content_typeResponse from entry  WHERE content_typeResponse  IS NOT NULL';
$result = $conn->query($sql);
$content_type = array();

while($row=mysqli_fetch_assoc($result)){
    $content_type[] = $row;
}


$sql = 'SELECT  cache_controlRequest,cache_controlResponse,content_typeResponse, isp FROM entry WHERE content_typeResponse  IS NOT NULL ';
$result = $conn->query($sql);
$cache_entries = array();

while($row=mysqli_fetch_assoc($result)){
    $cache_entries[] = $row;
}

$sql = 'SELECT cache_controlRequest from entry WHERE  cache_controlRequest LIKE "%max-stale%"';
$result = $conn->query($sql);

$num_stales = mysqli_num_rows($result);

$data = array('Isps' => $isps, 'entries' =>$entries, "content_type"=>$content_type, "cache_entries" => $cache_entries,"num_max_stales"=>$num_stales);
echo json_encode($data);
