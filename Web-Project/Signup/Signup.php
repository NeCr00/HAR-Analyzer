<?php

include '../dbconn.php';


$username = $_POST['username'];
$password = $_POST['password'];

$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }


?>