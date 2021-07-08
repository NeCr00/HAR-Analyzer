<?php

include "dbconn.php";

session_start();

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username=:username";
$result = $conn->query($sql);

if($result > 0){
    echo "Success";
}
else
    echo "Fail";

exit();

?>