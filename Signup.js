$(document).ready(function () {
    $("#password1,#password2").on('keyup', function ( correct) {
      var password1 = $("#password1").val();
      var password2 = $("#password2").val();
      var regularExpression =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      
      if (password1 != password2) {
        $("#alert1").text("Password is not the same");
        $("#alert2").text("Password is not the same");
      }
  
      else if( !password1.match(regularExpression)){
        $("#alert1").text("Password syntax is not correct");
        $("#alert2").text("Password syntax is not correct");
      }
      
      else {
        $("#alert1").text(" ");
        $("#alert2").text(" ");
        
      }
  
  
    });
  
  
    function formValidation (){
      correct =0;
      var password1 = $("#password1").val();
      var password2 = $("#password2").val();
      var regularExpression =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      
      if ( (password1 && password2) &&(password1 == password2) && password1.match(regularExpression)){
        correct = 1;
      }
     
      return correct;
    }
    
  
    $("#submit").click(function (e) {
      e.preventDefault();
      console.log("sending")
      var username = $("#username").val();
      var password = $("#password1").val();
      var email = $("#email").val();
      var correct = formValidation();
  
      if (username && password && correct ) {
        $.ajax({
          method: "POST",
          url: "http://localhost/register.php",
          data: {
            username: username,
            password: password,
            email:email
          },
  
          success: function (data) {
           
            $("#message").text(data);

          },
          error: function (err) {
            alert("There is an error" + er);
          },
        });
      }
      else {
         $("#message").text("Fill all the fields correct");
        
        
      }
     
    });
  });
  