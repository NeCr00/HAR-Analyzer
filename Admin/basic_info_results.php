<?php

include('../dbconn.php');

//Το πλήθος των εγγεγραμμένων χρηστών
$sql = "SELECT * from user WHERE role = 'User' ";

$result = $conn->query($sql); 
$num_rows = mysqli_num_rows($result);

//echo $num_rows;

//Το πλήθος των εγγραφών στη βάση ανά τύπο (μέθοδο) αίτησης
$request_methods = ["GET", "POST", "DELETE","HEAD","PUT","CONNECT","OPTIONS","PATCH"];
$request_result= [];
foreach ($request_methods as $method){
    $sql = "SELECT method from entry WHERE method = '$method'";
    $result = $conn->query($sql);
     $request_result[] = array($method => mysqli_num_rows($result));
}

//print_r($request_result) 

//Το πλήθος των εγγραφών στη βάση ανά κωδικό (status) απόκρισης
$sql = "SELECT DISTINCT status FROM entry";
$result = $conn->query($sql);
$type = [];
while($row = mysqli_fetch_assoc($result)){
    foreach($row as $field => $value){
       
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
print_r($num_isp);

