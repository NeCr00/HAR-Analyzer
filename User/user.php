<?php

session_start();

if (!isset($_SESSION['username'])) {
    header("Location:http://localhost/login.php");
}

echo $_SESSION['userID'];
?>


<a href="/logout.php"> Log Out</a>

This is a test