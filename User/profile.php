<?php
include "navbar.php";



?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <title>Signup</title>
    <link rel="stylesheet" href="profile.css">

    <script defer src="profile.js"></script>

</head>

<body>
    <!-- Main -->
    <div class="main">
        <h2 id=profile> </h2>
        <div class="card">
            <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>Username :</td>

                            <td id="username">ImDezCode</td>
                        </tr>
                        <tr>
                            <td>Email :</td>

                            <td id="email">imdezcode@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Account Type :</td>

                            <td>User Account</td>
                        </tr>
                        <tr>
                            <td>Last Upload :</td>

                            <td id="last_upload"> You have not uploaded yet</td>
                        </tr>
                        <tr>
                            <td>Number of Entries :</td>

                            <td id=entries> 0</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

        <!-- End -->
        <div class=big-container>
            <div>


                <div class="main-small"  id=box1>
                    <h2>Change Password</h2>
                    <div class="card-small">
                        <div class="card-body">

                            <table>

                                <div class="container">
                                    <div class=input-container>
                                        
                                        <input type="password" placeholder="Your new Password" id=password1>
                                        <p class="alert" id=alert1> </p>
                                    </div>

                                    <div class=input-container>
                                        <input type="password" placeholder="Re-type your Password" id=password2>
                                        <p class="alert" id="alert2"> </p>
                                    </div>
                                </div>
                                <div class=button>
                                    <button class=but id=submit-pass> Apply</button>

                                </div>

                            </table>
                        </div>

                    </div>
                </div>
                <div class="main-small1"  id=box2>
                <h2>Change Username</h2>
                    <div class="card-small1">
                        <div class="card-body">

                            <table>

                                <div class="container">
                                    <div class=input-container>
                                        <input id="username-input" type="text" placeholder="Your new Username" >
                                        <p class="alert" id="alert3"> </p>
                                    </div>

                                </div>
                                <div class=button>
                                    <button class=but id=submit-username> Apply</button>

                                </div>

                            </table>
                        </div>

                    </div>
                </div>

            </div>


          
            <div class="but-container">
            <button class="but-new" id=but2>Change Username</button>
            
            <button class="but-new" id=but1>Change Password</button>
            </div>
          
</body>


</html>