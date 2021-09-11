<?php


session_start();

if (!isset($_SESSION['username'])) {
    header("Location:http://localhost/login.php");
}

if (isset($_SESSION['username']) && $_SESSION['role'] == 'Admin') {
    header("Location:http://localhost/Admin/basic_info.php");
}
?>

<!DOCTYPE html>
<html>
<header>

    <title>Har Analyzer</title>
    <link rel="stylesheet" href="navbar.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</header>

<body class="news">
    <header>
        <div class="nav">
            <div class=logo>

            </div>
            <ul>
                <li style="float:left;"><img class=logo src="../images/logo.png"></li>
                <li><a id="link" href="fileUpload.php">Har Upload</a></li>
                <li><a id="link" href="profile.php">Profile Management</a></li>

                <li><a id="link" href="results.php">Data Visualization</a></li>
                <li class=logout><a id="link" href="/logout.php">Log Out <img  src="../images/logout.png"/></a></li>
                
            </ul>


        </div>
    </header>
</body>




</html>