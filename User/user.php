<?php
 include('navbar.php'); 


if (!isset($_SESSION['username'])) {
    header("Location:http://localhost/login.php");
}

echo $_SESSION['userID'];
?>




This is a test