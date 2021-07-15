<?php

session_start();

if (isset($_SESSION['username'])){
    Header("Location:http://localhost/User/user.php");
    exit();
}

?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <title>Login</title>
  <link rel="stylesheet" href="Login.css">
  <script defer src="Login.js"></script>
</head>

<body>
  <main id="main-holder">
    <h1 id="login-header">Welcome to HAR Analyzer </h1>
    
<!--    <div id="login-error-msg-holder">
      <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div> --> 
    
    <form id="login-form">
      <p class = "username-title">Username</p>
      <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username">

      <p class = password-title>Password</p>
      <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password">
      
      <p id = "message" class = "alert"> </p>
      <button class="button-login" id="button-login">Login</button>  


    </form>
    
   <a href="/signup.php">New to Har Analyzer? Sign up Now !</a>
  </main>
</body>

</html>
