<?php

session_start();

if (!isset($_SESSION['username'])) {
    header("Location:http://localhost/login.php");
}

else if (isset($_SESSION['role']) == 'User'){
    header("Location:http://localhost/User/user.php");
}

else if (isset($_SESSION['role']) == 'Admin'){
    header("Location:http://localhost/Admin/basic_info.php"); 
}

?>