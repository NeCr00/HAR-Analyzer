<?php

session_start();

if (!isset($_SESSION['username'])) {
    header("Location:http://localhost/login.php");
}

else{
    header("Location:http://localhost/User/user.php");
}

?>