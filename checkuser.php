<?php

include "dbconn.php";

session_start();



$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM user WHERE username= '$username' ";
$result = $conn->query($sql);

$row = mysqli_fetch_array($result);

$userID = $row['user_id'];
$user = $row['username'];
$pass = $row['password'];
$role = $row['role'];

if($password == $pass){
    $_SESSION['username'] = $user;
    $_SESSION['userID'] = $userID;
    $_SESSION['role'] = $role;
    echo 1;
    //Header("Location:http://localhost/User/user.php");
}

else{
   // "Invalid Credentials";
   echo 0;
}
    

exit();

?>