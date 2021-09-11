<?php

include('../dbconn.php');
header('Content-Type: application/json');


$sql = 'SELECT wait, startedDateTime, content_typeResponse, method, isp FROM entry ;';
    $result = $conn->query($sql);
    $entries = array();

    while($row=mysqli_fetch_assoc($result)){
        $entries[] = $row;
    }

$sql = 'SELECT  wait from entry';
    $result = $conn->query($sql);
    $wait = array();

    while($row=mysqli_fetch_assoc($result)){
        $wait[] = $row;
    }

    $sql = 'SELECT  DISTINCT startedDateTime from entry';
    $result = $conn->query($sql);
    $Datetime = array();

    while($row=mysqli_fetch_assoc($result)){
        $Datetime[] = $row;
    }

    $sql = 'SELECT DISTINCT content_typeResponse from entry  WHERE content_typeResponse !=""';
    $result = $conn->query($sql);
    $content_type = array();
    
    while($row=mysqli_fetch_assoc($result)){
        $content_type[] = $row;
    }

$sql = 'SELECT DISTINCT method from entry';
    $result = $conn->query($sql);
    $method = array();

    while($row=mysqli_fetch_assoc($result)){
        $method[] = $row;
    }

$sql = 'SELECT DISTINCT isp from entry';
    $result = $conn->query($sql);
    $isp = array();

    while($row=mysqli_fetch_assoc($result)){
        $isp[] = $row;
    }
$sql = 'SELECT wait from entry where method = "GET"';
$result = $conn->query($sql);
$method_filtered = array();
while($row=mysqli_fetch_assoc($result)){
        $method_filtered = $row;
    }
$sql = 'SELECT wait from entry where isp = "Evergy S.A."';
$result = $conn->query($sql);
$isp_filtered = array();
while($row=mysqli_fetch_assoc($result)){
        $isp_filtered = $row;
    }

$sql = 'SELECT wait from entry where content_typeResponse = "text/html"';
$result = $conn->query($sql);
$content_typeResponse_filtered = array();
while($row=mysqli_fetch_assoc($result)){
            $content_typeResponse_filtered = $row;
    }
$data = array(
    'entries' => $entries,
    'wait' => $wait,
    'Datetime' => $Datetime,
    'content_typeResponse' => $content_type,
    'method' => $method,
    'isp' => $isp,
    'method_filtered' => $method_filtered,
    'isp_filtered' => $isp_filtered,
    'content_typeResponse_filtered' => $content_typeResponse_filtered
 );

 echo json_encode($data);







/*
$sql = 'SELECT COUNT(wait) from entry where content_typeResponse = $content_typeResponse';
$result = $conn->query($sql);
$content_type_filtered = array();
while($row=mysqli_fetch_assoc($result)){
        $content_type_filtered [] = $row;
    }

*/


/*
$sql = 'SELECT COUNT(wait) from entry where isp = $isp';
$result = $conn->query($sql);
$isp_filtered = array();
while($row=mysqli_fetch_assoc($result)){
        $isp_filtered [] = $row;
    }
 

*/

/*
echo json_encode($method_filtered);
echo json_encode($isp_filtered);
echo json_encode($content_typeResponse_filtered);

    
   // print_r($content_type_filtered  );
    //print_r($isp_filtered  );
*/

    