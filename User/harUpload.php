<?php

include('../dbconn.php');
session_start();
header('Content-Type: text/plain');

$data = ($_POST['data']); // Don't forget the encoding

$userID = $_SESSION['userID'];

$data =  json_decode($data);



$userIpInfo = $data->info->userIpInfo->IpInfo;
$serverIps = $data->serverIpsInfo;
$harEntries = $data->editedHar->HarInformation;
//add server ips  
foreach ($serverIps as $server) {
  $lat = $server->location->lat;
  $lng = $server->location->lng;
  $serverip = $server->ip;

  $sql = "INSERT INTO serversip VALUES (null,'$userID','$serverip','$lat','$lng') ";
  if ($conn->query($sql) === TRUE) {
    echo "New user account created successfully";
  } else {
    echo "Server error in serverips";
  }
}

foreach ($harEntries as $entry) {
  $req = $entry->requestInfo;
  $res = $entry->responseInfo;

  //entry info
  $startedDateTime =  $entry->info->startedDateTime;
  $serverIP = $entry->info->serverIP;
  $wait = $entry->info->timings;

  //request
  $domain = $req->domainReq;
  $method = $req->methodReq;
  $req_host = extractHeaders($req->requestHeader, 'host');
  $req_content = extractHeaders($req->requestHeader, 'content-type');
  $req_cache  = extractHeaders($req->requestHeader, 'cache-control');
  $req_pragma  = extractHeaders($req->requestHeader, 'pragma');

  //response
  $res_status = $res->statusRes;
  $res_statusText = $res->statusTextRes;
  $res_content = extractHeaders($res->responseHeader, 'content-type');
  $res_cache  = extractHeaders($res->responseHeader, 'cache-control');
  $res_expires = extractHeaders($res->responseHeader, 'expires');
  $res_age = extractHeaders($res->responseHeader, 'age');
  $res_last_modified = extractHeaders($res->responseHeader, 'last-modified');
  $res_pragma  = extractHeaders($res->responseHeader, 'pragma');
  $isp= $userIpInfo->isp;
  $isp = str_replace(array("'"), " ",$isp);

  $sql = "INSERT INTO entry (entryId,user_id,startedDateTime,serverIPAddress,wait,method,url,hostRequest,pragmaRequest,
  cache_controlRequest,status,statusText,cache_controlResponse,pragmaResponse,ageResponse,last_modifiedResponse,content_typeResponse,
  expiresResponse,isp) VALUES (null,'$userID','$startedDateTime','$serverip','$wait','$method','$domain','$req_host','$req_pragma','$req_cache','$res_status','$res_statusText',
'$res_cache','$res_pragma','$res_age','$res_last_modified', '$res_content','$res_expires','$isp')";

if ($conn->query($sql) === TRUE) {
  echo "New user account created successfully";
} else {
  echo("Error description: " . $conn -> error);
}
}


//insert user info
$userIp = $userIpInfo->ip;

$lat = $userIpInfo->lat;
$lng = $userIpInfo->lng;




$sql = "INSERT INTO userips Values (null,'$userID', '$userIp','$lat','$lng','$isp')";

if ($conn->query($sql) === TRUE) {
  echo "New user account created successfully";
 
} else {
  echo "Server error in userips";
  echo $conn->error;
}


function extractHeaders($data, $variable)
{
  if (array_key_exists($variable, (array)$data))
    return $data->{$variable};
  else
    return null;
}
