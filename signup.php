<?php

session_start();

if (isset($_SESSION['role']) == 'Admin') {
  header("Location:http://localhost/Admin/navbar.php");
} else  if (isset($_SESSION['role'])) {
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

      <p class="titles">E-mail</p>
      <input type="text" name="email" class="signup-form-field" id="email" placeholder="">

      <p class=titles>Password</p>
      <div class=pass-container>
        <div class=bar-pass>
          <input type="password" name="password" id="password1" class="password-field" placeholder="">
          <p class="alert" id=alert1> </p>
        </div>

        <div class="help-tip">
          <p>&bull; At least 8 characters.<br> &bull; A mixture of both uppercase and lowercase letters <br> &bull; A mixture of letters and numbers
            <br> &bull; Inclusion of at least one special character, e.g., ! @ # ?


          </p>
        </div>
      </div>


      <p class=titles>Re-enter Password</p>
      <div class=pass-container>

        <div class=bar-pass>
          <input type="password" id="password2" class="password-field" placeholder="">
          <p class="alert" id="alert2"> </p>
        </div>
      </div>


      
      <p class="alert3" id="message"></p>


      </div>
      <div class=bottom-container>
        <a class=member href="/login.php">Already Member? Login</a>
        <button class="button-sign" id="submit">Sumbit</button>


    </form>


  </main>
</body>

</html>