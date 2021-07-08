$(document).ready(function () {
  $("#password1,#password2").change(function () {
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();

    if (password1 != password2) {
      $("#alert1").text("Password is not the same");
      $("#alert2").text("Password is not the same");
    } else {
      $("#alert1").text(" ");
      $("#alert2").text(" ");
    }
  });

  $("#submit").click(function(){
      var username = $("#username").val()
      var password = $("#password1").val()

      $.ajax({
          method: "POST",
          url:"http://localhost/Signup/Signup.php",
          data:{
              username: username,
              password: password
          },

          success: function(data){
              alert(data)
          },
          error: function(err){
              alert("There is an error" +er);
          }
      });
  })
});