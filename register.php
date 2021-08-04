<?php

include 'dbconn.php';


$username = $_POST['username'];
$password = $_POST['password'];


$sql = "SELECT * FROM user WHERE username = '$username'";
$result = $conn->query($sql);


if($result->num_rows > 0){
    echo "Username already exists";
}

else{
  $sql = "INSERT INTO user (username, password,role) VALUES ('$username', '$password','User')";

  if ($conn->query($sql) === TRUE) {
      echo "New user account created successfully";
    } else {
      echo "Server error, contact with admin";
    }
}


?>