<?php
 session_start();
 include('../dbconn.php'); 

 
  
  $userID = $_SESSION['userID'];
  $sql = "SELECT * FROM user WHERE user_id= '$userID' ";
  $result = $conn->query($sql);
  $row = mysqli_fetch_array($result);
  $user = $row['username'];

  
  $password = $_POST['password'];
 




    if ($password != 0){
    $sql = "UPDATE user SET password = '$password' WHERE user_id='$userID';";
        if ($conn->query($sql) === TRUE) {
        echo "Password Updated successfully";
        } 
        else {
        echo "Server error, contact with admin";
        }
    }
?>
