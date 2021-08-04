<?php
 session_start();
 include('dbconn.php'); 

 
  
  $userID = $_SESSION['userID'];
  $sql = "SELECT * FROM user WHERE user_id= '$userID' ";
  $result = $conn->query($sql);
  $row = mysqli_fetch_array($result);
  $user = $row['username'];

  $username = $_POST['username'];
  
 
  
  $sql = "SELECT username FROM web.user WHERE username ='$username'";
  $result = $conn->query($sql);


  if($username==$user){
    echo "Username cannot be the same as before";
  }
  elseif ($username=="") {
    echo "Username cannot be blank";
  }
  elseif ($result->num_rows>0) {
    echo "Username already exists";
  }
  else{
    $sql = "UPDATE user SET username = '$username' WHERE user_id='$userID';";
    if ($conn->query($sql) === TRUE) {
      echo "Username Updated successfully";
    } 
    else {
      echo "Server error, contact with admin";
    }
  }
  
  



?>
