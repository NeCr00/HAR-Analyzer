<?php

include('../dbconn.php');
header('Content-Type: application/json');

$sql = 'SELECT wait, startedDateTime, content_typeResponse, method, isp FROM entry WHERE user_id=1;';
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

$data = array(
    'entries' => $entries,
    'wait' => $wait,
    'Datetime' => $Datetime,
    'content_typeResponse' => $content_type,
    'method' => $method,
    'isp' => $isp
 );
echo json_encode($data);
