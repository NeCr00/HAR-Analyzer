<?php
session_start();
include('../dbconn.php');

$userID = $_SESSION['userID'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

$type = $_POST['type'];

    $sql = "SELECT * FROM user WHERE user_id= '$userID' ";
    $result = $conn->query($sql);
    $row = mysqli_fetch_array($result);


    $user_username = $row['username'];
    $user_password = $row['password'];

    $sql = "SELECT username FROM user WHERE username= '$username' ";
    $result = $conn->query($sql);
    $row = mysqli_fetch_array($result);

    $searched_username = $row["username"];

    if ($type == 'username') {

        $username = $_POST['username'];

        if ($username == $user_username) {
            echo "Username cannot be the same as before !";
            exit();
        } else if ($searched_username) {

            echo "Username Already Exists !";
            exit();
        } else {
            $sql = "UPDATE user SET username = '$username' WHERE user_id='$userID';";
            if ($conn->query($sql) === TRUE) {
                echo "Username Updated successfully !";
                exit();
            } else {
                echo "Server error, contact with admin !";
                exit();
            }
        }
    } else {
        $password = $_POST['password'];
        if ($password != $user_password) {
            $sql = "UPDATE user SET password = '$password' WHERE user_id='$userID';";
            if ($conn->query($sql) === TRUE) {
                echo "Password Updated successfully";
                exit();
            } else {
                echo "Server error, contact with admin";
                exit();
            }
        } else {
            echo "Your new Password must be different from the old one !";
            exit();
        }
    }
}


else{
    $sql = "SELECT COUNT(entryId) FROM entry WHERE user_id = '$userID'";
    $result = $conn->query($sql);
    $row = mysqli_fetch_array($result);

    $num_entries = $row['COUNT(entryId)'];

    $sql = "SELECT uploadDate FROM entry WHERE user_id = '$userID'  ORDER BY uploadDate DESC";
    $result = $conn->query($sql);
    $row = mysqli_fetch_array($result);

    $last_date = $row['uploadDate'];

    $sql = "SELECT username,email FROM user WHERE user_id = '$userID'";
    $result = $conn->query($sql);
    $row = mysqli_fetch_array($result);
    
    $username = $row['username'];
    $email = $row['email'];

    header('Content-Type: application/json');

    echo json_encode(Array("num_entries"=>$num_entries,'last_date'=>$last_date,"email"=>$email,"username"=>$username));
    exit();
}