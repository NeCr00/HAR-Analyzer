<?php


session_start();

if (!isset($_SESSION['username'])) {
    header("Location:http://localhost/login.php");
}

?>

<!DOCTYPE html>
<html>
<header>

    <title>Forum</title>
    <link rel="stylesheet" href="navbar.css">

</header>

<body class="body">
    <div class=navbar>
        <ul class=ulist>
            
            <li class=list><a href="fileUpload.php">Upload HAR File</a></li>
            <li  class=list><a href="profile.php">Profile</a></li>
            <li  class=list><a href="contact.asp">Results</a></li>
            <li  class=list><a href="/logout.php"> Log Out</a></li>
        </ul>

    </div>

</body>




</html>