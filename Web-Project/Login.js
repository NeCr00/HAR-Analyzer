
$(document).ready(function () {


    $("#button-login").click(function (e) {
       e.preventDefault();
        var username = $("#username-field").val()
        var password = $("#password-field").val()
        if (username != "" && password != "") {
            $.ajax({
                method: "POST",
                url: "/checkuser.php",
                data:{
                    username:username,
                    password:password
                },
                success: function (data) {
                    if(data == 1 )
                        location.reload();
                    else
                      $("#message").text("Invalid Credentials !");

                },
                error: function (er) {
                    alert("there is an error" + er)
                }

            });
        }

        else {
          
            $("#message").text("Please Fill All The Details !");
        }

    }
    );


}
);