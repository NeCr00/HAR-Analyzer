<?php

include "dbconn.php";

session_start();

if (isset($_SESSION['username'])){
    Header("Location:http://localhost/User/user.php");
    exit();
}

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username= '$username' ";
$result = $conn->query($sql);

$row = mysqli_fetch_array($result);

$user = $row['username'];
$pass = $row['password'];
$type = $row['type'];

if($password == $pass){
    $_SESSION['username'] = $user;
    $_SESSION['type'] = $type;
    echo 1;
    //Header("Location:http://localhost/User/user.php");
}

else{
   // "Invalid Credentials";
   echo 0;
}
    

exit();

?>