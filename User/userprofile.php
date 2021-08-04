<?php 
include "navbar.php"; 
include "dbconn.php";




//AUTO PREPEI NA ALLAKSEI OPSDIPOTE !!!!!!!! ///
$userID = $_SESSION['userID'];
$sql = "SELECT * FROM user WHERE user_id= '$userID' ";
$result = $conn->query($sql);
$row = mysqli_fetch_array($result);
$user = $row['username'];
$sql = ("SELECT COUNT(*) FROM user");
$result = $conn->query($sql);
$row = mysqli_fetch_array($result);
$eggrafes = $row['COUNT(*)'];
$sql = "SELECT * FROM entries where user_id = '$userID' ORDER BY Dates DESC ";

//AUTO PREPEI NA ALLAKSEI OPSDIPOTE !!!!!!!! ///




?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <title>Signup</title>
    <link rel="stylesheet" href="userprofile.css">

    <script defer src="credentials.js"></script>

</head>

<body>
    <div box>
        <div class="card-container">
            <img class="round" src="/images/user.png" alt="user" />
            <h3 class="titles">Username <?php echo $user;?></h3>

            <div class="box">
                <h3 class=titles> New Username </h3>
                <input type="text" name="username" class="signup-form-field" id="username" placeholder="">
                <button class="primary" id="submit_username">Sumbit</button>
            </div>


            <p class=titles>Password</p>
            <input type="password" name="password" id="password1" class="signup-form-field" placeholder="">
            <p class="alert" id=alert1> </p>

            <p class=titles>Re-enter Password</p>
            <input type="password" id="password2" class="signup-form-field" placeholder="">

            <p class="alert" id="alert2"> </p>
            <p class="alert" id="message"></p>


            <button class="button-sign" id="submit_password">Sumbit</button>

            
            <div class="skills">
                <h6>Στατιστικά δεδομένα</h6>
                <ul>
                    <li>Τελευταίο upload: 4/20/69</li>
                    <li>Πλήθος εγγραφών: <?php echo $eggrafes;?></li>

                </ul>
            </div>


            <div>
                <p class="alert" id="message"></p>
            </div>
        </div>
    </div>
</body>


</html>