<?php

include('../dbconn.php');

//Το πλήθος των εγγεγραμμένων χρηστών
$sql = "SELECT * from user WHERE role = 'User' ";

$result = $conn->query($sql); 
$num_users = mysqli_num_rows($result);

//echo $num_rows;

//Το πλήθος των εγγραφών στη βάση ανά τύπο (μέθοδο) αίτησης
$request_methods = ["GET", "POST", "DELETE","HEAD","PUT","CONNECT","OPTIONS","PATCH"];
$request_result= [];
foreach ($request_methods as $method){
    $sql = "SELECT method from entry WHERE method = '$method'";
    $result = $conn->query($sql);
     $request_result[] = array($method => mysqli_num_rows($result));
}

//print_r($request_result) ;

//Το πλήθος των εγγραφών στη βάση ανά κωδικό (status) απόκρισης
$sql = "SELECT DISTINCT status FROM entry";
$result = $conn->query($sql);
$type = [];
while($row = mysqli_fetch_assoc($result)){
    foreach($row as $field => $value){
        if($value!=0)
        $type[] =($value);
        
    }
}
$status_data = [];

foreach($type as $status){
    $sql  = "SELECT status FROM entry WHERE status = '$status'";
    $result = mysqli_num_rows($conn->query($sql));
  
    $status_data[] = array($status =>$result);
}
//print_r($status_data);


//Το πλήθος των μοναδικών domains που υπάρχουν στη βάση
$sql = "SELECT DISTINCT url FROM entry";
$result = $conn->query($sql);
$num_domain  = mysqli_num_rows($result) ;

//print_r($num_domain);

//Το πλήθος των μοναδικών παρόχων συνδεσιμότητας που υπάρχουν στη βάση
$sql = "SELECT DISTINCT isp FROM userips";
$result = $conn->query($sql);
$num_isp  = mysqli_num_rows($result) ;
//print_r($num_isp);


//Τη μέση ηλικία των ιστοαντικειμένων τη στιγμή που ανακτήθηκαν, ανά CONTENT-TYPE
$sql = "SELECT DISTINCT content_typeResponse FROM entry WHERE content_typeResponse !=' '";
$result = $conn->query($sql);
$contentType = [];

while($row = mysqli_fetch_assoc($result)) {
    foreach($row as $key => $value) {
        $contentType[] = $value;
    }
}

$contentResults = [];
foreach ($contentType as $type){
    $sql = "SELECT ageResponse FROM entry WHERE content_typeResponse = '$type' AND ageResponse !=' '";
    $result = $conn->query($sql);
    $num =  mysqli_num_rows($result);

    $sql = "SELECT SUM(ageResponse) FROM entry WHERE content_typeResponse = '$type' AND ageResponse !=' '";
    $result = $conn->query($sql);
    $row = mysqli_fetch_array($result);
    $sum_age = $row['SUM(ageResponse)'];
    if($num)
    $contentResults[] = array($type=> round($sum_age/$num,2));
    else
    $contentResults[] = array($type=> null);
}

//print_r($contentResults);

$data = array('numUsers'=>$num_users,'numPerRequest'=>$request_result,'numPerStatus'=>$status_data,'numDomains'=>$num_domain,
'numIsp'=>$num_isp,'numPerContent'=>$contentResults);

//$data = json_encode($data);

header('Content-Type: application/json');
echo json_encode($data);
