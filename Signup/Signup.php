<?php

include '../dbconn.php';


$username = $_POST['username'];
$password = $_POST['password'];


$sql = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($sql);


if($result->num_rows > 0){
    echo "Username already exists";
}

else{
  $sql = "INSERT INTO users (username, password,type) VALUES ('$username', '$password','user')";

  if ($conn->query($sql) === TRUE) {
      echo "New user account created successfully";
    } else {
      echo "Server error, contact with admin";
    }
}


?>