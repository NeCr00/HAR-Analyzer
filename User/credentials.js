$(document).ready(function() {
    $("#password1,#password2").on('keyup', function(correct) {
        var password1 = $("#password1").val();
        var password2 = $("#password2").val();
        var regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

        if (password1 != password2) {
            $("#alert1").text("Password is not the same");
            $("#alert2").text("Password is not the same");
        } else if (!password1.match(regularExpression)) {
            $("#alert1").text("Password syntax is not correct");
            $("#alert2").text("Password syntax is not correct");
        } else {
            $("#alert1").text(" ");
            $("#alert2").text(" ");

        }


    });


    function formValidation() {
        correct = 0;
        var password1 = $("#password1").val();
        var password2 = $("#password2").val();
        var regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

        if ((password1 && password2) && (password1 == password2) && password1.match(regularExpression)) {
            correct = 1;
        }

        return correct;
    }

    $("#submit_password").click(function(e) {
        e.preventDefault();
        var password = $("#password1").val();
        var correct = formValidation();

        if (correct) {
            $.ajax({
                method: "POST",
                url: "changepassword.php",
                data: {

                    password: password,
                },

                success: function(data) {

                    $("#message").text(data);
                },
                error: function(err) {
                    alert("There is an error" + err);
                },
            });
        } else {

            alert("Fill all the fields correct");

        }

    });







    $("#submit_username").click(function(e) {
        e.preventDefault();

        console.log("button pressed");
        var username = $("#username").val();



        $.ajax({
            method: "POST",
            url: "changeusername.php",
            data: {
                username: username,
            },
            success: function(data) {


                $("#message").text(data);


            },
            error: function(err) {
                alert("There is an error" + err);
            },
        });




    });

});