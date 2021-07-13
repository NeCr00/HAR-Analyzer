<?php

session_start();

if (!isset($_SESSION['username'])) {
    header("Location:http://localhost/login.php");
}

echo 11111111111111111111111111;
?>


<a href="/logout.php"> Log Out</a>