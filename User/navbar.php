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

    <title>Forum</title>
    <link rel="stylesheet" href="navbar.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

</header>

<body class="news">
    <header>
        <div class="nav">
            <ul>
                <li ><a id="link"  href="fileUpload.php">Har Upload</a></li>
                <li ><a id="link" href="userprofile.php">Profile Management</a></li>
                
                <li><a id="link" href="results.php">Data Visualization</a></li>
                <li class="logout"><a id="link" href="/logout.php">Log Out</a></li>
            </ul>


        </div>
    </header>
</body>




</html>
