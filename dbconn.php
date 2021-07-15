<?php

$servername = "localhost";
$username = "root";
$password = "";
$mydb = "web";
$port = "3306";

// Create connection
$conn = new mysqli($servername, $username, $password, $mydb, $port);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>