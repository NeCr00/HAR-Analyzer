<?php

session_start();

unset ($_SESSION['username']);
unset ($_SESSION['type']);

session_unset();
session_destroy();

header('Location:http://localhost/login.php')

?>