
$(document).ready(function () {


    $("#button-login").click(function () {
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
                   alert(data)

                },
                error: function (er) {
                    alert("there is an error" + er)
                }

            });
        }

        else {
            alert("Please Fill All The Details");
        }

    }
    );


}
);