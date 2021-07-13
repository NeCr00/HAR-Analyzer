<?php

session_start();

unset ($_SESSION['username']);
unset ($_SESSION['type']);

header('Location:http://localhost/login.php')

?>