<?php

include 'dbconn.php';


$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];


$sql = "SELECT * FROM user WHERE username = '$username'";
$result = $conn->query($sql);


if($result->num_rows > 0){
    echo "Username already exists";
    exit();
}


$sql = "SELECT * FROM user WHERE email = '$email'";
$result = $conn->query($sql);


if($result->num_rows > 0){
    echo "Email already exists";
    exit();
}


  $sql = "INSERT INTO user (username, password,role,email) VALUES ('$username', '$password','User','$email')";

  if ($conn->query($sql) === TRUE) {
      echo "New user account created successfully";
    } else {
      echo "Server error, contact with admin";
    }



?>