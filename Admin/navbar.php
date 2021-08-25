<?php


session_start();

if (!isset($_SESSION['username'])) {
    header("Location:http://localhost/login.php");
}

if (isset($_SESSION['username']) && $_SESSION['role'] == 'User') {
    header("Location:http://localhost/User/profile.php");
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
            <div class=logo>

            </div>
            <ul>
                <li style="float:left;"><img class=logo src="../images/logo.png"></li>
                <li><a id="link" href="basic_info.php">Basic Information</a></li>
                <li><a id="link" href="response_analysis.php">Response Analysis</a></li>
                <li><a id="link" href="header_analysis.php">HTTP Header Analysis</a></li>
                <li><a id="link" href="data_vis.php">Data Visualization</a></li>
                <li class=logout><a id="link" href="/logout.php">Log Out <img  src="../images/logout.png"/></a></li>
            </ul>


        </div>
    </header>
</body>




</html>