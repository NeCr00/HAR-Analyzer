<?php

session_start();

if (isset($_SESSION['role']) == 'Admin') {
    header("Location:http://localhost/Admin/navbar.php");
}
else  if (isset($_SESSION['role'])){
  header("Location:http://localhost/User/profile.php");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <title>Signup</title>
    <link rel="stylesheet" href="Signup.css">
    <script defer src="Signup.js"></script>
</head>

<body>

    <main id="main-holder">




        <form id="login-form">

            <p class="titles">Username</p>
            <input type="text" name="username" class="signup-form-field" id="username" placeholder="">



            <p class=titles>Password</p>
            <input type="password" name="password" id="password1" class="signup-form-field" placeholder="">
            <p class="alert" id=alert1> </p>

            <p class=titles>Re-enter Password</p>
            <input type="password" id="password2" class="signup-form-field" placeholder="">

            <p class="alert" id="alert2"> </p>
            <p class="alert" id="message"></p>


            <button class="button-sign" id="submit">Sumbit</button>

            <div>
              <br>
                <a class=alert href="/login.php">Already Member? Login</a>

            </div>


        </form>
    </main>

    <div class="notes">
        <p class="warning"> Password Rules </p>
        <p class=rules> &bull; At least 8 characters</p>
        <p class=rules> &bull; A mixture of both uppercase and lowercase letters </p>
        <p class=rules> &bull; A mixture of letters and numbers </p>
        <p class=rules> &bull; Inclusion of at least one special character, e.g., ! @ # ? ] </p>
    </div>
</body>

</html>