<?php 
include('navbar.php'); 

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <title>Upload Har File</title>
    <link rel="stylesheet" href="profile.css">
    <script defer src="./Profile.js"></script>
</head>

<body>

    <div class="card-container">
        <img class="round" src="/images/user.png" alt="user" />
        <h3> Hellow <?php echo $_SESSION['username'];?> </h3>

        <div class="box">


            <div class="box">
                <p class=titles>New Username </p>
                <input type="text" name="username" id="username" class="signup-form-field" placeholder="username">
               <!-- <p class="alert" id=alert1> </p>
-->
                <p class=titles>Re-enter Username</p>
               <!-- <input type="text" id="username2" class="signup-form-field" placeholder="username">
                <p class="alert" id="alert2"> </p>
                <p class="alert" id="message"></p>
-->

                <button class="primary">
                    Change Username
                </button>
            </div>

            <div class="box">
                <p class=titles>New Password</p>
                <input type="password" name="password" id="password1" class="signup-form-field" placeholder="password">
                <p class="alert" id=alert1> </p>

                <p class=titles>Re-enter Password</p>
                <input type="password" id="password2" class="signup-form-field" placeholder="password">
                <p class="alert" id="alert2"> </p>
                <p class="alert" id="message"></p>

                <button class="primary">
                    Change Password
                </button>
            </div>
        </div>

        <div class="skills">
            <h6>Στατιστικά δεδομένα</h6>
            <ul>
                <li>Τελευταίο upload: 4/20/69</li>
                <li>Πλήθος εγγραφών: 666</li>
            </ul>
        </div>

    </div>

    <footer>
        <p>
            Created by
            <a target="_blank" href="">Ntiri</a>
            - Read how I became your daddy
            <a target="_blank" href="">here</a>
        </p>
    </footer>

</html>